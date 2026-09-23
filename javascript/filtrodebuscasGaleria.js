


let BotaoTodos = document.querySelector(".todos");
let aws = document.querySelector(".AWS");
let api = document.querySelector(".Integration");
let react = document.querySelector(".React");
let node = document.querySelector(".Node");
let paython = document.querySelector(".Python");
let java = document.querySelector(".Java");

let filtro = document.querySelector(".inputpesquisa")
let cards = document.querySelectorAll(".filtrocards");


function buscar (){

    

    if (!filtro) return;

    filtro.addEventListener("input", filtercard);

    function filtercard() {
        var filtertext = filtro.value.toLowerCase().trim();
        console.log(filtertext)

        for (let card of cards) {
            // 1. PLURAL: Pega TODOS os balões de tecnologia de dentro DESSE card
            let baloesTecnologia = card.querySelectorAll(".cardpesquisa h6");
            
            // Essa variável vai guardar se encontr a tecnologia ou não
            let encontrouTecnologia = false;

            // 2. Loop interno: passa pente-fino em cada balão do card atual
            for (let balao of baloesTecnologia) {
                let textoTecnologia = balao.innerText.toLowerCase().trim();

                // Se o que o usuário digitou estiver em QUALQUER um dos balões, ativa o sinal verde
                if (textoTecnologia.includes(filtertext)) {
                    encontrouTecnologia = true;
                    break; 
                }
            }

            // 3. Veredito final para o Card
            // Se a busca estiver vazia OU se encontrou a tecnologia, mostra o card
            if (filtertext === "" || encontrouTecnologia) {
                card.style.display = "block"; 
            } else {
                card.style.display = "none";  
            }
        }
    }



}

function resetarBotoesPesquisa() {

    
        
    const todosBotoes = [BotaoTodos,aws,api,react,node,paython,java];
        

    todosBotoes.forEach(botao => {
        if(botao) {
             
             botao.style.border = "1px solid rgb(141, 141, 141)";
             
             botao.style.color = "rgb(81, 91, 110)"
            
             botao.style.backgroundColor = "transparent"; 

             console.log(botao)

            }
    });

        
}



function Clicoutodos() {
   
    filtro.value = "";    
    filtro.dispatchEvent(new Event("input"));
        
    resetarBotoesPesquisa()

    BotaoTodos.style.border = "1px solid #433672";
             
    BotaoTodos.style.color = "#856be2"
            
    BotaoTodos.style.backgroundColor = "#151124"; 

}

function Clicouaws() {
   
    filtro.value = "AWS";    
    filtro.dispatchEvent(new Event("input"));
        
    resetarBotoesPesquisa()

    aws.style.border = "1px solid #433672";
             
    aws.style.color = "#856be2"
            
    aws.style.backgroundColor = "#151124"; 

}

function Clicouapi() {
   
    filtro.value = "API";    
    filtro.dispatchEvent(new Event("input"));
        
    resetarBotoesPesquisa()

    api.style.border = "1px solid #433672";
             
    api.style.color = "#856be2"
            
    api.style.backgroundColor = "#151124"; 

}

function Clicoureact() {
   
    filtro.value = "React";    
    filtro.dispatchEvent(new Event("input"));
        
    resetarBotoesPesquisa()

    react.style.border = "1px solid #433672";
             
    react.style.color = "#856be2"
            
    react.style.backgroundColor = "#151124"; 

}

function Clicounode() {
   
    filtro.value = "Node";    
    filtro.dispatchEvent(new Event("input"));
        
    resetarBotoesPesquisa()

    node.style.border = "1px solid #433672";
             
    node.style.color = "#856be2"
            
    node.style.backgroundColor = "#151124"; 

}

function Clicoupaython() {
   
    filtro.value = "Paython";    
    filtro.dispatchEvent(new Event("input"));
        
    resetarBotoesPesquisa()

    paython.style.border = "1px solid #433672";
             
    paython.style.color = "#856be2"
            
    paython.style.backgroundColor = "#151124"; 

}

function ClicouJAVA() {
   
    filtro.value = "JAVA";    
    filtro.dispatchEvent(new Event("input"));
        
    resetarBotoesPesquisa()

    java.style.border = "1px solid #433672";
             
    java.style.color = "#856be2"
            
    java.style.backgroundColor = "#151124"; 

}

BotaoTodos.addEventListener("click", Clicoutodos);
aws.addEventListener("click", Clicouaws);
api.addEventListener("click", Clicouapi);
react.addEventListener("click", Clicoureact);
node.addEventListener("click", Clicounode);
paython.addEventListener("click", Clicoupaython);
java.addEventListener("click", ClicouJAVA);

buscar ()


