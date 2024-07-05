// Consegna:
// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
//  per i multipli di 3 stampi “Fizz” al posto del numero
//  per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?
// Consigli del giorno:
// Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”

console.log("numeri da 1 a 100")

let num = 0
let lista = document.getElementById('list')
// console.log(lista)

//loop for per stampare n da 1 a 100 in console
for (let i = 0; i < 100; i++) {
    num++
    if (num % 15 == 0) {
        console.log('fizzbuzz')
    }
    else if (num % 5 == 0) {
        console.log('buzz')
    }
    else if (num % 3 == 0) {
        console.log('fizz')
    }
    else if (num = num) {
        console.log(num)
    }
    lista.innerHTML = lista.innerHTML + "<li>" + num + "</li>"
}