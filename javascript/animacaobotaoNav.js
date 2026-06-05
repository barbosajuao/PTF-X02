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

    // 1. Selecionamos as seções usando querySelector (se for elemento único, não precisa de querySelectorAll)
    const secaoHome = document.querySelector(".containerperfil"); // Ajuste o seletor se necessário
    const secaoSobre = document.querySelector("#sobremim");

    // Configurações do observador
    const aparecer = {
        root: null,
        threshold: 0.4, 
    };

    // 2. Função mágica de RESET: Apaga todos de uma vez só antes de acender o atual
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

    // 3. O ÚNICO VIGIA CENTRAL
    const vigia = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
        
            // Se a seção entrou na tela...
            if (entry.isIntersecting) {
            
                // Apagamos todos os botões primeiro
                resetarBotoes();

                // Descobrimos quem entrou na tela olhando para a classe ou id dela
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
            
                // Daqui a pouco você pode adicionar os ifs das outras seções aqui dentro!
            }
        });
    }, aparecer);

    // 4. Mandamos o mesmo vigia observar as duas seções
    if (secaoHome) vigia.observe(secaoHome);
    if (secaoSobre) vigia.observe(secaoSobre);


}