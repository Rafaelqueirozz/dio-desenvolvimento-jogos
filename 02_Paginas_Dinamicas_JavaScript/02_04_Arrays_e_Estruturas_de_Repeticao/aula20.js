// Entendendo Arrays (listas)

// Criando uma lista de alunos com '[]'
let alunos = ['Rafael', 'Luis', 'Sergio', 'Priscilla'];

console.log(alunos)

// Acessando a posição 1 (0)
console.log(alunos[0])

// Adicionando itens em um Array

alunos.push('João')
console.log(alunos)

alunos[5] = 'José'
console.log(alunos)

// Alterando item de um array

alunos[1] = 'Marcelo'
console.log(alunos)

// Deletando um item de um array
// Removendo o ultimo item
alunos.pop()
console.log(alunos)

// Removendo o primeiro item
alunos.shift();
console.log(alunos)


// Verificando o tamanho de uma lista

console.log(alunos.length);