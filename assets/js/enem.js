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
