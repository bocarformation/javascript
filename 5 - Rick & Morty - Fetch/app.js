const persoArticle = document.querySelector(".single-character")

personnage = document.querySelector('#personnage')
cercle = document.querySelector('.red-circle')
const url = document.location.href; 
console.log(url);
if(url === "http://127.0.0.1:5500/index.html"){ 
const API = fetch('https://rickandmortyapi.com/api/character/')
   .then(response => response.json())
   .then(data => {
       data.results.map(perso => {
    let newArticle = document.createElement('article');
    let img = document.createElement('img');
    let h3 = document.createElement('h3');
    let status = document.createElement('div');
    let localisation = document.createElement('div');
    let span = document.createElement('span');
    
    status.setAttribute('id', 'status')
    localisation.classList.add("localisation");




    newArticle.classList.add('single-character');
    img.setAttribute('src', `${perso.image}`);
    personnage.append(newArticle);
    newArticle.append(img)
    newArticle.append(h3)
    newArticle.append(status)
    newArticle.append(localisation)
   
    h3.textContent = ` ${perso.name}`
   
    

    
    
    status.textContent = `Statut: ${perso.status} - ${perso.species}`
    status.append(span)
       
    if(perso.status == "Alive"){
       span.classList.add("green-circle")  
       console.log("Test");
    }
    if(perso.status == "Dead"){
        span.classList.add("red-circle")  
    }
    if(perso.status == "unknown"){
        span.classList.add("grey-circle")  
     }
     
   
    localisation.textContent = `Localisation: ${perso.location.name}`

        //    article.classList.add('single-character')
        //    article.innerHTML = `<img src=${perso.image} alt=${perso.name} /><h3>${perso.name}</h3><span>Status: ${perso.status} </span> <div>Localisation: ${perso.location.name}`
        //    document.getElementById('personnage').append(article)
         })
   })
   .catch(error => console.log(error))
 
}
else{
    const API = fetch('https://rickandmortyapi.com/api/character/?page=2')
    .then(response => response.json())
    .then(data => {
        data.results.map(perso => {
     let newArticle = document.createElement('article');
     let img = document.createElement('img');
     let h3 = document.createElement('h3');
     let status = document.createElement('div');
     let localisation = document.createElement('div');
     status.classList.add("status");
     localisation.classList.add("localisation");
 
 
 
 
     newArticle.classList.add('single-character');
     img.setAttribute('src', `${perso.image}`);
     personnage.append(newArticle);
     newArticle.append(img)
     newArticle.append(h3)
     newArticle.append(status)
     newArticle.append(localisation)
     h3.textContent = ` ${perso.name}`
     status.textContent = `Statut: ${perso.status} - ${perso.species}`
     localisation.textContent = `Localisation: ${perso.location.name}`
 
         //    article.classList.add('single-character')
         //    article.innerHTML = `<img src=${perso.image} alt=${perso.name} /><h3>${perso.name}</h3><span>Status: ${perso.status} </span> <div>Localisation: ${perso.location.name}`
         //    document.getElementById('personnage').append(article)
          })
    })
    .catch(error => console.log(error))
}