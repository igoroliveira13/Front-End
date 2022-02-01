// Treinando funções

// Somar
function somar(valor1=0, valor2=0) {
    return valor1 + valor2
}

console.log('O resultado da função somar(5, 3) é = ', somar(5, 3))


// Subtrair
function menos(valor1=0, valor2=0) {
    return valor1 - valor2
}

console.log('O resultado da função meno(5, 3) é = ', menos(5, 3))


// Multiplicar
function mult(valor1=0, valor2=0) {
    return valor1 * valor2
}

console.log('O resultado da função mult(5, 3) é = ', mult(5, 3))

/* 
Ao declarar a função, colocar valor1=0 é uma forma de tratar erros. Caso 
o usuario esqueça de digitar um numero ou não o digite intencionalmente, resultaria em
erro pois a função espera receber dois parametros, colocando =0 o código irá inserir 
o zero no lugar de um parametro não inserido. 
*/
