/* ==========================================================================
   BIO em CASA — página ENEM: contagem regressiva do bloco de investimento.
   Prazo rolante de 47h por visitante (persistido em localStorage), mesma
   lógica da copy original — só reescrita em JS puro, sem dependência de
   framework, pra seguir a arquitetura do site.
   ========================================================================== */

(function () {
  'use strict';

  var caixa = document.querySelector('[data-contagem]');
  if (!caixa) return;

  var elH = caixa.querySelector('[data-cd="h"]');
  var elM = caixa.querySelector('[data-cd="m"]');
  var elS = caixa.querySelector('[data-cd="s"]');
  if (!elH || !elM || !elS) return;

  var CHAVE = 'bec_enem_prazo';
  var DURACAO = 47 * 60 * 60 * 1000;

  var agora = Date.now();
  var prazo = parseInt(localStorage.getItem(CHAVE), 10);
  if (!prazo || prazo < agora) {
    prazo = agora + DURACAO;
    localStorage.setItem(CHAVE, String(prazo));
  }

  function pad(n) { return String(n).padStart(2, '0'); }

  function atualiza() {
    var falta = Math.max(0, prazo - Date.now());
    elH.textContent = pad(Math.floor(falta / 3600000));
    elM.textContent = pad(Math.floor((falta % 3600000) / 60000));
    elS.textContent = pad(Math.floor((falta % 60000) / 1000));
  }

  atualiza();
  setInterval(atualiza, 1000);
})();


/* barra fixa de CTA (mobile): aparece depois do CTA do topo sair da tela e some
   quando o bloco de investimento, uma faixa de CTA, o fecho ou o rodapé estão à vista */
(function () {
  'use strict';
  var barra = document.getElementById('cta-fixa');
  var topo = document.querySelector('.vsl-hero .capa__acoes');
  if (!barra || !topo || !('IntersectionObserver' in window)) return;

  var heroFora = false;
  var visiveis = {};
  function aplica() {
    var fim = Object.keys(visiveis).some(function (k) { return visiveis[k]; });
    var on = heroFora && !fim;
    barra.setAttribute('data-on', on ? '1' : '0');
    if (on) barra.removeAttribute('inert'); else barra.setAttribute('inert', '');
  }

  new IntersectionObserver(function (es) {
    var r = es[0];
    heroFora = !r.isIntersecting && r.boundingClientRect.top < 0;
    aplica();
  }).observe(topo);

  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { visiveis[e.target.getAttribute('data-fim')] = e.isIntersecting; });
    aplica();
  });
  [].slice.call(document.querySelectorAll('#investimento, .fecho, .rodape, .cta-faixa')).forEach(function (el, i) {
    el.setAttribute('data-fim', i);
    io.observe(el);
  });
})();
