// -----------------
// Projet 1 - Générateur de citation
// -----------------

// Ce projet necéssite des connaissances sur : 
// querySelector()
// addEventListener
// L'objet Math
// innerText - textContent

// -----------------
// ################
// -----------------

const btn = document.querySelector("#new-citation");
const citation = document.querySelector(".citation");
const auteur = document.querySelector(".auteur");
const body = document.body
const citations = [
    {
        citation: `"Dans une certaine mesure, si vous avez vu un bidonville, vous les avez tous vus."`,
        auteur: `Spiro Theodore Agnew`,
        img: `"https://images.pexels.com/photos/7657346/pexels-photo-7657346.jpeg?auto=compress"`


    }, {
        citation: `"L'expérience qui rend le plus heureux est celle qui a rendu le plus de gens heureux."`,
        auteur: `Karl Marx`,
        img: `"https://images.pexels.com/photos/12823102/pexels-photo-12823102.jpeg?auto=compress"`


    }, {
        citation: `"Les dîners de famille sont le plus souvent une épreuve d'indigestion nerveuse, précédée d'un ressentiment et d'un ennui cachés et accompagnée de tremblements psychosomatiques."`,
        auteur: `M. F. K. Fisher`,
        img: `"https://images.pexels.com/photos/12701331/pexels-photo-12701331.jpeg?auto=compress"`


    }, {
        citation: `"Nous voterions tous pour le meilleur homme, mais il n'est jamais candidat."`,
        auteur: `Will Rogers`,
        img: `"https://images.pexels.com/photos/12860063/pexels-photo-12860063.jpeg?auto=compress"`


    }, {
        citation: `"La seule chose qui cloche avec l'immortalité, c'est qu'elle a tendance à s'éterniser."`,
        auteur: `Herb Caen`,
        img: `"https://images.pexels.com/photos/7657346/pexels-photo-7657346.jpeg?auto=compress"`


    }, {
        citation: `"Tout le monde ne fait pas confiance aux peintures, mais les gens croient aux photographies."`,
        auteur: `Ansel Adams`,
        img: `"https://images.pexels.com/photos/12879617/pexels-photo-12879617.jpeg?auto=compress"`


    }, {
        citation: `"Apprendre, c'est découvrir ce que vous savez déjà. Faire, c'est démontrer que vous le savez. Enseigner, c'est rappeler aux autres qu'ils le savent tout aussi bien que vous. Vous êtes tous des apprenants, des exécutants et des enseignants."`,
        auteur: `Richard David Bach`,
        img: `"https://images.pexels.com/photos/12871044/pexels-photo-12871044.jpeg?auto=compress"`


    }, {
        citation: `"J'aime mieux être exposé aux inconvénients d'une trop grande liberté qu'à ceux d'un trop petit degré de liberté."`,
        auteur: `Thomas Jefferson`,
        img: `"https://images.pexels.com/photos/11427593/pexels-photo-11427593.jpeg?auto=compress"`


    }, {
        citation: `"Une hirondelle ne fait pas un été, mais un écheveau d'oies, fendant le brouillard du dégel de mars, c'est le printemps."`,
        auteur: `Aldo Leopold`,
        img: `"https://images.pexels.com/photos/12826233/pexels-photo-12826233.jpeg?auto=compress"`


    }, {
        citation: `"Lorsque je vais dans mon jardin avec une bêche et que je creuse un lit, je ressens une telle exaltation et une telle santé que je découvre que je me suis trompé pendant tout ce temps en laissant les autres faire pour moi ce que j'aurais dû faire de mes propres mains."`,
        auteur: `Ralph Waldo Emerson`,
        img: `"https://images.pexels.com/photos/12858127/pexels-photo-12858127.jpeg?auto=compress"`


    }
];

btn.addEventListener("click", () =>{

    let random = Math.floor(Math.random() * citations.length);

    citation.innerText = citations[random].citation;
    auteur.innerText = citations[random].auteur;

body.style.background = `url(${citations[random].img}) no-repeat center /cover`
// body.style.background = "url(" + citations[random].img + ") no-repeat center /cover"
});