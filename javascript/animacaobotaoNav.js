export function animacaoBotaoNav() {

    // buscar os botões para colocar a animação de mudança de borda e fundo do botão
    const botaoHome = document.querySelector(".home");
    const botaoSobre = document.querySelector(".perfil");
    const botaoProjetos = document.querySelector(".Projetos");
    const botaoSkil = document.querySelector(".skills");
    const botaoContato = document.querySelector(".contato");

    // buscar o svg para poder colocar a animação de mudança de cor do svg
    const svgHome = document.querySelector(".homesvg");
    const svgSobre = document.querySelector(".sobresvg");
    const svgProjetos = document.querySelector(".projetossvg");
    const svgSkill = document.querySelector(".skillsvg");
    const svgContato = document.querySelector(".contatosvg");

    
    function ClicouHome(){

        botaoHome.style.backgroundColor = "#1c0f22";
        botaoHome.style.border= " 1px solid #b762df"; 
        svgHome.style.setProperty ("fill" ,"#c580e5", "important");

        //reset de botoes nao clicados
        botaoSobre.style.backgroundColor = "transparent";
        botaoSobre.style.border= "none"; 
        svgSobre.style.setProperty ("fill" ,"#686868", "important");

        botaoProjetos.style.backgroundColor = "transparent";
        botaoProjetos.style.border= "none"; 
        svgProjetos.style.setProperty ("fill" ,"#686868", "important");

        botaoSkil.style.backgroundColor = "transparent";
        botaoSkil.style.border= "none"; 
        svgSkill.style.setProperty ("fill" ,"#686868", "important");

        botaoContato.style.backgroundColor = "transparent";
        botaoContato.style.border= "none"; 
        svgContato.style.setProperty ("fill" ,"#686868", "important");

    }
    function ClicouSobre(){

        botaoSobre.style.backgroundColor = "#1c0f22";
        botaoSobre.style.border= " 1px solid #b762df"; 
        svgSobre.style.setProperty ("fill" ,"#c580e5", "important");

        //reset de botoes nao clicados
        botaoHome.style.backgroundColor = "transparent";
        botaoHome.style.border= "none"; 
        svgHome.style.setProperty ("fill" ,"#686868", "important");

        botaoProjetos.style.backgroundColor = "transparent";
        botaoProjetos.style.border= "none"; 
        svgProjetos.style.setProperty ("fill" ,"#686868", "important");

        botaoSkil.style.backgroundColor = "transparent";
        botaoSkil.style.border= "none"; 
        svgSkill.style.setProperty ("fill" ,"#686868", "important");

        botaoContato.style.backgroundColor = "transparent";
        botaoContato.style.border= "none"; 
        svgContato.style.setProperty ("fill" ,"#686868", "important");
    }

    function ClicouProjetos(){
        console.log("clicou projetos");
        botaoProjetos.style.backgroundColor = "#1c0f22";
        botaoProjetos.style.border= " 1px solid #b762df"; 
        svgProjetos.style.setProperty ("fill" ,"#c580e5", "important");

        //reset de botoes nao clicados
        
        botaoHome.style.backgroundColor = "transparent";
        botaoHome.style.border= "none"; 
        svgHome.style.setProperty ("fill" ,"#686868", "important");

        botaoSobre.style.backgroundColor = "transparent";
        botaoSobre.style.border= "none"; 
        svgSobre.style.setProperty ("fill" ,"#686868", "important");

        botaoSkil.style.backgroundColor = "transparent";
        botaoSkil.style.border= "none"; 
        svgSkill.style.setProperty ("fill" ,"#686868", "important");

        botaoContato.style.backgroundColor = "transparent";
        botaoContato.style.border= "none"; 
        svgContato.style.setProperty ("fill" ,"#686868", "important");
    }

    function Clicouskill(){
        
        botaoSkil.style.backgroundColor = "#1c0f22";
        botaoSkil.style.border= " 1px solid #b762df"; 
        svgSkill.style.setProperty ("fill" ,"#c580e5", "important");
        

        //reset de botoes nao clicados
        
        botaoHome.style.backgroundColor = "transparent";
        botaoHome.style.border= "none"; 
        svgHome.style.setProperty ("fill" ,"#686868", "important");

        botaoSobre.style.backgroundColor = "transparent";
        botaoSobre.style.border= "none"; 
        svgSobre.style.setProperty ("fill" ,"#686868", "important");

        botaoProjetos.style.backgroundColor = "transparent";
        botaoProjetos.style.border= "none"; 
        svgProjetos.style.setProperty ("fill" ,"#686868", "important");

        botaoContato.style.backgroundColor = "transparent";
        botaoContato.style.border= "none"; 
        svgContato.style.setProperty ("fill" ,"#686868", "important");
    }

    function ClicouContato(){

        
        botaoContato.style.backgroundColor = "#1c0f22";
        botaoContato.style.border= " 1px solid #b762df"; 
        svgContato.style.setProperty ("fill" ,"#c580e5", "important");
        

        //reset de botoes nao clicados
        
        botaoHome.style.backgroundColor = "transparent";
        botaoHome.style.border= "none"; 
        svgHome.style.setProperty ("fill" ,"#686868", "important");

        botaoSobre.style.backgroundColor = "transparent";
        botaoSobre.style.border= "none"; 
        svgSobre.style.setProperty ("fill" ,"#686868", "important");

        botaoProjetos.style.backgroundColor = "transparent";
        botaoProjetos.style.border= "none"; 
        svgProjetos.style.setProperty ("fill" ,"#686868", "important");

        botaoSkil.style.backgroundColor = "transparent";
        botaoSkil.style.border= "none"; 
        svgSkill.style.setProperty ("fill" ,"#686868", "important");

        
    }

    

    botaoHome.addEventListener("click", ClicouHome);
    botaoSobre.addEventListener("click", ClicouSobre);
    botaoProjetos.addEventListener("click", ClicouProjetos);
    botaoSkil.addEventListener("click", Clicouskill);
    botaoContato.addEventListener("click", ClicouContato);


    /* animacao scroll */

    // 1. Seleciona as seções usando querySelector (se for elemento único, não precisa de querySelectorAll)
    const secaoHome = document.querySelector(".containerperfil"); // Ajuste o seletor se necessário
    const secaoSobre = document.querySelector("#sobremim");
    const secaoProjetos = document.querySelector("#projetos");
    const secaoSkills = document.querySelector("#stak");
    const secaoContato = document.querySelector("#contato");
    

    // Configurações do observador
    // Configurações do observador ajustadas para elementos grandes
    // um grande problema que tive foi por causa do tamanho do container de projetos por ele ser muito grande o threshold de 0.4 não estava funcionando, então mudei para 0.1 e agora funciona perfeitamente, ou seja, quando 10% da seção entrar na tela já acende o botão correspondente
        const aparecer = {
             root: null,
            // 👇 Mudamos de 0.4 para 0.2 (10% de interseção já basta!) resolveu o problema do tamanho do meu container pois o observador nao conseguia ver ele 
            threshold: 0.2, 
        };

    // fazendo reset procurar uma arquitetura melhor para fazer isso
    function resetarBotoes() {
        const todosBotoes = [botaoHome, botaoSobre, botaoProjetos, botaoSkil, botaoContato];
        const todosSvgs = [svgHome, svgSobre, svgProjetos, svgSkill, svgContato];

        todosBotoes.forEach(botao => {
            if(botao) {
             botao.style.backgroundColor = "transparent";
             botao.style.border = "none";
            }
        });

        todosSvgs.forEach(svg => {
         if(svg) svg.style.setProperty("fill", "#686868", "important");
        });
    }   

    
    const vigia = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
        
            // Se a seção entrou na tela...
            if (entry.isIntersecting) {
            
                // Apaga todos os botões primeiro
                resetarBotoes();

                // Descobri quem entrou na tela olhando para a classe ou id dela
                const elementoAlvo = entry.target;

                // Se quem entrou foi o Perfil/Home
                if (elementoAlvo.classList.contains("containerperfil")) {
                    botaoHome.style.backgroundColor = "#1c0f22";
                    botaoHome.style.border = "1px solid #b762df"; 
                    svgHome.style.setProperty("fill", "#c580e5", "important");
                }
            
                // Se quem entrou foi o Sobre Mim
                if (elementoAlvo.id === "sobremim") {
                    botaoSobre.style.backgroundColor = "#1c0f22";
                    botaoSobre.style.border = "1px solid #b762df"; 
                    svgSobre.style.setProperty("fill", "#c580e5", "important");
                }

                if (elementoAlvo.id === "projetos") {
                    
                    botaoProjetos.style.backgroundColor = "#1c0f22";
                    botaoProjetos.style.border = "1px solid #b762df"; 
                    svgProjetos.style.setProperty("fill", "#c580e5", "important");
                }

                if (elementoAlvo.id === "stak") {
                    console.log("entrou skill");
                    botaoSkil.style.backgroundColor = "#1c0f22";
                    botaoSkil.style.border = "1px solid #b762df"; 
                    svgSkill.style.setProperty("fill", "#c580e5", "important");
                }
                if (elementoAlvo.id === "contato") {
                    console.log("entrou contato");
                    botaoContato.style.backgroundColor = "#1c0f22";
                    botaoContato.style.border = "1px solid #b762df"; 
                    svgContato.style.setProperty("fill", "#c580e5", "important");
                }
            
                
            }
        });
    }, aparecer);

    // o mesmo vigia observar as  seções
    if (secaoHome) vigia.observe(secaoHome);
    if (secaoSobre) vigia.observe(secaoSobre);
    if (secaoProjetos) vigia.observe(secaoProjetos);
    if (secaoSkills) vigia.observe(secaoSkills);
    if (secaoContato) vigia.observe(secaoContato);

}