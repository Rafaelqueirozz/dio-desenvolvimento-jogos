// Closures - Uma função esperando um parametro para finalizar.

function soma (x) {
    return function soma2(y) {
        return x + y;
    }
}

console.log(soma(10)(20)); 

// Simulando o closure
// Atribuindo 10 para soma e retornando a funcao soma2;
let somaParcial = soma(10);
// Aguardando até o closure...

// Atribuindo o valor para a soma2, com outro valor e fazendo closure
console.log(somaParcial(20)); // x = 10 e y = 20
console.log(somaParcial(30)); // x = 10 e y = 30
console.log(somaParcial(40)); // x = 10 e y = 40