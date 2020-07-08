var km = parseInt (prompt ("Inserisci il numero di km che vuoi percorrere"));
var eta = parseInt (prompt ("Inserisci la tua età"));
var prezzobiglietto = km * 0.21;

var prezzo;

if ( eta < 18 ) {
    prezzo = prezzobiglietto - prezzobiglietto * 0.20;
} else if ( eta > 65 ) {
    prezzo = prezzobiglietto - prezzobiglietto * 0.40;
} else {
    prezzo = prezzobiglietto;
}

document.getElementById('prezzo').innerHTML = 'il prezzo che pagherai è di ' + prezzo + '€';
