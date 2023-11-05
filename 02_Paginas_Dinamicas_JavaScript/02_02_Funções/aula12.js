// Funções - Exercicio 01

function escreveNome(nome) {
    return 'meu nome é ' + nome;
}

console.log(escreveNome('Rafael'));

// Funções - Exercicio 02

function verificaIdade(idade){
    console.log('Sua idade é', idade)
    if (idade >= 18) {
        return 'Maior de idade';
    } else {
        return 'Menor de idade';
    }
}

console.log(verificaIdade(19))
console.log(verificaIdade(17))

// Funções - Exercicio 03

function verificaIdade(idade){
    console.log('Sua idade é', idade)
    if (idade >= 18) {
        return escreveNome('Rafael') + ' e sou maior de idade';
    } else {
        return escreveNome('Luis') + ' e sou menor de idade';
    }
}
