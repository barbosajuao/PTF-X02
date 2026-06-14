export function filtroDeBuscas() {
    let filtro = document.querySelector(".inputpesquisa");
    let cards = document.querySelectorAll(".filtrocards");

    if (!filtro) return;

    filtro.addEventListener("input", filtercard);

    function filtercard() {
        var filtertext = filtro.value.toLowerCase().trim();

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


    /* utilizando botoes para pesquisar */

    let BotaoTodos = document.querySelector(".todos");
    let BotaoAPI = document.querySelector(".Integration")
    let BotaoAWS = document.querySelector(".AWS")
    let BotaoReact = document.querySelector(".React")
    let BotaoNode = document.querySelector(".Node")
    let BotaoPython = document.querySelector(".Python")
    let BotaoJva = document.querySelector(".Java")
    let BotaoExpress = document.querySelector(".Express")
    let BotaoTypeScript = document.querySelector(".TypeScript")
    let BotaoPostgresSQL = document.querySelector(".PostgresSQL")
    let BotaoMongoDB = document.querySelector(".MongoDB")
    let BotaoRedis = document.querySelector(".Redis")
    let BotaoDocker = document.querySelector(".Docker")
    let BotaoKubernetes = document.querySelector(".Kubernetes")
    let BotaoAzure = document.querySelector(".Azure")
    let BotaoGCP = document.querySelector(".GCP")

     /* animacao cores botoes de pesuisa  */

    function resetarBotoesPesquisa() {
        
        const todosBotoes = [BotaoTodos,BotaoAPI,BotaoAWS,BotaoReact,BotaoNode,BotaoPython,BotaoJva,BotaoExpress,BotaoTypeScript,BotaoPostgresSQL,BotaoMongoDB,BotaoRedis,BotaoDocker,BotaoKubernetes,BotaoAzure,BotaoGCP];
        

        todosBotoes.forEach(botao => {
            if(botao) {
             
             botao.style.border = "1px solid rgb(141, 141, 141)";
             
             botao.style.color = "rgb(81, 91, 110)"
            
             botao.style.backgroundColor = "transparent"; 

            }
        });

        
    } 



    function Clicoutodos() {
        
        // 3. A MÁGICA: Altera o valor do input diretamente
        // para resetar e a mesma forma porem eu entrego uma string vazia para o filtro e ele mostra todos os cards
        filtro.value = "";    

        // 🔥 DICA DE OURO: Dispara o filtro manualmente!
        // Como o JavaScript alterou o texto direto, o evento "input" natural do teclado não dispara sozinho.
        // Chamamos a função de disparar um evento artificial para o seu filtro rodar na mesma hora!
        filtro.dispatchEvent(new Event("input"));
        
        resetarBotoesPesquisa()

        BotaoTodos.style.border = "1px solid #433672";
             
        BotaoTodos.style.color = "#856be2"
            
        BotaoTodos.style.backgroundColor = "#151124"; 

    }


    function ClicouIntegration() {
        
        filtro.value = "Integration";    

        
        filtro.dispatchEvent(new Event("input"));

        resetarBotoesPesquisa()

        BotaoAPI.style.border = "1px solid #433672";
             
        BotaoAPI.style.color = "#856be2"
            
        BotaoAPI.style.backgroundColor = "#151124"; 
        
    }

    function ClicouAWS() {
        
        filtro.value = "AWS";    

        
        filtro.dispatchEvent(new Event("input"));
        
        resetarBotoesPesquisa()

        BotaoAWS.style.border = "1px solid #433672";
             
        BotaoAWS.style.color = "#856be2"
            
        BotaoAWS.style.backgroundColor = "#151124"; 
    }

    function ClicouReact() {
        
        filtro.value = "React";    

        
        filtro.dispatchEvent(new Event("input"));

        resetarBotoesPesquisa()

        BotaoReact.style.border = "1px solid #433672";
             
        BotaoReact.style.color = "#856be2"
            
        BotaoReact.style.backgroundColor = "#151124"; 
        
    }

    function ClicouNode() {
        
        filtro.value = "Node";    

        
        filtro.dispatchEvent(new Event("input"));
        
        resetarBotoesPesquisa()

        BotaoNode.style.border = "1px solid #433672";
             
        BotaoNode.style.color = "#856be2"
            
        BotaoNode.style.backgroundColor = "#151124"; 
    }

    function ClicouPython() {
        
        filtro.value = "Python";    

        
        filtro.dispatchEvent(new Event("input"));

        resetarBotoesPesquisa()

        BotaoPython.style.border = "1px solid #433672";
             
        BotaoPython.style.color = "#856be2"
            
        BotaoPython.style.backgroundColor = "#151124"; 
        
    }

    function ClicouJava() {
        
        filtro.value = "Java";    

        
        filtro.dispatchEvent(new Event("input"));

        resetarBotoesPesquisa()

        BotaoJva.style.border = "1px solid #433672";
             
        BotaoJva.style.color = "#856be2"
            
        BotaoJva.style.backgroundColor = "#151124"; 
        
    }

    function ClicouExpress() {
        
        filtro.value = "Express";    

        
        filtro.dispatchEvent(new Event("input"));

        resetarBotoesPesquisa()

        BotaoExpress.style.border = "1px solid #433672";
             
        BotaoExpress.style.color = "#856be2"
            
        BotaoExpress.style.backgroundColor = "#151124"; 
        
    }

    function ClicouTypeScript() {
        
        filtro.value = "TypeScript";    

        
        filtro.dispatchEvent(new Event("input"));
        
        resetarBotoesPesquisa()

        BotaoTypeScript.style.border = "1px solid #433672";
             
        BotaoTypeScript.style.color = "#856be2"
            
        BotaoTypeScript.style.backgroundColor = "#151124"; 
    }

    function ClicouPostGresSQL() {
        
        filtro.value = "PostGresSQL";    

        
        filtro.dispatchEvent(new Event("input"));


        resetarBotoesPesquisa()

        BotaoPostgresSQL.style.border = "1px solid #433672";
             
        BotaoPostgresSQL.style.color = "#856be2"
            
        BotaoPostgresSQL.style.backgroundColor = "#151124"; 
        
    }

    function ClicouMongoDB() {
        
        filtro.value = "MongoDB";    

        
        filtro.dispatchEvent(new Event("input"));

        
        resetarBotoesPesquisa()

        BotaoMongoDB.style.border = "1px solid #433672";
             
        BotaoMongoDB.style.color = "#856be2"
            
        BotaoMongoDB.style.backgroundColor = "#151124"; 
    }

    function ClicouRedis() {
        
        filtro.value = "Redis";    

        
        filtro.dispatchEvent(new Event("input"));

        resetarBotoesPesquisa()

        BotaoRedis.style.border = "1px solid #433672";
             
        BotaoRedis.style.color = "#856be2"
            
        BotaoRedis.style.backgroundColor = "#151124"; 
        
    }

    function ClicouDocker() {
        resetarBotoesPesquisa()
        filtro.value = "Docker";    

        
        filtro.dispatchEvent(new Event("input"));

        BotaoDocker.style.border = "1px solid #433672";
             
        BotaoDocker.style.color = "#856be2"
            
        BotaoDocker.style.backgroundColor = "#151124";  
        
    }

    function ClicouKubernetes() {
        
        filtro.value = "Kubernetes";    

        
        filtro.dispatchEvent(new Event("input"));

        resetarBotoesPesquisa()

        BotaoKubernetes.style.border = "1px solid #433672";
             
        BotaoKubernetes.style.color = "#856be2"
            
        BotaoKubernetes.style.backgroundColor = "#151124"; 
        
    }

    function ClicouAzure() {
        
        filtro.value = "Azure";    

        
        filtro.dispatchEvent(new Event("input"));

        
        resetarBotoesPesquisa()

        BotaoAzure.style.border = "1px solid #433672";
             
        BotaoAzure.style.color = "#856be2"
            
        BotaoAzure.style.backgroundColor = "#151124"; 
    }

    function ClicouGCP() {
        
        filtro.value = "GCP";    

        
        filtro.dispatchEvent(new Event("input"));

        resetarBotoesPesquisa()

        BotaoGCP.style.border = "1px solid #433672";
             
        BotaoGCP.style.color = "#856be2"
            
        BotaoGCP.style.backgroundColor = "#151124"; 
        
    }
    
    BotaoTodos.addEventListener("click", Clicoutodos);
    BotaoAPI.addEventListener("click", ClicouIntegration);
    BotaoAWS.addEventListener("click", ClicouAWS);
    BotaoReact.addEventListener("click", ClicouReact);
    BotaoNode.addEventListener("click", ClicouNode);
    BotaoPython.addEventListener("click", ClicouPython);
    BotaoJva.addEventListener("click", ClicouJava);
    BotaoExpress.addEventListener("click", ClicouExpress);
    BotaoTypeScript.addEventListener("click", ClicouTypeScript);
    BotaoPostgresSQL.addEventListener("click", ClicouPostGresSQL);
    BotaoMongoDB.addEventListener("click", ClicouMongoDB);
    BotaoRedis.addEventListener("click", ClicouRedis);
    BotaoDocker.addEventListener("click", ClicouDocker);
    BotaoKubernetes.addEventListener("click", ClicouKubernetes);
    BotaoAzure.addEventListener("click", ClicouAzure);
    BotaoGCP.addEventListener("click", ClicouGCP);



    /* animacao cores botoes de pesuisa  */

    function resetarBotoes() {
        const todosBotoes = [BotaoTodos,BotaoAPI,BotaoAWS,BotaoReact,BotaoNode,BotaoPython,BotaoJva,BotaoExpress,BotaoTypeScript,BotaoPostgresSQL,BotaoMongoDB,BotaoRedis,BotaoDocker,BotaoKubernetes,BotaoAzure,BotaoGCP];
        

        todosBotoes.forEach(botao => {
            if(botao) {
             botao.style.backgroundColor = "transparent";
             botao.style.border = "none";
            }
        });

        
    } 


    /*  funcao link demo */

   
}