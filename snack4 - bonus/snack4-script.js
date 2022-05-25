'use strict'

//creo i due array
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
const array2 = [1, 2, 3, 4, 5, 6, 7, 8]

console.log(array1)
console.log(array2)

//creo un ciclo che controlli tutti gli elementi dell'array più corto
for (let i = 0; i < array2.length; i++) {

    //se l'array2 ha meno elementi dell'array1, ad ogni ciclo aggiungo un numero random
    //il ciclo si ferma quando gli array hanno lo stesso numero di elementi
    if (array2.length < array1.length) {
        const numeroAggiunto = Math.floor(Math.random() * 100)
        array2.push(numeroAggiunto)
    } else if (array2.length > array1.length) {
        const numeroAggiunto = Math.floor(Math.random() * 100)
        array1.push(numeroAggiunto)
    }
}

console.log(array1)
console.log(array2)

/*
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro
*/