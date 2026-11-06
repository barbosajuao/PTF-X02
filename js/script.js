/* =========================================================
   1. DADOS EDITÁVEIS (projetos ficam em projetos.js): para mudar textos da trajetória,
      habilidades e as frases que digitam, edite só este bloco.
   ========================================================= */
const DADOS = {
  // Frases que escrevem e apagam sozinhas abaixo do nome
  frases: ["Backend Java & Kotlin", "Engenharia de Sistemas Críticos", "Arquitetura de Alta Performance", "Resiliência & Tolerância a Falhas"],

  // Cartões da seção Sobre (icone = nome do símbolo em index.html, sem "i-")
  destaques: [
    { icone: "server", titulo: "Backend de Alta Escala & Resiliência", texto: "APIs RESTful e gRPC em Java e Kotlin (Spring Boot) projetadas para alta concorrência, baixa latência e tolerância a falhas." },
    { icone: "layout", titulo: "Proteção na Borda & Resiliência", texto: "Implementação de motores de Rate Limiting, Circuit Breakers e isolamento de falhas para evitar downtime e mitigar gargalos de I/O sob estresse." },
    { icone: "cloud", titulo: "Arquitetura Distribuída & DevSecOps", texto: "Conteinerização com Docker, pipelines CI/CD automatizados e infraestrutura orientada a observabilidade (Prometheus/Grafana) e segurança em camadas" },
    { icone: "phone", titulo: "Frontend de Alta Performance", texto: "Desenvolvimento de interfaces funcionais para consumo de APIs e integração de microsserviços" }
  ],

  // Linha do tempo da seção Sobre (atual: true mostra a etiqueta "Atual")
  trajetoria: [

    { ano: "2026", atual: true, cargo: "Backend Software Engineer | High-Throughput & Critical Systems | Java & Kotlin Especializado em Arquiteturas Distribuídas, Resiliência e Engenharia de Performance", empresa: "Consultor" },
    { ano: "2020", cargo: "Especialista em Infraestrutura de Redes", empresa: "Vianet, Novanet" },
    { ano: "2018", cargo: "Especialista em Redes Wireless e Enlaces", empresa: "Vianet" },
    
  ],

  // Abas da seção Habilidades: [nome da tecnologia, porcentagem]
  habilidades: [
    { nome: "Frontend", icone: "layout", itens: [["React", 95], ["TypeScript", 90], ["Next.js", 85], ["Tailwind CSS", 92], ["Vue.js", 75], ["HTML5/CSS3", 98]] },
    { nome: "Backend", icone: "server", itens: [["Java & Kotlin", 90], ["PostgreSQL", 88], ["Apache Kafka / RabbitMQ", 80], ["Docker & Kubernetes", 78], ["Spring Boot / Spring Cloud", 75], ["Redis", 92]] },
    { nome: "Ferramentas", icone: "tools", itens: [["Git", 92], ["Docker", 80], ["AWS", 75], ["CI/CD", 78], ["Figma", 70], ["Jest", 76]] }
  ]
};

/* =========================================================
   2. TEXTO QUE ESCREVE E APAGA (abaixo do nome, na primeira tela)
   ========================================================= */
(function () {
  const el = $("digitando");
  if (!el) return;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) { el.textContent = DADOS.frases[0]; return; }
  let f = 0, c = 0, apagando = false;
  el.textContent = "";
  (function passo() {
    const frase = DADOS.frases[f];
    if (!apagando) {
      el.textContent = frase.slice(0, ++c);
      if (c === frase.length) { apagando = true; return setTimeout(passo, 4600); } // pausa com a frase completa
      return setTimeout(passo, 70);                                                  // velocidade de escrever
    }
    el.textContent = frase.slice(0, --c);
    if (c === 0) { apagando = false; f = (f + 1) % DADOS.frases.length; return setTimeout(passo, 350); }
    setTimeout(passo, 55);                                                           // velocidade de apagar
  })();
})();

/* =========================================================
   3. BARRA LATERAL ACOMPANHA A ROLAGEM
   ========================================================= */
(function () {
  const links = [...document.querySelectorAll(".side-nav a")];
  const secoes = links.map((a) => document.querySelector(a.getAttribute("href")));
  let espera = false;

  function atualizar() {
    espera = false;
    const noFim = innerHeight + scrollY >= document.documentElement.scrollHeight - 4;
    let ativa = 0;
    secoes.forEach((s, i) => { if (s.getBoundingClientRect().top <= innerHeight * 0.4) ativa = i; });
    if (noFim) ativa = secoes.length - 1;
    links.forEach((a, i) => (i === ativa ? a.setAttribute("aria-current", "true") : a.removeAttribute("aria-current")));
  }
  addEventListener("scroll", () => { if (!espera) { espera = true; requestAnimationFrame(atualizar); } }, { passive: true });
  addEventListener("resize", atualizar);
  atualizar();
})();

/* =========================================================
   4. SEÇÃO SOBRE
   ========================================================= */
$("feats").innerHTML = DADOS.destaques.map((d) =>
  `<article class="feat">${icone(d.icone)}<h3>${d.titulo}</h3><p>${d.texto}</p></article>`).join("");

$("timeline").innerHTML = DADOS.trajetoria.map((t) =>
  `<li class="${t.atual ? "atual" : ""}"><small>${t.ano}${t.atual ? '<em class="tag" style="font-style:normal">Atual</em>' : ""}</small><b>${t.cargo}</b><span>${t.empresa}</span></li>`).join("");

/* =========================================================
   5. PROJETOS EM DESTAQUE
   Os dados vêm de projetos.js. Aparecem aqui os marcados com
   destaque: true (os 2 primeiros em cartão largo). Sem nenhum
   destaque, mostra os 5 primeiros.
   ========================================================= */
(function () {
  const marcados = PROJETOS.filter((p) => p.destaque);
  ligarProjetos({
    projetos: marcados.length ? marcados : PROJETOS.slice(0, 5),
    grade: $("projetos-grid"), filtros: $("filtros"), busca: $("busca"), grande: 2
  });
})();

/* =========================================================
   6. HABILIDADES: abas com barras de progresso
   ========================================================= */
(function () {
  $("abas").innerHTML = DADOS.habilidades.map((h, i) =>
    `<button class="tab" type="button" role="tab" aria-selected="${i === 0}" data-i="${i}">
       <span class="ico">${icone(h.icone)}</span><span>${h.nome}<small>${h.itens.length} tecnologias</small></span>${icone("chev")}
     </button>`).join("");

  function mostrar(i) {
    const h = DADOS.habilidades[i];
    $("painel").innerHTML = `<h3>${icone(h.icone)}${h.nome}</h3>` + h.itens.map(([n, v]) =>
      `<div class="bar"><div><span>${n}</span><span>${v}%</span></div><div class="trk"><div class="fill" data-w="${v}"></div></div></div>`).join("");
    requestAnimationFrame(() => requestAnimationFrame(() =>
      $("painel").querySelectorAll(".fill").forEach((f) => (f.style.width = f.dataset.w + "%"))));
  }

  $("abas").addEventListener("click", (e) => {
    const b = e.target.closest(".tab");
    if (!b) return;
    $("abas").querySelectorAll(".tab").forEach((x) => x.setAttribute("aria-selected", String(x === b)));
    mostrar(Number(b.dataset.i));
  });
  mostrar(0);
})();

/* ---------- Ano do rodapé ---------- */
$("ano").textContent = new Date().getFullYear();
