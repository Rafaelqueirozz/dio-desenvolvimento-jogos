// Assincronismo e Promises
// Assincronismo - É quando uma função vai estar funcionando em segundo plano que não temos controle e em algum momento vai voltar o controle, após a tarefa ter terminado.

// Promises
// Peço alguma coisa pra executar e em algum momento será devolvido, é uma promessa.

// Aprendendo a criar uma promessa

// Modelo de promessa
/*

new Promise((resolve, reject) => {
    // ...
    // ...
    resolve();
    // ...
    reject();
})

*/
/*
let promessaNumeroQualquer = new Promise((resolve, reject) =>{
    let numero = parseInt(Math.random() * 100)
    resolve(numero);
})
promessaNumeroQualquer
    .then((valor) => {
        console.log(valor);
    })
    .catch ((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log('Finalizou')
    })
*/

let simulaPromessa = new Promise((resolve, reject) =>{
    setTimeout(() => {
        let numero = parseInt(Math.random() * 100)
        resolve(numero)
    }, 1000);
})

simulaPromessa
    .then((valor) => {
        console.log(valor);
        return valor + 10;
    })
    .then((valor) => {
        console.log(valor)
    })
    .catch ((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log('Finalizou')
    })