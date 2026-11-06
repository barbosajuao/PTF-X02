/* =========================================================
   projeto.js: tela de apresentação de um projeto.
   A página é montada a partir dos dados abaixo. Para um novo
   projeto, copie o bloco de "nexcommerce", troque o nome da
   chave (ex.: "meu-site") e preencha. Depois abra:
       projeto.html?id=meu-site
   Campos opcionais podem ser apagados: a seção some sozinha.
   ========================================================= */

/* ---------- 1. Seus contatos (usados na chamada final e no rodapé) ---------- */
const CONTATO = {
  whatsapp: "5575998108105",                 // só números, com 55 + DDD
  email: "contatojoaopedrodev@gmail.com",
  github: "https://github.com/devjuao-cyber",
  linkedin: "https://www.linkedin.com/in/jo%C3%A3o-pedro-barbosa-075890139/",
  portfolio: "index.html",                   // para onde vai "Voltar ao portfólio"
  voltar: "galeria.html"                     // para onde vai "Voltar" no topo (se não houver histórico)
};

/* ---------- 2. Projetos (um bloco por projeto) ---------- */
const PROJETOS_DETALHE = {
  nexcommerce: {
    titulo: "NexCommerce",
    sigla: "NC",                             // 2 letras no ícone do topo (opcional)
    ano: 2024,
    duracao: "8 meses",
    funcao: "Lead Full Stack Developer",
    cliente: "E-commerce Enterprise Latam",

    // Vídeo do YouTube: cole o link inteiro ou só o código de 11 caracteres
    // (EXEMPLO: troque pelo vídeo de demonstração do seu projeto)
    video: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
    capa: "/img/01.avif",                                // imagem de capa própria, ex.: "img/capa.jpg" (vazio = usa a miniatura do YouTube)

    sobre: [
      "O NexCommerce nasceu da necessidade de uma plataforma de e-commerce verdadeiramente escalável para o mercado latino-americano. Diferente das soluções tradicionais que engasgam com alto volume de SKUs, esta plataforma foi arquitetada desde o início com microsserviços, permitindo escalar horizontalmente cada componente — catálogo, checkout, pagamentos e notificações — de forma independente.",
      "O painel administrativo oferece dashboards em tempo real com métricas de vendas, taxa de conversão, abandono de carrinho e performance de produtos. A integração com Stripe, MercadoPago e Pix garante cobertura total de métodos de pagamento no Brasil e América Latina.",
      "O sistema de cache inteligente em múltiplas camadas (CDN, Redis, Service Worker) entrega páginas de produto em menos de 100ms, mesmo sob picos de tráfego de Black Friday."
    ],
    funcionalidades: [
      "Checkout otimizado com 3 etapas e validação em tempo real",
      "Painel admin com dashboards de vendas e métricas em tempo real",
      "Integração com Stripe, MercadoPago e Pix",
      "Sistema de cache inteligente com CDN + Redis + Service Worker",
      "Catálogo com busca full-text e filtros facetados",
      "Sistema de notificações multicanal (email, SMS, push)",
      "Gestão de estoque com alertas de baixa quantidade",
      "Suporte a múltiplos vendedores (marketplace)"
    ],
    desafios: [
      "Escalar checkout para 10k pedidos simultâneos sem degradação",
      "Cache de catálogo com invalidação seletiva em tempo real",
      "Integração com 4 gateways de pagamento com fallback automático"
    ],
    aprendizados: "Aprendi que microsserviços não são bala de prata — a complexidade de orquestração precisa ser justificada pelo volume. Também aprofundei em estratégias de cache distribuído e consistência eventual.",

    tecnologias: ["React", "Node.js", "MongoDB", "Stripe", "Redis", "Docker"],
    codigo: "#",                             // link do repositório (vazio ou apagado = botão some)
    demo: "#"                                // link do projeto no ar (vazio ou apagado = botão some)
  }
};

/* =========================================================
   3. MONTAGEM DA PÁGINA (normalmente não precisa editar daqui para baixo)
   ========================================================= */
