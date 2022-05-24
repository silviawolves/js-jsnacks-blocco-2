"use-strict"

const numeriInteri = [4, 78, 543, 91, 3, 56, 23, 643, 12, 8, 48, 244, 61, 99, 174, 402]
console.log(numeriInteri)

for (let i = 0; i < numeriInteri.length; i++) {
    console.log(numeriInteri[i])
    let indicePari = i % 2 === 0
    console.log(numeriInteri[i], indicePari)
}


/*
Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione (indice) dispari
*/