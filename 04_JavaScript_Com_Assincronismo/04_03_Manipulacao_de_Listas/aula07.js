/*
// Invocações de funções

function teste() {
    console.log('Invocando diretamente')
}

teste(); // Invocação direta.

// Métodos para invocação diretamente as funções.
teste.apply(); 
teste.call();

// Explicando diferença entre as chamadas
*/

const pessoa = {
    nome: 'Rafael',
    idade: 31
}

function gritar(prefixo) {
    console.log(prefixo, this.nome);
}

gritar.apply(pessoa, ['OLAAAAAA']) // Vai atribuir ao contexto indicado entre parenteses, nesse caso pessoa e em seguida uma array para servir de argumentos.
gritar.call(pessoa, 'OLAAAAAA') // Neste caso não há necessidade de ser uma array, podendo ser apenas um argumento.

