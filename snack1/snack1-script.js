"use-strict"

//Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

let numeroUtente = prompt('Inserisci un numero!')
numeroInserito = parseInt(numeroUtente)

if (numeroInserito % 2 === 0) {
    console.log(numeroInserito)
} else {
    console.log(numeroInserito + 1)
}