(function () {
  const NS = "http://www.w3.org/2000/svg";
  const $ = (id) => document.getElementById(id);

  function el(tag, classe, texto) {
    const e = document.createElement(tag);
    if (classe) e.className = classe;
    if (texto != null) e.textContent = texto;   // textContent: aceita aspas e & sem quebrar
    return e;
  }
  function icone(nome, classe) {
    const s = document.createElementNS(NS, "svg");
    s.setAttribute("class", "i" + (classe ? " " + classe : ""));
    const u = document.createElementNS(NS, "use");
    u.setAttribute("href", "#i-" + nome);
    s.appendChild(u);
    return s;
  }
  // Seção de lista: preenche e esconde a seção se não houver itens
  function lista(idSecao, idLista, itens, criar) {
    const ul = $(idLista);
    (itens || []).forEach((t) => ul.appendChild(criar(t)));
    $(idSecao).hidden = !(itens && itens.length);
  }

  /* ----- escolhe o projeto pela URL (?id=...); sem id, usa o primeiro ----- */
  const chaves = Object.keys(PROJETOS_DETALHE);
  let id = new URLSearchParams(location.search).get("id");
  if (!PROJETOS_DETALHE[id]) {
    if (id) console.warn('Projeto "' + id + '" não encontrado em PROJETOS_DETALHE. Mostrando "' + chaves[0] + '".');
    id = chaves[0];
  }
  const d = PROJETOS_DETALHE[id];

  /* ----- topo e cartão de informações ----- */
  document.title = d.titulo + " | João Pedro Barbosa";
  $("topo-nome").textContent = d.titulo;
  $("titulo").textContent = d.titulo;
  $("sigla").textContent = d.sigla || d.titulo.split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();
  $("ano").textContent = d.ano || "";
  $("ano").hidden = !d.ano;
  $("duracao").textContent = d.duracao || "";
  $("funcao").textContent = d.funcao || "";
  $("d-funcao").hidden = !d.funcao;
  $("cliente").textContent = d.cliente || "";
  $("d-cliente").hidden = !d.cliente;

  /* ----- botão Voltar: volta ao histórico se veio do próprio site ----- */
  const voltar = $("voltar");
  voltar.href = CONTATO.voltar;
  voltar.addEventListener("click", (e) => {
    try {
      if (document.referrer && new URL(document.referrer).origin === location.origin && history.length > 1) {
        e.preventDefault();
        history.back();
      }
    } catch (_) { /* segue o link normal */ }
  });
  $("volta-port").href = CONTATO.portfolio;

  /* ----- vídeo do YouTube ----- */
  function idYoutube(v) {
    if (!v) return "";
    const m = String(v).match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([A-Za-z0-9_-]{11})/);
    return m ? m[1] : /^[A-Za-z0-9_-]{11}$/.test(v) ? v : "";
  }
  const yt = idYoutube(d.video);
  const capa = $("capa");
  if (d.capa) {
    capa.src = d.capa;
  } else if (yt) {
    capa.src = "https://i.ytimg.com/vi/" + yt + "/maxresdefault.jpg";
    capa.onerror = function () {
      capa.onerror = function () { capa.hidden = true; };   // sem miniatura: fica só o fundo roxo
      capa.src = "https://i.ytimg.com/vi/" + yt + "/hqdefault.jpg";
    };
  } else {
    capa.hidden = true;
  }
  if (yt) {
    $("play").addEventListener("click", () => {
      const f = document.createElement("iframe");
      f.src = "https://www.youtube-nocookie.com/embed/" + yt + "?autoplay=1&rel=0";
      f.title = "Vídeo de demonstração: " + d.titulo;
      f.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
      f.allowFullscreen = true;
      $("stage").replaceChildren(f);
      $("device").classList.add("tocando");
    });
  } else {
    $("play").hidden = true;
  }

  /* ----- texto e listas ----- */
  (d.sobre || []).forEach((t) => $("sobre").appendChild(el("p", "", t)));
  $("sec-sobre").hidden = !(d.sobre && d.sobre.length);

  lista("sec-func", "funcionalidades", d.funcionalidades, (t) => {
    const li = el("li");
    const c = el("span", "chk");
    c.appendChild(icone("check"));
    li.append(c, el("span", "", t));
    return li;
  });
  lista("sec-desafios", "desafios", d.desafios, (t) => el("li", "", t)); // o número é desenhado pelo CSS

  $("aprendizados").textContent = d.aprendizados || "";
  $("sec-aprend").hidden = !d.aprendizados;

  /* ----- lateral: tech stack e links ----- */
  lista("box-tech", "tech", d.tecnologias, (t) => el("li", "", t));
  function botaoLink(href, rotulo, ico, classe) {
    const a = el("a", "lk " + classe);
    a.href = href;
    a.rel = "noopener";
    a.append(icone(ico), el("span", "", rotulo), icone("arrow", "go"));
    return a;
  }
  if (d.codigo) $("links").appendChild(botaoLink(d.codigo, "Código Fonte", "github", "codigo"));
  if (d.demo) $("links").appendChild(botaoLink(d.demo, "Demo ao Vivo", "globe", "demo"));
  $("box-links").hidden = !(d.codigo || d.demo);

  /* ----- chamada final, rodapé e WhatsApp flutuante ----- */
  const zap = "https://wa.me/"  + CONTATO.whatsapp + "?text=" +
    encodeURIComponent("Olá João! Vi o projeto " + d.titulo + " no seu portfólio e gostaria de conversar.");
  const mail = "mailto:" + CONTATO.email + "?subject=" + encodeURIComponent("Contato pelo portfólio: " + d.titulo);
  $("b-whats").href = zap;
  $("whats-fl").href = zap;
  $("b-mail").href = mail;
  $("f-mail").href = mail;
  $("b-github").href = CONTATO.github;
  $("f-github").href = CONTATO.github;
  $("f-linkedin").href = CONTATO.linkedin;
})();
