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

/*
A função pode ser chamada antes ou depois de sua declaração.
De ambas as formas irá funcionar (desde que o cóidgo esteja correto).
O JS sobe todo código antes da execução, dessa forma ao executar a função
já terá sido declarada e reconhecida idependente de quando será chamada.
*/
