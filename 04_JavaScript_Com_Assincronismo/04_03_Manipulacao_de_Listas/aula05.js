
// First Class Functions
// Higher Order Functions

/*

//Declaração explicita

function falarMeuNome () {
    console.log(`Meu nome é Rafael`)
}

const referenciaNova = falarMeuNome;
referenciaNova();

function falarMeuCompleto (falarMeuCompleto) {
    falarMeuCompleto();
    console.log('Queiroz')
}

falarMeuCompleto(falarMeuNome);

*/

function funcao1() {
    console.log(this)
}

// Arrow Function

let funcao2 = () => {
    console.log(this)
}

let rafael = {
    nome: 'Rafael',
    funcao1, // Funcao explicita assume o objeto como contexto.
    funcao2 // Arrow function não assume o objeto como contexto.
}

rafael.funcao1();
rafael.funcao2();