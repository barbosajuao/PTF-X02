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


    let BotaoTodos = document.querySelector(".todos");

    function Clicoutodos() {
        // 3. A MÁGICA: Altera o valor do input diretamente
        // para resetar e a mesma forma porem eu entrego uma string vazia para o filtro e ele mostra todos os cards
        filtro.value = "React";    

        // 🔥 DICA DE OURO: Dispara o filtro manualmente!
        // Como o JavaScript alterou o texto direto, o evento "input" natural do teclado não dispara sozinho.
        // Chamamos a função de disparar um evento artificial para o seu filtro rodar na mesma hora!
        filtro.dispatchEvent(new Event("input"));
        console.log("clicou no todos");
    }
    BotaoTodos.addEventListener("click", Clicoutodos);
}