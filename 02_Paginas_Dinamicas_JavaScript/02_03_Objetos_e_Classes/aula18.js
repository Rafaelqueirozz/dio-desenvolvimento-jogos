// Praticando com exercicios

// Funções exercicio 05

/* 
    1 - Crie uma classe para representar carros.
    Os carros devem possuir: marca, cor e gasto médio de combustível por quilômetro rodado.
    Crie um método que dado a quantidade de quilômetros e o preço do combustivel nos dê o valor gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoCombustivelPorKm;

    constructor(marca, cor, gastoCombustivelPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoCombustivelPorKm = gastoCombustivelPorKm;
    }

    calcularGastoViagem (distanciaEmKm, valorCombustivel) {
        return distanciaEmKm * this.gastoCombustivelPorKm * valorCombustivel;
    }
}

const hb20Rafael = new Carro('Hyundai', 'Cinza', 1/9.8);

console.log(hb20Rafael.calcularGastoViagem(70, 5));

const palio = new Carro('Fiat', 'Preto', 1/10);
console.log(palio.calcularGastoViagem(73, 5));
