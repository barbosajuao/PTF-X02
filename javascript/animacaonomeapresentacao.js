export function animacaoapresentacao(){
    const elementoTexto = document.getElementById("efeito-escrever");

    // Adicione aqui os nomes que você quer que fiquem trocando
    const palavras = ["Desenvolvedor Frontend", "Especialista React", "Freelancer", "Tech Lead"];

    let indicePalavra = 0;
    let indiceLetra = 0;
    let estaApagando = false;

    function efeitoDigitar() {
     // Pega a palavra atual da lista
        const palavraAtual = palavras[indicePalavra];
    
        // Se estiver apagando, remove uma letra. Se estiver escrevendo, adiciona uma letra.
        if (estaApagando) {
        elementoTexto.textContent = palavraAtual.substring(0, indiceLetra - 1);
        indiceLetra--;
        }   else {
        elementoTexto.textContent = palavraAtual.substring(0, indiceLetra + 1);
        indiceLetra++;
    }

    // Velocidade padrão de digitação (em milissegundos)
    let velocidade = estaApagando ? 50 : 100;

    // Se terminou de escrever a palavra inteira
    if (!estaApagando && indiceLetra === palavraAtual.length) {
        velocidade = 2000; // Tempo que a palavra fica visível antes de apagar (2 segundos)
        estaApagando = true;
    } 
    // Se terminou de apagar a palavra inteira
    else if (estaApagando && indiceLetra === 0) {
        estaApagando = false;
        // Passa para a próxima palavra da lista (e volta pro início se acabar)
        indicePalavra = (indicePalavra + 1) % palavras.length;
        velocidade = 500; // Pausa antes de começar a escrever a nova palavra
    }

    // Chama a função novamente após o tempo determinado na 'velocidade'
    setTimeout(efeitoDigitar, velocidade);
    }

        // Inicia o efeito assim que a página carregar
    document.addEventListener("DOMContentLoaded", efeitoDigitar);
    
    
}