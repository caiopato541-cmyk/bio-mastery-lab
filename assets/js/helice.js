/* ==========================================================================
   BIO em CASA — Hélice do Hero (momento focal)

   REGRA DESTE ARQUIVO: a hélice NUNCA é trocada por imagem — ela é sempre
   REDESENHADA. É um único objeto contínuo que ganha especificidade conforme
   o scroll, em três estados:

     01  A HÉLICE        — dupla hélice inteira, rungs coloridos
     02  O PAR DE BASES  — zoom progressivo; 2–3 pares ficam grandes e
                           ganham rótulo real (A·T, G·C, ...)
     03  O CROMOSSOMO    — as duas fitas se resolvem num cromossomo
                           condensado (X), fazendo a ponte visual para o
                           capítulo "Trilha de Estudos"

   Canvas 2D puro: sem WebGL, sem GSAP, sem CDN. O efeito inteiro é
   geometria 2D + gradientes.
   ========================================================================== */

(function () {
  'use strict';

  var wrap = document.getElementById('hero');
  var cv   = document.getElementById('helice');
  if (!wrap || !cv || !cv.getContext) return;

  var ctx   = cv.getContext('2d');
  var palco = wrap.querySelector('.hero-palco');
  var foto  = wrap.querySelector('.hero-foto');
  var motivo = wrap.querySelector('.motivo');
  /* opacidade de repouso lida do CSS (site.css .motivo{opacity:.09}) — não
     duplica o número aqui, só multiplica por ela conforme a foto sai. */
  var motivoOp = motivo ? parseFloat(getComputedStyle(motivo).opacity) || 0 : 0;
  var beats = [].slice.call(wrap.querySelectorAll('.beat'));
  var capNo = document.getElementById('hero-cap-n');
  var capTx = document.getElementById('hero-cap-t');

  var mReduz  = window.matchMedia('(prefers-reduced-motion: reduce)');
  var mMobile = window.matchMedia('(max-width: 760px)');

  /* ---------------------------------------------------------------- CONFIG */

  /* Quatro tipos de par de base — a cor É o par, não é enfeite.
     (paleta complementar da marca, liberada aqui pelo briefing do Hero) */
  /* `a` fica na fita "lado 0" (ponto A do rung), `b` na fita "lado 1" (ponto
     B) — são bases realmente opostas, cada uma na sua fita, nunca o par
     inteiro escrito de um só lado (isso é o que a dupla-hélice real faz:
     A parea com T, C com G, sempre em fitas opostas). */
  var PARES = [
    { cor:'#A5CF72', a:'A', b:'T' },
    { cor:'#F5DF7F', a:'T', b:'A' },
    { cor:'#9755B3', a:'G', b:'C' },
    { cor:'#FC9ADE', a:'C', b:'G' }
  ];
  var SEQ = [0,2,1,3,2,0,3,1,0,1,3,2,1,0,2,3,2,1,0,3,1,2,3,0,0,3,2,1,3,0];

  var VOLTAS   = 3.15;   /* voltas completas da hélice          */
  var SEGS     = 90;     /* resolução das fitas                 */
  var ZOOM_MAX = 2.5;    /* escala no estado 02                 */
  var U_FOCO   = 0.335;  /* trecho da hélice que recebe o zoom  */

  var FRENTE = [159,246,181];   /* #9FF6B5 — fita virada pra frente */
  var FUNDO  = [ 63, 94, 91];   /* #3F5E5B — fita no fundo          */

  /* ----------------------------------------------------------------- UTIL */

  var TAU = Math.PI * 2;
  function lerp(a,b,t){ return a + (b-a)*t; }
  function clamp(v,a,b){ return v<a?a:(v>b?b:v); }
  function suave(t){ return t*t*(3-2*t); }                 /* smoothstep     */
  function saida(t){ return 1-Math.pow(1-t,3); }           /* ease-out cubic */
  function faixa(p,a,b){ return clamp((p-a)/(b-a),0,1); }
  function mistura(c1,c2,t){
    return 'rgb(' + Math.round(lerp(c1[0],c2[0],t)) + ',' +
                    Math.round(lerp(c1[1],c2[1],t)) + ',' +
                    Math.round(lerp(c1[2],c2[2],t)) + ')';
  }

  /* --------------------------------------------------------------- ESTADO */

  var W = 0, H = 0, dpr = 1;
  var fase = 0;            /* rotação lenta e contínua — nunca fica parado */
  var prog = 0;            /* 0→1 ao longo do #hero                        */
  var ultimo = 0, rodando = false, visivel = true, raf = 0;
  var beatAtual = -1;

  function medir(){
    var r = cv.getBoundingClientRect();
    W = Math.max(1, Math.round(r.width));
    H = Math.max(1, Math.round(r.height));
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    cv.width  = Math.round(W * dpr);
    cv.height = Math.round(H * dpr);
    ctx.setTransform(dpr,0,0,dpr,0,0);
  }

  /* ------------------------------------------------------------ GEOMETRIA */

  /* Um ponto de uma fita. `cond` 0→1 interpola da hélice para o cromossomo:
     a fita A vai de cima-esquerda ao centro e desce pra baixo-direita ("\"),
     a fita B faz o inverso ("/"). As duas se cruzam no centrômero — o mesmo
     objeto, nunca um desenho novo. */
  function ponto(u, lado, cond, G){
    var ang = u * VOLTAS * TAU + fase + (lado ? Math.PI : 0);
    var hx  = G.cx + G.R * Math.sin(ang);
    var hy  = G.yTop + u * G.L;
    var d   = Math.cos(ang);

    if (cond <= 0) return { x:hx, y:hy, d:d };

    var m   = (u - 0.5) * 2;                       /* -1 .. 1               */
    var bow = 1 - Math.pow(Math.abs(m), 1.9) * 0.22;
    var s   = lado ? -1 : 1;
    var cxp = G.cx + s * G.braco * m * bow;

    return { x: lerp(hx, cxp, cond), y: hy, d: lerp(d, 0.6, cond) };
  }

  /* Escreve uma letra de base junto do seu próprio ponto na fita, alinhada
     para fora do eixo central (nunca colada na linha do rung). */
  function rotuloBase(p, letra, cx, z){
    var fora = 10 / z;
    if (p.x < cx){ ctx.textAlign = 'right'; ctx.fillText(letra, p.x - fora, p.y); }
    else         { ctx.textAlign = 'left';  ctx.fillText(letra, p.x + fora, p.y); }
  }

  /* ---------------------------------------------------------------- DESENHO */

  function desenha(){
    ctx.clearRect(0,0,W,H);

    /* --- mapeamento do progresso nos três estados --- */
    var zoomB, cond;
    if (prog < 0.26)      zoomB = 0;
    else if (prog < 0.55) zoomB = saida(faixa(prog,0.26,0.55));
    else if (prog < 0.72) zoomB = 1 - saida(faixa(prog,0.55,0.72));
    else                  zoomB = 0;
    cond = prog < 0.72 ? 0 : saida(faixa(prog,0.72,1));

    /* rótulos: ligados ao SCROLL (não ao zoom) — começam a aparecer assim
       que a foto do professor sai de cena (mesmo intervalo de progresso do
       fotoSai(), prog 0.10→0.30) e cobrem a hélice inteira nesse momento,
       porque nitidez(u) ainda devolve 1 pra qualquer u enquanto o zoom não
       começou de verdade. Conforme o zoom avança, nitidez(u) estreita
       sozinha pro par em foco — sem precisar de uma segunda regra aqui. */
    var rotulos = suave(faixa(prog, 0.16, 0.30));
    var z = lerp(1, ZOOM_MAX, zoomB);

    /* "o resto sai de foco": quanto maior o zoom, mais rapido a hélice se
       apaga fora da vizinhança do par em foco — sobram 2–3 pares grandes. */
    function nitidez(u){
      if (zoomB < 0.02) return 1;
      var d = Math.min(1, Math.abs(u - U_FOCO) / 0.09);
      return lerp(1, 1 - d * d, zoomB);
    }

    /* --- geometria base ---
       No mobile a helice mora na metade de cima da tela (os tres beats de
       copy ocupam a metade de baixo). No desktop ela fica entre a coluna de
       texto e a foto, e desliza para o centro conforme a foto sai. */
    var celular = mMobile.matches;
    var L  = celular ? Math.min(H * 0.46, 360) : Math.min(H * 0.74, 560);
    var cy = celular ? H * 0.25 : H * 0.5;
    var G  = {
      L: L,
      R: L * 0.25,
      braco: L * 0.30,
      cx: W * (celular ? 0.5 : lerp(0.565, 0.58, faixa(prog,0.14,0.5))),
      yTop: cy - L / 2
    };

    /* --- camera: em z = 1 a transformacao precisa ser a IDENTIDADE, senao o
       objeto e arrastado para o centro do canvas mesmo sem zoom nenhum. --- */
    var fx = lerp(W * 0.5, G.cx, zoomB);
    var fy = lerp(H * 0.5, G.yTop + U_FOCO * L, zoomB);

    /* o alvo da câmera migra para a direita no zoom: os pares grandes ocupam
       o lado da foto, e a coluna de texto continua limpa e legível */
    var tx = lerp(W * 0.5, W * (celular ? 0.5 : 0.70), zoomB);

    ctx.save();
    ctx.translate(tx, H/2);
    ctx.scale(z, z);
    ctx.translate(-fx, -fy);

    /* ---- rungs (pares de base) ---- */
    var nR = SEQ.length;
    for (var i = 0; i < nR; i++){
      var u  = (i + 0.5) / nR;
      var A  = ponto(u, 0, cond, G);
      var B  = ponto(u, 1, cond, G);
      var fr = 0.5 + 0.5 * A.d;                         /* 0 fundo, 1 frente */
      var par = PARES[SEQ[i]];

      var a = (0.22 + 0.62 * fr) * (1 - cond * 0.93) * nitidez(u);
      if (a <= 0.01) continue;

      ctx.globalAlpha = a;
      ctx.strokeStyle = par.cor;
      ctx.lineWidth   = (1.4 + 2.6 * fr) / z;
      ctx.lineCap     = 'round';
      ctx.beginPath();
      ctx.moveTo(A.x, A.y);
      ctx.lineTo(B.x, B.y);
      ctx.stroke();

      /* rótulo real do par, em toda barrinha visível — não só nas 2-3 do
         zoom apertado. Cada base é escrita junto do SEU ponto, em fitas
         opostas, nunca as duas letras juntas de um só lado do rung (A.x e
         B.x já são simétricos em torno de G.cx por construção da hélice —
         ver ponto()). `pesoRotulo` combina quatro fatores: `rotulos` (liga
         no scroll certo), `nitidez(u)` (mesma máscara da linha — cobre tudo
         cedo, estreita sozinha durante o zoom), `cond` (some ao virar
         cromossomo) e um peso pela frente (`fr`) que apaga rótulos de
         barrinhas viradas de costas, pra não empilhar texto. */
      var pesoRotulo = rotulos * nitidez(u) * (1 - cond * 0.95) * clamp((fr - 0.28) / 0.55, 0, 1);
      if (pesoRotulo > 0.03){
        ctx.globalAlpha = pesoRotulo;
        ctx.fillStyle = par.cor;
        ctx.font = '700 ' + (15 / z) + 'px Inter, system-ui, sans-serif';
        ctx.textBaseline = 'middle';
        rotuloBase(A, par.a, G.cx, z);
        rotuloBase(B, par.b, G.cx, z);
      }
    }

    /* ---- as duas fitas ---- */
    for (var lado = 0; lado < 2; lado++){
      var ant = ponto(0, lado, cond, G);
      for (var s = 1; s <= SEGS; s++){
        var pt = ponto(s / SEGS, lado, cond, G);
        var fr2 = 0.5 + 0.5 * (pt.d + ant.d) / 2;

        /* halo só nos trechos virados pra frente (custo controlado) */
        var nit = nitidez((s - 0.5) / SEGS);
        if (fr2 > 0.55){
          ctx.globalAlpha = (fr2 - 0.55) * 0.5 * nit;
          ctx.strokeStyle = '#7FD997';
          ctx.lineWidth = (lerp(3, 15, cond) + 7) / z;
          ctx.lineCap = 'round';
          ctx.beginPath(); ctx.moveTo(ant.x, ant.y); ctx.lineTo(pt.x, pt.y); ctx.stroke();
        }

        ctx.globalAlpha = (0.45 + 0.55 * fr2) * nit;
        ctx.strokeStyle = mistura(FUNDO, FRENTE, fr2);
        ctx.lineWidth = (lerp(2.2, 3.6, fr2) + cond * 17) / z;
        ctx.lineCap = 'round';
        ctx.beginPath(); ctx.moveTo(ant.x, ant.y); ctx.lineTo(pt.x, pt.y); ctx.stroke();
        ant = pt;
      }
    }

    /* ---- centrômero: só aparece quando o cromossomo se forma ---- */
    if (cond > 0.25){
      var ca = (cond - 0.25) / 0.75;
      ctx.globalAlpha = ca * 0.9;
      ctx.fillStyle = '#171717';
      ctx.beginPath();
      ctx.ellipse(G.cx, G.yTop + G.L/2, (G.R*0.30)*ca, (G.L*0.028)*ca, 0, 0, TAU);
      ctx.fill();
    }

    ctx.restore();
    ctx.globalAlpha = 1;
  }

  /* ------------------------------------------------- SINCRONIA COM A PÁGINA */

  function capitulo(){
    var n, t;
    if (prog < 0.30)      { n = '01'; t = 'A hélice'; }
    else if (prog < 0.70) { n = '02'; t = 'O par de bases'; }
    else                  { n = '03'; t = 'O cromossomo'; }
    if (capNo && capNo.textContent !== n){ capNo.textContent = n; capTx.textContent = t; }
  }

  function beat(){
    var i = prog < 0.30 ? 0 : (prog < 0.68 ? 1 : 2);
    if (i === beatAtual) return;
    beatAtual = i;
    beats.forEach(function (b, k){
      if (k === i) b.setAttribute('data-ativo','');
      else b.removeAttribute('data-ativo');
      b.setAttribute('aria-hidden', k === i ? 'false' : 'true');
    });
  }

  var dica = wrap.querySelector('.hero-rolar');

  function fotoSai(){
    if (dica) dica.style.opacity = String(1 - suave(faixa(prog, 0.04, 0.16)));
    var s = suave(faixa(prog, 0.10, 0.30));
    /* o mark só faz sentido "atrás da foto" — sem ela, ele ficava exposto e
       sozinho durante o zoom e o cromossomo, disputando com a hélice (achado
       ao verificar o resultado). Sai junto, na mesma curva. */
    if (motivo) motivo.style.opacity = String(motivoOp * (1 - s));
    if (!foto) return;
    foto.style.opacity   = String(1 - s);
    foto.style.transform = 'translateY(' + (-s * 70) + 'px) scale(' + (1 - s*0.06) + ')';
  }

  function lerProgresso(){
    var r = wrap.getBoundingClientRect();
    var total = r.height - window.innerHeight;
    prog = total > 0 ? clamp(-r.top / total, 0, 1) : 0;
  }

  /* ------------------------------------------------------------- LOOP */

  function quadro(agora){
    raf = 0;
    if (!rodando) return;
    var dt = ultimo ? Math.min((agora - ultimo) / 1000, 0.05) : 0.016;
    ultimo = agora;
    fase += dt * 0.16;                 /* deriva contínua: nunca estático */
    lerProgresso();
    desenha(); capitulo(); beat(); fotoSai();
    raf = requestAnimationFrame(quadro);
  }

  function liga(){
    if (rodando || !visivel) return;
    rodando = true; ultimo = 0;
    raf = requestAnimationFrame(quadro);
  }
  function desliga(){
    rodando = false;
    if (raf) cancelAnimationFrame(raf), raf = 0;
  }

  /* --------------------------------------------------- MOVIMENTO REDUZIDO */

  function estatico(){
    desliga();
    palco.classList.remove('tem-js');
    beats.forEach(function (b){ b.removeAttribute('aria-hidden'); b.removeAttribute('data-ativo'); });
    if (foto){ foto.style.opacity = ''; foto.style.transform = ''; }
    if (motivo){ motivo.style.opacity = ''; }
    if (capNo){ capNo.textContent = '01'; capTx.textContent = 'A hélice'; }
    prog = 0; fase = 0.6;
    medir(); desenha();                /* um único quadro, hélice inteira */
  }

  /* ------------------------------------------------------------- ARRANQUE */

  function inicia(){
    if (mReduz.matches){ estatico(); return; }
    palco.classList.add('tem-js');
    medir();
    lerProgresso();
    liga();
  }

  /* pausa o canvas quando o hero sai da tela — orçamento de motion */
  if ('IntersectionObserver' in window){
    new IntersectionObserver(function (ents){
      visivel = ents[0].isIntersecting;
      if (visivel && !mReduz.matches) liga(); else desliga();
    }, { rootMargin: '120px' }).observe(wrap);
  }

  document.addEventListener('visibilitychange', function (){
    if (document.hidden) desliga();
    else if (!mReduz.matches) liga();
  });

  var tRedim;
  window.addEventListener('resize', function (){
    clearTimeout(tRedim);
    tRedim = setTimeout(function (){
      medir();
      if (mReduz.matches) estatico(); else desenha();
    }, 140);
  }, { passive:true });

  (mReduz.addEventListener ? mReduz.addEventListener('change', inicia)
                           : mReduz.addListener && mReduz.addListener(inicia));

  inicia();
})();
