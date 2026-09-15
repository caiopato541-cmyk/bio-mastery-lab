/* ==========================================================================
   BIO em CASA — páginas internas
   Único movimento próprio: um deslocamento suave da imagem dentro da moldura
   do retrato (profundidade), ligado ao scroll. Tudo o mais é apoio (site.js).
   ========================================================================== */

(function () {
  'use strict';

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var quadros = [].slice.call(document.querySelectorAll('[data-parallax]'));
  if (!quadros.length) return;

  var alvos = quadros.map(function (el){ return { caixa: el, img: el.querySelector('img') }; })
                     .filter(function (a){ return a.img; });
  var pedido = false, dentro = [];

  function pinta(){
    pedido = false;
    var vh = window.innerHeight;
    dentro.forEach(function (a){
      var r = a.caixa.getBoundingClientRect();
      /* -1 (entrando por baixo) → 1 (saindo por cima) */
      var t = ((r.top + r.height / 2) / (vh / 2)) - 1;
      a.img.style.transform = 'translateY(' + (t * -3.2).toFixed(2) + '%)';
    });
  }
  function pedir(){ if (!pedido){ pedido = true; requestAnimationFrame(pinta); } }

  if ('IntersectionObserver' in window){
    var io = new IntersectionObserver(function (ents){
      ents.forEach(function (e){
        var a = alvos.filter(function (x){ return x.caixa === e.target; })[0];
        var i = dentro.indexOf(a);
        if (e.isIntersecting && i < 0) dentro.push(a);
        else if (!e.isIntersecting && i >= 0) dentro.splice(i,1);
      });
      pedir();
    });
    alvos.forEach(function (a){ io.observe(a.caixa); });
  } else {
    dentro = alvos.slice();
  }

  window.addEventListener('scroll', pedir, { passive:true });
  window.addEventListener('resize', pedir);
  pedir();
})();
