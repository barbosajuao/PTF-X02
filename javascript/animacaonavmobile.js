export function animacaoBotaoNavMobile(){
    

    



    
  
    const menumobile = document.querySelector(".fleNavMoboli");
    const botoesClose = document.querySelectorAll(
    ".butomclosemobile1, .butomclosemobile2, .butomclosemobile3, .butomclosemobile4, .butomclosemobile5"
    );
    const buttomsanduiche = document.querySelector(".menumobile");
    const buttomclose = document.querySelector(".closemibile");


  function ClicouHome() {
    console.log("hora de apagar menu");
    
    
    if (menumobile) {
            menumobile.style.display = "none";
            buttomsanduiche.style.display = "block";
            buttomclose.style.display = "none"
        }
    }

  
    botoesClose.forEach((botao) => {
        botao.addEventListener("click", ClicouHome);
    });

    function ClicouSanduiche(){
        console.log(`sanduiche`)
        buttomsanduiche.style.display = "none";
        buttomclose.style.display = "block"
        menumobile.style.display = "flex";
    }

    function Clicouclose(){
        console.log(`close`)
        buttomsanduiche.style.display = "block";
        buttomclose.style.display = "none"
        menumobile.style.display = "none";
    } 

    buttomsanduiche.addEventListener("click", ClicouSanduiche);
    buttomclose.addEventListener("click", Clicouclose);




}