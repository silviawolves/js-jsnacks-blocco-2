"use-strict"

//creo array con tutti i numeri interi
const numeriInteri = [4, 78, 543, 91, 3, 56, 23, 643, 12, 8, 48, 244, 61, 99, 174, 402]
console.log(numeriInteri)

//creo variabili base da discutere dentro i cicli o negli if
let indicePari = false
let somma = 0

//creo array vuoto dove pushare gli indici
const pari = []
const dispari = []

for (let i = 0; i < numeriInteri.length; i++) {
    if (i % 2 === 0) {
        indicePari = true
        console.log(numeriInteri[i], indicePari)
        pari.push(numeriInteri[i])
    } else {
        dispari.push(numeriInteri[i])
    }
}
console.log(pari)
console.log(dispari)

    
    console.log(somma)



/*
Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione (indice) dispari
*/