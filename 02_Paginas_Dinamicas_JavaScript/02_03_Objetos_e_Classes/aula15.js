// Como criar classes e instâncias


// Classe é uma definição generalizada de algo

class Pessoa {
    nome;
    idade;
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
};

// Instancia é a ocorrencia dessa classe.

const rafael = new Pessoa();
rafael.nome = 'Rafael Queiroz';
rafael.idade = 31;

const priscilla = new Pessoa();
priscilla.nome = 'Priscilla';
priscilla.idade = 33;

console.log(rafael);
console.log(priscilla);

rafael.descrever();