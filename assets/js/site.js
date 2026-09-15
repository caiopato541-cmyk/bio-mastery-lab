/* ==========================================================================
   BIO em CASA — comportamento compartilhado entre as páginas
   Header, menu mobile, barra de progresso e revelações de apoio.
   (Movimento secundário: o momento principal é a hélice do Hero.)
   ========================================================================== */

(function () {
  'use strict';

  var reduz = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var raiz  = document.documentElement;

  /* --------------------------------------------------- header + progresso */

  var topo  = document.querySelector('.topo');
  var barra = document.querySelector('.progresso');
  var agendado = false;

  function aoRolar(){
    agendado = false;
    var y = window.scrollY || raiz.scrollTop;
    if (topo) topo.setAttribute('data-stuck', y > 40 ? '1' : '0');
    if (barra){
      var alt = raiz.scrollHeight - raiz.clientHeight;
      barra.style.width = (alt > 0 ? (y / alt) * 100 : 0) + '%';
    }
  }
  function pedir(){ if (!agendado){ agendado = true; requestAnimationFrame(aoRolar); } }
  window.addEventListener('scroll', pedir, { passive:true });
  aoRolar();

  /* --------------------------------------------------------- menu mobile */

  var btn = document.querySelector('.menu-btn');
  var gaveta = document.getElementById('gaveta');

  function fecha(){
    raiz.removeAttribute('data-menu');
    if (btn) btn.setAttribute('aria-expanded','false');
  }
  function alterna(){
    var aberto = raiz.getAttribute('data-menu') === 'aberto';
    if (aberto) return fecha();
    raiz.setAttribute('data-menu','aberto');
    btn.setAttribute('aria-expanded','true');
    var link = gaveta && gaveta.querySelector('a');
    if (link) link.focus();
  }
  if (btn && gaveta){
    btn.addEventListener('click', alterna);
    gaveta.addEventListener('click', function (e){ if (e.target.tagName === 'A') fecha(); });
    document.addEventListener('keydown', function (e){
      if (e.key === 'Escape' && raiz.getAttribute('data-menu') === 'aberto'){ fecha(); btn.focus(); }
    });
  }

  /* ------------------------------------------------ revelações de apoio */

  var alvos = [].slice.call(document.querySelectorAll('[data-revelar],[data-revelar-img]'));
  if (!alvos.length) return;

  if (reduz || !('IntersectionObserver' in window)){
    alvos.forEach(function (el){ el.classList.add('visivel'); });
    return;
  }

  var io = new IntersectionObserver(function (ents){
    ents.forEach(function (e){
      if (!e.isIntersecting) return;
      e.target.classList.add('visivel');
      io.unobserve(e.target);
    });
  }, { threshold:0.12, rootMargin:'0px 0px -8% 0px' });

  alvos.forEach(function (el){ io.observe(el); });
})();

/* ano corrente no rodapé */
(function (){
  var el = document.getElementById('ano');
  if (el) el.textContent = new Date().getFullYear();
})();
