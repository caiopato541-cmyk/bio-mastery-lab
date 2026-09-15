/* ==========================================================================
   BIO em CASA — marca viva
   As 7 formas do mark se montam conforme o bloco entra na tela e se soltam
   conforme ele sai. O estado de repouso (sem JS, sem scroll, com movimento
   reduzido) é o logo MONTADO: a animação acrescenta, não sustenta.
   ========================================================================== */

(function () {
  'use strict';

  var caixa = document.querySelector('.marca-viva');
  if (!caixa) return;

  var formas = [].slice.call(caixa.querySelectorAll('span'));
  if (!formas.length) return;

  var reduz = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduz.matches) return;              /* fica montado, sem animação */

  caixa.classList.add('viva');

  /* direção de saída de cada forma: a sua própria posição em relação ao
     centro do mark. Formas do miolo mal se movem — é o que faz a montagem
     parecer uma coisa se fechando, e não sete peças caindo juntas. */
  var alvos = formas.map(function (el, i){
    var cx = parseFloat(el.getAttribute('data-cx'));
    var cy = parseFloat(el.getAttribute('data-cy'));
    var d  = Math.sqrt(cx*cx + cy*cy) || 0.001;
    return {
      el: el,
      dx: (cx/d) * (0.5 + d*1.9),         /* longe do centro, sai mais longe */
      dy: (cy/d) * (0.5 + d*1.9),
      giro: (i % 2 ? 1 : -1) * (14 + (i % 3) * 7)
    };
  });

  var PASSO = 0.085;                      /* atraso entre formas (de baixo p/ cima) */
  var ESCALA = 1 - PASSO * (formas.length - 1);

  function suave(t){ return t*t*(3-2*t); }
  function saida(t){ return 1 - Math.pow(1-t, 2.2); }   /* desaceleração suave */
  function trava(v){ return v < 0 ? 0 : (v > 1 ? 1 : v); }

  var pedido = false, dentro = true;

  function pinta(){
    pedido = false;
    var r  = caixa.getBoundingClientRect();
    var vh = window.innerHeight;

    /* PISTA DE SCROLL — o ponto que decide o ritmo.
       Medir a distância até o CENTRO da tela dava só ~0,33 de viewport de
       pista (o mark entra por baixo e já está centrado logo em seguida): a
       formação inteira cabia em ~300px de scroll e passava rápido demais.
       Aqui a entrada começa um pouco ANTES do mark aparecer (topo a 1,15 de
       viewport) e termina quando ele sobe a 34% da altura: 0,81 de viewport
       de pista. O trecho fora da tela é curto de propósito — o mark surge já
       com as primeiras formas a caminho, em vez de começar do zero. */
    var topo = r.top;
    var entra = trava((vh * 1.15 - topo) / (vh * 0.81));

    /* Saída: o logo se solta de novo só quando está de fato deixando o topo,
       nunca durante a leitura do CTA. */
    var sai = suave(trava((topo + r.height) / (vh * 0.30)));

    var f = Math.min(entra, sai);

    caixa.style.setProperty('--formado', f.toFixed(3));

    alvos.forEach(function (a, i){
      /* uma curva só, e de desaceleração: com smoothstep aplicado aqui E no
         `f`, o meio da montagem disparava e era ele que dava a sensação de
         "rápido demais", mesmo com pista longa. */
      var fi = saida(trava((f - i*PASSO) / ESCALA));
      var s  = 1 - fi;
      a.el.style.opacity   = fi.toFixed(3);
      a.el.style.filter    = s > 0.01 ? 'blur(' + (s*4).toFixed(1) + 'px)' : '';
      a.el.style.transform =
        'translate(' + (a.dx*s*62).toFixed(1) + '%,' + (a.dy*s*62).toFixed(1) + '%)' +
        ' rotate(' + (a.giro*s).toFixed(1) + 'deg)' +
        ' scale(' + (1 - s*0.42).toFixed(3) + ')';
    });
  }

  function pedir(){ if (!pedido && dentro){ pedido = true; requestAnimationFrame(pinta); } }

  if ('IntersectionObserver' in window){
    new IntersectionObserver(function (e){
      dentro = e[0].isIntersecting; pedir();
    }, { rootMargin:'40% 0px' }).observe(caixa);
  }

  window.addEventListener('scroll', pedir, { passive:true });
  window.addEventListener('resize', pedir);
  pinta();
})();
