"use-strict"

//credo degli array con nomi e cognomi
let nomi = ['Zelda', 'Daisy', 'Jordan', 'Nick', 'Francis', 'Wilson', 'Tom']
let cognomi = ['Baker', 'Scott', 'Carraway', 'Buchanan', 'Sayre', 'Fitzgerald', 'Fay']

console.log(nomi)
console.log(cognomi)

//creo array finale, vuoto, dove andranno abbinati casualmente nomi+cognomi
const listaFake = []

for (let i = 0; i < nomi.length; i++) {
    const nomeCognome = nomi[Math.floor(Math.random() * nomi.length)] + " " + cognomi[Math.floor(Math.random() * cognomi.length)]
    listaFake.push(nomeCognome)
}

console.log(listaFake)

/*
Generatore di “nomi cognomi” casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.
*/