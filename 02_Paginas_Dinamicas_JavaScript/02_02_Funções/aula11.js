// Como organizar as funções

// Reescrevendo aula 08 exercicio IMC em funções

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc <= 25) {
        return 'Peso normal';
    } else if (imc <= 30) {
        return 'Acima do peso';
    } else if (imc <= 40) {
        return 'Obeso';
    } else {
        return 'Obesidade grave';
    }
}

function main() {
    let peso = 73;
    let altura = 1.72;
    let imc = calcularImc(peso, altura);
    console.log(imc)
    console.log(classificarImc(imc))
}

main();


// Função auto invocável

(function mainInvocavel() {
    let peso = 73;
    let altura = 1.72;
    let imc = calcularImc(peso, altura);
    console.log(imc)
    console.log(classificarImc(imc))
})();
