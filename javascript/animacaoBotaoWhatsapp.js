export function animacaoBotaoWhatsapp() {
    
    const botaoWhatsapp = document.querySelector(".whatts");/* pegando botao do whatsapp */
    const secoes = document.querySelectorAll(".containerperfil");
    const aparecer ={
        root: null, /* root: null: Diz que a nossa área de teste é a própria tela visível do navegador. */
        threshold: 0.3, /* threshold: 0.5: É a linha de corte. 0.5 significa $50\%$ do elemento visível.. */
    }

   /* estudar a fundo o IntersectionObserver */
    const vigia = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
   
    if (entry.isIntersecting) {
      
      
      
      // Aqui dentro você pode colocar sua lógica, ex:
      // - Adicionar uma classe CSS para pintar o botão do menu
      // - Disparar um efeito visual
       
        botaoWhatsapp.style.display = "none";
    }else {
        botaoWhatsapp.style.display = "block";}

    });
    }, aparecer);
    // 👇 O PULO DO GATO ESTÁ AQUI: Mandar o vigia observar as seções!
    secoes.forEach(secao => {
        vigia.observe(secao);
    });


}