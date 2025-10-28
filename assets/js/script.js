console.log("hello");
/*
Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API, 
sfruttando la risposta per generare dinamicamente in pagina una serie di foto!
*/

// creo una variabile dove riporto l'url dell'API
const url = "https://lanciweb.github.io/demo/api/pictures/"

// seleziono gli elementi della DOM
const generaEl = document.getElementById("genera");
const overlayEl = document.getElementById("overlay")
const btnOverlayEl = document.getElementById("btnOverlay")

// creo una variabile  vuota che servirà a contenere tutte le cards
let ricordi = ""

// richiamo i dati con una chiamata AJAX all'API
axios.get(url)
.then((res) => {
console.log(res);
const datiCards = res.data;
// console.log(datiCards);

// ciclo per poter prendere gli oggetti singoli
for (let i = 0; i < 6; i++) {
     const obj = datiCards[i];
     // console.log(obj);

     // prendo le singole proprietà
     let titolo = obj.title
     // console.log(titolo);

     let giorno = obj.date
     // console.log(giorno);
          
     let image = obj.url
     // console.log(image);

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

// creo un evento che al click di una delle foto compare loverlay
generaEl.addEventListener("click", () => {
    overlayEl.style.display = "block"
});

// creo un evento che al click del bottone l'overlay scompare
btnOverlayEl.addEventListener("click", () => {
   overlayEl.style.display = "none";
})

//stampo a schermo le cards
generaEl.innerHTML = ricordi
})

/*
Milestone 2

Facciamo sparire l’overlay con l’aiuto di una classe CSS che imposti il display: none [✓]
Dopodiché facciamo sì che cliccando una qualunque foto. L’overlay ricompaia. [✓]
Cliccando invece il button di chiusura, l’overlay scompare nuovamente. [✓]
Centratura overlay [✓]
*/ 
