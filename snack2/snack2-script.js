"use-strict"

//credo degli array con nomi e cognomi
let nomi = ['Zelda', 'Daisy', 'Jordan', 'Nick', 'Francis', 'Wilson', 'Tom']
let cognomi = ['Baker', 'Scott', 'Carraway', 'Buchanan', 'Sayre', 'Fitzgerald', 'Fay']

console.log(nomi)
console.log(cognomi)

//creo array dove inserire i nomi+cognomi generati casualmente
const nomiCognomi = []

//creo un ciclo che scorra tutti i nomi
for (let i = 0; i < nomi.length; i++) {
    console.log(nomi[i])
}

//creo un ciclo che scorra tutti i cognomi
for (let i = 0; i < cognomi.length; i++) {
    console.log(cognomi[i])
}





/*
Generatore di “nomi cognomi” casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.
*/