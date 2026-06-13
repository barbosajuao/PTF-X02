export function AnimacaoTecnologias (){

    

    let BotaoFrontend = document.querySelector(".buttonstakfrontend")
    let BotaoBackend = document.querySelector(".buttonstakbackend")
    let BotaoFerramentas = document.querySelector(".buttonstakferramentas")
    let fundoSvg1 = document.querySelector(".fundoSvg1")
    let fundoSvg2 = document.querySelector(".fundoSvg2")
    let fundoSvg3 = document.querySelector(".fundoSvg3")
    /* manipular svg dos botes  */
    let svgfrontend = document.querySelector(".svgfrontend")
    let svgBackend = document.querySelector(".svgBackend")
    let svgferramentas = document.querySelector(".ferramentas")
    let txtprincipal = document.getElementById("txtprincipal")
    let titulo01 = document.getElementById("titulo01")
    let titulo02 = document.getElementById("titulo02")
    let titulo03 = document.getElementById("titulo03")
    let titulo04 = document.getElementById("titulo04")
    let titulo05 = document.getElementById("titulo05")
    let titulo06 = document.getElementById("titulo06")
    /* manipular svg do card */
    let svg01 = document.getElementById("svg01")
    let svg02 = document.getElementById("svg02")
    let svg03 = document.getElementById("svg03")

    /* nao estou usando o id por que com a class ele me retorna uma lista mesmo que no html to senha uma classe entao usando id simplifica */
    let statusCarregamento01 = document.getElementById("statusCarregamento01")
    let statusCarregamento02 = document.getElementById("statusCarregamento02")
    let statusCarregamento03 = document.getElementById("statusCarregamento03")
    let statusCarregamento04 = document.getElementById("statusCarregamento04")
    let statusCarregamento05 = document.getElementById("statusCarregamento05")
    let statusCarregamento06 = document.getElementById("statusCarregamento06")


    function resetarBotoesTecnologias() {
        
        let todosBotoes = [BotaoFrontend, BotaoBackend, BotaoFerramentas  ];
        let fundoSVG = [fundoSvg1,fundoSvg2,fundoSvg3]
        let todosSvgs = [svgfrontend, svgBackend, svgferramentas]
        

        todosBotoes.forEach(botao => {

            if(botao) {
             
             botao.style.setProperty("border", "1px solid rgba(129, 129, 129, 0.13)", "important");
             botao.style.backgroundColor = "transparent"; 

            }
        });

        fundoSVG.forEach(Backsvg => {
            if(Backsvg) {
             
             
             Backsvg.style.backgroundColor = "transparent"; 

            }
        });

        todosSvgs.forEach(svg => {
         if(svg) svg.style.setProperty("fill", "rgb(221, 221, 221)", "important");
        });

        

        
    } 

     
    function clicoubotaoFrontend(){
        
        resetarBotoesTecnologias()

        BotaoFrontend.style.setProperty("border", "1px solid rgba(182, 120, 244, 0.171)", "important");
        BotaoFrontend.style.backgroundColor = "rgba(102, 51, 153, 0.171)"; 
        fundoSvg1.style.backgroundColor = "rebeccapurple";
        svgfrontend.style.setProperty("fill", "rgb(204, 155, 250)", "important");

        txtprincipal.textContent = "Frontend"
        titulo01.textContent = "React"
        titulo02.textContent = "TypeScript"
        titulo03.textContent = "Next.js"
        titulo04.textContent = "Tailwind CSS"
        titulo05.textContent = "Vue.js"
        titulo06.textContent = "HTML5/CSS3"

        statusCarregamento01.style.width = "95%";
        statusCarregamento02.style.width = "90%";
        statusCarregamento03.style.width = "85%";
        statusCarregamento04.style.width = "92%";
        statusCarregamento05.style.width = "75%";
        statusCarregamento06.style.width = "98%";

        svg01.style.display = "block";
        svg02.style.display = "none";
        svg03.style.display = "none";

        
    }

    function clicoubotaoBackend(){
        
        resetarBotoesTecnologias()

        BotaoBackend.style.setProperty("border", "1px solid rgba(182, 120, 244, 0.171)", "important");
        BotaoBackend.style.backgroundColor = "rgba(102, 51, 153, 0.171)"; 
        fundoSvg2.style.backgroundColor = "rebeccapurple";
        svgBackend.style.setProperty("fill", "rgb(204, 155, 250)", "important");


        txtprincipal.textContent = "Backend"
        titulo01.textContent = "Node.js"
        titulo02.textContent = "Express"
        titulo03.textContent = "PostgreSQL"
        titulo04.textContent = "Mongo DB"
        titulo05.textContent = "GraphQL"
        titulo06.textContent = "Redis"

        statusCarregamento01.style.width = "75%";
        statusCarregamento02.style.width = "40%";
        statusCarregamento03.style.width = "85%";
        statusCarregamento04.style.width = "92%";
        statusCarregamento05.style.width = "65%";
        statusCarregamento06.style.width = "88%";

        svg01.style.display = "none";
        svg02.style.display = "block";
        svg03.style.display = "none";
        
    }

    function clicoubotaoFerramentas(){
        
        resetarBotoesTecnologias()

        BotaoFerramentas.style.setProperty("border", "1px solid rgba(182, 120, 244, 0.171)", "important");
        BotaoFerramentas.style.backgroundColor = "rgba(102, 51, 153, 0.171)"; 
        fundoSvg3.style.backgroundColor = "rebeccapurple";
        svgferramentas.style.setProperty("fill", "rgb(204, 155, 250)", "important");


        txtprincipal.textContent = "Ferramentas"
        titulo01.textContent = "Git / GitHub"
        titulo02.textContent = "Docker"
        titulo03.textContent = "AWS"
        titulo04.textContent = "Figma"
        titulo05.textContent = "Jest / Testing"
        titulo06.textContent = "CI / CD"

        statusCarregamento01.style.width = "85%";
        statusCarregamento02.style.width = "60%";
        statusCarregamento03.style.width = "75%";
        statusCarregamento04.style.width = "82%";
        statusCarregamento05.style.width = "95%";
        statusCarregamento06.style.width = "78%";


        svg01.style.display = "none";
        svg02.style.display = "none";
        svg03.style.display = "block";
        
    }

    BotaoFrontend.addEventListener("click", clicoubotaoFrontend)
    BotaoBackend.addEventListener("click", clicoubotaoBackend)
    BotaoFerramentas.addEventListener("click", clicoubotaoFerramentas)


}