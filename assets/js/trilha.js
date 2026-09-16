/* ==========================================================================
   BIO em CASA — Capítulo "Trilha de Estudos"

   Motor reaproveitado de: mecanismos-testados/scroll-scene-build/
   A lógica de scrub (render(), fatias por peça, paralaxe contínuo, entrada
   por blur+rotação+escala) é a mesma do mecanismo já testado. O que mudou:

   1. PECAS  — assuntos e fotos reais (capas-conteudo/), em vez de ícones;
   2. moldura retangular arredondada (look aprovado no mockup), no lugar da
      moldura circular do mecanismo;
   3. mobile ganhou entrada própria por IntersectionObserver em vez de
      composição 100% estática — mobile também merece movimento autoral.

   ⚠ `position: sticky` do palco depende de NÃO haver `overflow-x: hidden`
   em html/body (usamos `overflow-x: clip` — ver site.css).
   ========================================================================== */

(function () {
  'use strict';

  /* --------------------------------------------------------------- CONFIG */
  /* `depth` 0.4–1: quanto maior, mais a peça segue se movendo depois de
     revelada. `size:"feature"` só numa peça. */
  var PECAS = [
    { rot:'Bioquímica',  txt:'A base molecular que sustenta todo o resto da matéria.',
      pos:'left',       img:'assets/img/capas/1-bioq.jpg',      size:'support', depth:0.5 },
    { rot:'Biologia Celular', txt:'Organelas e transporte, direto da membrana pro caderno.',
      pos:'mid-left',   img:'assets/img/capas/2-bio-cel.jpg',   size:'support', depth:0.7 },
    { rot:'Genética',    txt:'Do DNA à herança mendeliana, com os cruzamentos que mais caem em prova.',
      pos:'feature',    img:'assets/img/capas/3-genetica.jpg',  size:'feature', depth:1 },
    { rot:'Evolução',    txt:'Seleção natural e especiação, sem decoreba de nomes.',
      pos:'mid-right',  img:'assets/img/capas/4-evolucao.jpg',  size:'support', depth:0.6 },
    { rot:'Ecologia',    txt:'Do organismo à biosfera, sem pular etapa.',
      pos:'right',      img:'assets/img/capas/11-ecologia.jpg', size:'support', depth:0.8 },
    { rot:'Método BC',   txt:'Por trás de cada capítulo — até tudo fazer sentido.',
      pos:'low-center', img:'assets/img/marca/selo-bc.png',     size:'support', depth:0.45,
      selo:true }
  ];

  var wrap = document.getElementById('trilha');
  var alvo = document.getElementById('pecas');
  if (!wrap || !alvo) return;

  /* ------------------------------------------------------------- MONTAGEM */

  PECAS.forEach(function (p, i){
    var el = document.createElement('article');
    el.className = 'peca' + (p.selo ? ' peca--selo' : '');
    el.setAttribute('data-pos',  p.pos);
    el.setAttribute('data-size', p.size);
    el.setAttribute('data-depth', p.depth);
    el.innerHTML =
      '<div class="peca__art">' +
        '<img src="' + p.img + '" alt="' + p.rot + '" width="560" height="560" loading="lazy" decoding="async">' +
        '<span class="peca__n" aria-hidden="true">0' + (i+1) + '</span>' +
      '</div>' +
      '<h3>' + p.rot + '</h3>' +
      '<p>' + p.txt + '</p>';
    alvo.appendChild(el);
  });

  /* ------------------------------------------------------------------ FIO
     Uma curva suave ligando o centro das molduras, na ordem da trilha. Ela
     se desenha conforme as peças aparecem — é a tese da marca ("cada assunto
     conversa com o anterior") desenhada, não só escrita. */
  var pecas  = [].slice.call(alvo.querySelectorAll('.peca'));
  var noArco = pecas.filter(function (el){ return el.getAttribute('data-pos') !== 'low-center'; });

  var svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
  svg.setAttribute('class','fio');
  svg.setAttribute('aria-hidden','true');
  var linha = document.createElementNS('http://www.w3.org/2000/svg','path');
  svg.appendChild(linha);
  alvo.insertBefore(svg, alvo.firstChild);
  var fioLen = 0;

  var ancoras = [];

  /* Âncoras medidas com os transforms inline zerados: precisamos da posição
     de REPOUSO de cada moldura, não da posição já deslocada pelo paralaxe. */
  function traçaFio(){
    var salvos = pecas.map(function (el){ return el.style.transform; });
    pecas.forEach(function (el){ el.style.transform = ''; });

    var base = alvo.getBoundingClientRect();
    ancoras = noArco.map(function (el){
      var a = el.querySelector('.peca__art').getBoundingClientRect();
      return { x: a.left - base.left + a.width/2, y: a.top - base.top + a.height/2 };
    });
    pecas.forEach(function (el, i){ el.style.transform = salvos[i]; });

    if (!base.width){ fioLen = 0; return; }
    svg.setAttribute('viewBox', '0 0 ' + Math.round(base.width) + ' ' + Math.round(base.height));
    linha.setAttribute('d', caminho(null));
    fioLen = linha.getTotalLength();
    linha.style.strokeDasharray  = fioLen;
    linha.style.strokeDashoffset = fioLen;
  }

  /* curva por pontos médios — traço orgânico, do vocabulário da marca */
  function caminho(desloc){
    var p0 = ancoras[0];
    var dy0 = desloc ? desloc[0] : 0;
    var d = 'M' + p0.x.toFixed(1) + ',' + (p0.y + dy0).toFixed(1);
    for (var i = 1; i < ancoras.length - 1; i++){
      var a = ancoras[i], b = ancoras[i+1];
      var da = desloc ? desloc[i] : 0, db = desloc ? desloc[i+1] : 0;
      d += ' Q' + a.x.toFixed(1) + ',' + (a.y + da).toFixed(1) + ' ' +
           ((a.x + b.x)/2).toFixed(1) + ',' + ((a.y + da + b.y + db)/2).toFixed(1);
    }
    var u = ancoras[ancoras.length-1];
    var du = desloc ? desloc[ancoras.length-1] : 0;
    return d + ' L' + u.x.toFixed(1) + ',' + (u.y + du).toFixed(1);
  }

  /* O fio acompanha o paralaxe das peças (mesmos deslocamentos calculados em
     render()), senão ele descolaria das molduras conforme elas sobem. */
  function desenhaFio(prog, desloc){
    if (!fioLen) return;
    linha.setAttribute('d', caminho(desloc));
    var n = pecas.length;
    var feito = Math.min(1, Math.max(0, (prog * n - 0.6) / (n - 1.2)));
    linha.style.strokeDashoffset = fioLen * (1 - feito);
  }

  var mReduz  = window.matchMedia('(prefers-reduced-motion: reduce)');
  var mMobile = window.matchMedia('(max-width: 760px)');

  /* ------------------------------------------------- MOBILE / REDUZIDO */
  /* Sem pin: a composição empilha (CSS) e cada peça entra sozinha ao chegar
     na tela — o beat de descoberta continua existindo, só que vertical. */
  function semPin(){
    pecas.forEach(function (el){ el.style.cssText = ''; });
    svg.style.display = 'none';
    if (mReduz.matches || !('IntersectionObserver' in window)) return;

    var io = new IntersectionObserver(function (ents){
      ents.forEach(function (e){
        if (!e.isIntersecting) return;
        e.target.animate(
          [ { opacity:0, transform:'translateY(26px) scale(.94)', filter:'blur(10px)' },
            { opacity:1, transform:'none',                        filter:'blur(0)'   } ],
          { duration:760, easing:'cubic-bezier(.16,1,.3,1)', fill:'backwards' }
        );
        io.unobserve(e.target);
      });
    }, { threshold:0.25 });
    pecas.forEach(function (el){ io.observe(el); });
  }

  /* ----------------------------------------------------- ANEL (MOBILE) */
  /* O anel de CSS já posiciona as peças no círculo (ver home.css). Aqui só
     coreografamos a ENTRADA: o selo Método BC (o hub) aparece primeiro, e os
     5 assuntos entram um por um, voando do centro para o lugar deles no
     anel — a trilha se formando, não só surgindo pronta. */
  function entradaAnel(){
    pecas.forEach(function (el){ el.style.cssText = ''; });
    svg.style.display = 'none';
    if (mReduz.matches || !('IntersectionObserver' in window)) return;

    var hub = pecas.filter(function (el){ return el.getAttribute('data-pos') === 'low-center'; })[0];
    var anel = pecas.filter(function (el){ return el.getAttribute('data-pos') !== 'low-center'; });
    var disparado = false;

    var io = new IntersectionObserver(function (ents){
      ents.forEach(function (e){
        if (!e.isIntersecting || disparado) return;
        disparado = true;
        io.disconnect();

        if (hub){
          hub.animate(
            [ { opacity:0, transform:'translate(-50%,-50%) scale(.4)' },
              { opacity:1, transform:'translate(-50%,-50%) scale(1)' } ],
            { duration:480, easing:'cubic-bezier(.16,1,.3,1)', fill:'backwards' }
          );
        }
        var centroHub = hub ? hub.getBoundingClientRect() : null;
        var origem = centroHub ? { x:centroHub.left + centroHub.width/2, y:centroHub.top + centroHub.height/2 } : null;

        anel.forEach(function (el, i){
          var r = el.getBoundingClientRect();
          var centro = { x:r.left + r.width/2, y:r.top + r.height/2 };
          var dx = origem ? (origem.x - centro.x) : 0;
          var dy = origem ? (origem.y - centro.y) : 0;

          el.animate(
            [ { opacity:0, transform:'translate(-50%,-50%) translate(' + dx.toFixed(1) + 'px,' + dy.toFixed(1) + 'px) scale(.3)' },
              { opacity:1, transform:'translate(-50%,-50%) translate(0,0) scale(1)' } ],
            { duration:560, delay:340 + i * 180, easing:'cubic-bezier(.16,1,.3,1)', fill:'backwards' }
          );
        });
      });
    }, { threshold:0.3 });
    io.observe(alvo);
  }

  /* ---------------------------------------------------------- MOTOR SCRUB */

  var tick = false, ligado = false;

  function facil(t){ return 1 - Math.pow(1-t, 3); }

  function render(){
    tick = false;
    var r = wrap.getBoundingClientRect();
    var total = r.height - window.innerHeight;
    var prog  = total > 0 ? (-r.top) / total : 0;
    prog = Math.min(1, Math.max(0, prog));

    var fatia = 1 / pecas.length;
    var desloc = [];

    pecas.forEach(function (peca, i){
      var ini = i * fatia * 0.85;
      var fim = ini + fatia * 0.55;
      var loc = Math.min(1, Math.max(0, (prog - ini) / (fim - ini)));
      var e   = facil(loc);

      var depth   = parseFloat(peca.getAttribute('data-depth')) || 0.6;
      var pos     = peca.getAttribute('data-pos');
      var central = pos === 'feature' || pos === 'low-center';
      var parallax = (prog - ini) * 42 * depth;   /* segue se movendo depois */

      var rot   = (central ? 0 : (pos === 'left' || pos === 'mid-left' ? -6 : 6)) * (1 - e);
      var sobe  = 34 * (1 - e) + parallax;
      var esc   = 0.9 + 0.1 * e;
      var blur  = (1 - e) * 10;

      var base = central ? 'translate(-50%,' + (-sobe) + 'px)'
                         : 'translateY(' + (-sobe) + 'px)';

      if (peca.getAttribute('data-pos') !== 'low-center') desloc.push(-sobe);
      peca.style.opacity   = e;
      peca.style.filter    = 'blur(' + blur.toFixed(1) + 'px)';
      peca.style.transform = base + ' rotate(' + rot.toFixed(1) + 'deg) scale(' + esc.toFixed(3) + ')';
    });

    desenhaFio(prog, desloc);
  }

  function aoRolar(){ if (!tick){ requestAnimationFrame(render); tick = true; } }

  var tFio;
  function refazFio(){
    clearTimeout(tFio);
    tFio = setTimeout(function (){ traçaFio(); render(); }, 140);
  }

  function comPin(){
    if (ligado) return;
    ligado = true;
    svg.style.display = '';
    traçaFio();
    window.addEventListener('scroll', aoRolar, { passive:true });
    window.addEventListener('resize', refazFio);
    render();
  }

  function decide(){
    if (mReduz.matches || mMobile.matches){
      if (ligado){
        window.removeEventListener('scroll', aoRolar);
        window.removeEventListener('resize', refazFio);
        ligado = false;
      }
      if (mMobile.matches && !mReduz.matches) entradaAnel();
      else semPin();
    } else {
      comPin();
    }
  }

  (mMobile.addEventListener ? mMobile.addEventListener('change', decide)
                            : mMobile.addListener && mMobile.addListener(decide));
  (mReduz.addEventListener ? mReduz.addEventListener('change', decide)
                           : mReduz.addListener && mReduz.addListener(decide));

  decide();
})();
