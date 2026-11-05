/* =========================================================
   PROJETOS: único lugar para adicionar, editar ou remover projetos.
   A galeria (galeria.html) e os destaques da página inicial
   leem esta lista automaticamente. Os filtros também são
   criados sozinhos a partir das "tags" de cada projeto.

   PARA ADICIONAR: copie um bloco { ... } abaixo, cole depois da
   última chave (com vírgula entre eles) e altere os dados.

   Campos:
     titulo   (obrigatório) nome do projeto
     ano      número, ex.: 2026 (a galeria mostra os mais novos primeiro)
     texto    descrição curta
     tags     tecnologias; mesmo nome = mesmo filtro (React, Nodejs...)
     img      caminho da imagem, ex.: "img/meu-projeto.jpg" (opcional)
     codigo   link do repositório (opcional: sem o campo, o link some)
     demo     link do projeto no ar (opcional: sem o campo, o link some)
     destaque true para aparecer também na página inicial (opcional)
   ========================================================= */

   /* alterar os img para manipular as fotos  */
const PROJETOS = [
  { titulo: "NexCommerce", ano: 2026, destaque: true, img: "/img/01.avif",
    tags: ["React", "Nodejs", "AWS", "JAVA"], codigo: "#", demo: "#",
    texto: "Uma plataforma de e-commerce escalável construída com React, Node.js e AWS, oferecendo uma experiência de compra fluida e segura." },

  { titulo: "NexCommerce", ano: 2025, destaque: true, img: "/img/02.png",
    tags: ["Vanilla", "Nodejs", "AWS", "JAVA"], codigo: "#", demo: "#",
    texto: "Uma plataforma de e-commerce escalável construída com React, Node.js e AWS, oferecendo uma experiência de compra fluida e segura." },

  { titulo: "NexCommerce", ano: 2025, destaque: true, img: "/img/03.avif",
    tags: ["React", "Nodejs", "MongoDB", "JAVA"], codigo: "#", demo: "#",
    texto: "Uma plataforma de e-commerce escalável construída com React, Node.js e AWS, oferecendo uma experiência de compra fluida e segura." },

  { titulo: "NexCommerce", ano: 2025, destaque: true, img: "/img/04.avif",
    tags: ["React", "Nodejs", "AWS", "Spring"], codigo: "#", demo: "#",
    texto: "Uma plataforma de e-commerce escalável construída com React, Node.js e AWS, oferecendo uma experiência de compra fluida e segura." },

  { titulo: "txtlorem", ano: 2025, destaque: true, img: "/img/05.png",
    tags: ["React", "TypeScript", "AWS", "JAVA"], codigo: "#", demo: "#",
    texto: "Uma plataforma de e-commerce escalável construída com React, Node.js e AWS, oferecendo uma experiência de compra fluida e segura." }
];
