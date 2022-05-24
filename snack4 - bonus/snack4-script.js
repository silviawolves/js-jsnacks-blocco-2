'use strict'

//creo i due array
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
const array2 = [1, 2, 3, 4, 5, 6, 7, 8]

console.log(array1)
console.log(array2)


//creo un ciclo che controlli tutti gli elementi dell'array più corto
for (let i = 0; i < array2.length; i++ ) {
    console.log(array2[i])

}

//con ogni ciclo controllo se l'array2 è lungo quanto l'array1
//se non è lungo uguale, pusho un elemento dentro l'array2
//ripeto il ciclo finché non sono uguali di lunghezza


/*
Crea due array che hanno un numero di elementi diversi.  Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro
*/