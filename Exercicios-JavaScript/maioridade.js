// Maior ou Menor de idade 

let age = 20

if (age >= 18) {
    console.log('O candidato é maior de idade')
} else {
    console.log('O candidato é menor de idade')
}


// Solução usando função

function isAdult(numero) {
    if (numero >= 18) {
        return console.log('O candidato é maior de idade (função)')
    } else {
        return console.log('O candidato é menor de idade')
    }
}

isAdult(20)
