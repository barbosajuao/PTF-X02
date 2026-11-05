/* =========================================================
   galeria.js: monta a galeria com TODOS os projetos de projetos.js.
   Ordem: ano mais recente primeiro (mesmo ano = ordem do arquivo).
   ========================================================= */
(function () {
  const lista = PROJETOS.slice().sort((a, b) => (b.ano || 0) - (a.ano || 0));

  const n = lista.length;
  $("contagem").textContent = String(n).padStart(2, "0") + (n === 1 ? " Projeto" : " Projetos");

  ligarProjetos({
    projetos: lista,
    grade: $("galeria-grid"),
    filtros: $("filtros"),
    busca: $("busca"),
    anoNoCorpo: true // ano ao lado do título, como no design da galeria
  });
})();
