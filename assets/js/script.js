// creo una variabile dove riporto l'url dell'API
const url = "https://lanciweb.github.io/demo/api/pictures/"

// seleziono gli elementi della DOM
const generaEl = document.getElementById("genera");
const overlayEl = document.getElementById("overlay")
const btnOverlayEl = document.getElementById("btnOverlay")
const imgOverlayEl = document.getElementById("imgOverlay")

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
      // all'interno dell'elemento img inserisco una classe "pic" per poter poi selezionale tutte le immagini
      let card = `<div class="col-sm-12 col-md-6 col-lg-4"> 
                     <div id="genera" class="card box-shadow mb-3">
                       <div class="row g-0">
                         <img class="puntina" src="./assets/img/pin.svg">
                         <img src=${image} class="pic card-img-top pt-2 px-2" alt="...">
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


    // seleziono tutte le immagini
    const pic = document.querySelectorAll(".pic")
    for (let i = 0; i < pic.length; i++) {
      const singolaPic = pic[i];
      // console.log(singolaPic);

      // creo un evento che al click della specifica card mi fa comparire l'immagine corrispondente nell'overlay
      singolaPic.addEventListener("click", () => {
        overlayEl.style.display = "block";
        imgOverlayEl.src = singolaPic.src;
      })
    }

    // creo un evento che al click del bottone l'overlay scompare
    btnOverlayEl.addEventListener("click", () => {
      overlayEl.style.display = "none";
    })
  })

