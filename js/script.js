var km = parseInt (prompt ("Inserisci il numero di km che vuoi percorrere"));
var eta = parseInt (prompt ("Inserisci la tua età"));
var prezzobiglietto = km * 0.21;
var sconto20 = prezzobiglietto * 0.20;
var sconto40 = prezzobiglietto * 0.40;
var prezzo;

if ( eta < 18 ) {
    prezzo = prezzobiglietto - sconto20;
} else if ( eta > 65 ) {
    prezzo = prezzobiglietto - sconto40;
} else {
    prezzo = prezzobiglietto;
}

document.getElementById('prezzo').innerHTML = prezzo;
