console.log("hello");
/*
Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API, 
sfruttando la risposta per generare dinamicamente in pagina una serie di foto!
*/

// creo una variabile dove riporto l'url dell'API
const url = "https://lanciweb.github.io/demo/api/pictures/"

// seleziono gli elementi della DOM
const generaEl = document.getElementById("genera")

// creo una variabile  vuota che servirà a contenere tutte le cards

let ricordi = ""

// richiamo i dati con una chiamata AJAX all'API
axios.get(url)
.then((res) => {
console.log(res);
const datiCards = res.data;
console.log(datiCards);

// ciclo per poter prendere gli oggetti singoli
for (let i = 0; i < 6; i++) {
     const obj = datiCards[i];
     console.log(obj);

     // prendo le singole proprietà
     let titolo = obj.title
     console.log(titolo);

     let giorno = obj.date
     console.log(giorno);
          
     let image = obj.url
     console.log(image);

     // riporto il contenuto della card e ne cambio le proprietà
     let card = `<div class="col-sm-12 col-md-6 col-lg-4"> 
                     <div id="genera" class="card box-shadow mb-3">
                       <div class="row g-0">
                         <img class="puntina" src="./assets/img/pin.svg">
                         <img src=${image} class="card-img-top pt-2 px-2" alt="...">
                           <div class="card-body">
                             <h6 class="card-subtitle mb-1 text-body-secondary">${giorno}</h6>
                             <h4>${titolo}</h4>
                           </div>
                       </div>
                     </div>
                   </div>`

ricordi += card;
}
//stampo a schermo le cards
generaEl.innerHTML = ricordi
})


