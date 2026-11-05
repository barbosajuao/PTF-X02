/* =========================================================
   comum.js: funções usadas pela página inicial e pela galeria.
   Normalmente você não precisa editar este arquivo.
   ========================================================= */
const $ = (id) => document.getElementById(id);
const icone = (nome) => `<svg class="i"><use href="#i-${nome}"/></svg>`;
// "Node.js" e "Nodejs" viram a mesma chave ("nodejs"), assim os filtros se juntam
const norm = (s) => String(s).toLowerCase().replace(/[^a-z0-9]/g, "");

/* HTML de um cartão de projeto */
function cardProjeto(p, grande, anoNoCorpo) {
  const ano = `<span class="ano">${p.ano || ""}</span>`;
  const midia = p.img ? `<img src="${p.img}" alt="" loading="lazy">` : '<div class="ph"></div>';
  const links =
    (p.codigo ? `<a href="${p.codigo}" rel="noopener">${icone("github")}Código</a>` : "") +
    (p.demo ? `<a class="demo" href="${p.demo}" rel="noopener">${icone("arrow")}Demo</a>` : "");
  return `<article class="proj${grande ? " big" : ""}">
    <div class="thumb">${midia}${anoNoCorpo ? "" : ano}</div>
    <div class="body">
      ${anoNoCorpo ? `<div class="tit"><h3>${p.titulo}</h3>${ano}</div>` : `<h3>${p.titulo}</h3>`}
      <p>${p.texto || ""}</p>
      <ul class="chips">${(p.tags || []).map((t) => `<li>${t}</li>`).join("")}</ul>
      ${links ? `<div class="links">${links}</div>` : ""}
    </div>
  </article>`;
}

/* Monta filtros (automáticos), busca e lista de cartões.
   opções: projetos, grade, filtros, busca, grande (quantos cartões largos), anoNoCorpo */
function ligarProjetos({ projetos, grade, filtros, busca, grande = 0, anoNoCorpo = false }) {
  // Conta as tecnologias: o filtro mais usado aparece primeiro
  const cont = {};
  projetos.forEach((p) => (p.tags || []).forEach((t) => {
    const k = norm(t);
    cont[k] = cont[k] || { n: 0, nomes: {} };
    cont[k].n++;
    cont[k].nomes[t] = (cont[k].nomes[t] || 0) + 1;
  }));
  const chaves = Object.keys(cont).sort((a, b) => cont[b].n - cont[a].n || a.localeCompare(b));
  const rotulo = (k) => Object.entries(cont[k].nomes).sort((a, b) => b[1] - a[1])[0][0]; // grafia mais usada

  filtros.innerHTML = [["", "Todos"]].concat(chaves.map((k) => [k, rotulo(k)]))
    .map(([k, r]) => `<button type="button" data-k="${k}" aria-pressed="${k === ""}">${r}</button>`).join("");

  let ativo = "", termo = "";
  function desenhar() {
    const lista = projetos.filter((p) => {
      const okFiltro = !ativo || (p.tags || []).some((t) => norm(t) === ativo);
      const texto = norm((p.titulo || "") + (p.texto || "") + (p.tags || []).join(""));
      return okFiltro && (!termo || texto.includes(termo));
    });
    grade.innerHTML = lista.length
      ? lista.map((p, i) => cardProjeto(p, i < grande, anoNoCorpo)).join("")
      : '<p class="vazio">Nenhum projeto encontrado para essa busca.</p>';
  }

  filtros.addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    ativo = b.dataset.k;
    filtros.querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
    desenhar();
  });
  busca.addEventListener("input", (e) => { termo = norm(e.target.value); desenhar(); });
  desenhar();
}
