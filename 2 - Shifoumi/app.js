// ------------------
// Projet 2 - Chifoumi
// -------------------

// Hey pour ce projet nous allons avoir besoin de: 
// querySelector() & querySelectorAll
// forEach()
// e.target.id ou value
// Math
// innerText / textContent



// Variables

const choixJoueurId = document.querySelector("#joueur-choix");
const choixPcId = document.querySelector("#pc-choix");
const resultat = document.querySelector("#resultat");
const choixBtn = document.querySelectorAll(".btn");
let choixPc; 
let choixJoueur;
let result;

choixBtn.forEach( choix => choix.addEventListener("click", (e) =>{

        choixJoueur = e.target.value;
        choixJoueurId.textContent = choixJoueur;
        choixOrdinateur();
        afficherResultat();

}))

function choixOrdinateur() {
    
    const random = Math.ceil(Math.random() * choixBtn.length);
    // console.log(random);

    if(random === 1){
         choixPc = "Pierre"
    }
    if(random === 2){
        choixPc = "Feuille"
    }
    if (random === 3){
        choixPc = "Ciseaux"
    }

choixPcId.textContent = choixPc; 

}


function afficherResultat(){

    if (choixPc === choixJoueur){
        result = "Egalité";
    }
    if (choixPc === "Pierre"  && choixJoueur === "Feuille"){
        result = "Gagné!"
    }
    if(choixPc === "Pierre" && choixJoueur === "Ciseaux"){
        result = "Tu as perdu!"
    }
    if(choixPc === "Feuille" && choixJoueur === "Ciseaux"){
        result = "Gagné"
    }
    if(choixPc === "Feuille" && choixJoueur === "Pierre"){
        result ="Tu as perdu!"
    }
    if(choixPc === "Ciseaux" && choixJoueur === "Pierre"){
        result = "Gagné! "
    }
    if (choixPc === "Ciseaux" && choixJoueur === "Feuille"){
        result = "Tu as perdu!"
    }


    resultat.textContent = result;
}

