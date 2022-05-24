"use-strict"

//credo degli array con nomi e cognomi
let nomi = ['Zelda', 'Daisy', 'Jordan', 'Nick', 'Francis', 'Wilson', 'Tom']
let cognomi = ['Baker', 'Scott', 'Carraway', 'Buchanan', 'Sayre', 'Fitzgerald', 'Fay']

console.log(nomi)
console.log(cognomi)

//creo array dove unisco i due array sopra
const nomiCognomi = [...nomi, ...cognomi]
console.log(nomiCognomi)

//creo variabile vuota da usare per operare il risultato che voglio
let result = ''

//creo array finale, vuoto, dove andranno abbinati casualmente nomi+cognomi
const listaFake = []

//creo un ciclo che scorra tutti i nomi+cognomi
for (let i = 0; i < nomiCognomi.length; i++) {
    console.log(nomiCognomi[i], i)
    nomiCognomi[i] = Math.floor(Math.random() * nomiCognomi.length)
    console.log(nomiCognomi[i])
    
}




/*
Generatore di “nomi cognomi” casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.
*/