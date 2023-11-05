// Praticando com exercicios

// Funções exercicio 06

/* 
    2 - Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos: nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC.
    Instancie uma pessoa chamada José que tenha: 70 kg e 1.75m de altura.
    Depois diga o IMC de José.
*/


class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc () {
        return (this.peso / this.altura**2);
    }

    classificaImc () {
        const imc = this.calcularImc();
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
}

const jose = new Pessoa('José', 85, 1.75);
const rafael = new Pessoa('Rafael', 71, 1.72);

console.log(jose.calcularImc());
console.log(jose.classificaImc());
console.log(rafael.calcularImc());
console.log(rafael.classificaImc());