console.log("hello");
/*
Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API, 
sfruttando la risposta per generare dinamicamente in pagina una serie di foto!
*/

// creo una variabile dove riporto l'url dell'API
const url = "https://lanciweb.github.io/demo/api/pictures/"
// seleziono gli elementi della DOM
const genera = document.getElementById("genera")

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
}

})



// richiamo il contenuto della card

// cambio le proprietà delle card

