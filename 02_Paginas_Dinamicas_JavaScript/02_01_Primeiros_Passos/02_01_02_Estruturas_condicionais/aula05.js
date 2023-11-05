// Estruturas condicionais com if e else

/*
let numero = 5;

let numeroPar = (numero % 2) === 0;
console.log(numeroPar);

if (numeroPar) {
    console.log('Par');
} else {
    console.log('Impar')
};

*/

// Estruturas condicionais com else if

let numeroQualquer = 11;

let numeroParDois = (numeroQualquer % 2) === 0;

if (numeroQualquer == 0) {
    console.log('Numero inválido')
} else if (numeroParDois) {
    console.log('Par')
} else {
    console.log('Impar')
}