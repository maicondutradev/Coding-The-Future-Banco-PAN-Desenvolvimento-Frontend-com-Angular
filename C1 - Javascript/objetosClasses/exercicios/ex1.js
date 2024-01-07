class Carro {
    marca;
    cor;
    gastoKmRodado;

    constructor(marca, cor, gastoKmRodado){
        this.marca = marca;
        this.cor = cor;
        this.gastoKmRodado = gastoKmRodado;
    }

    calcularGastoDePercurso(distanciaEmKM, precoCombustivel){
        return distanciaEmKM * this.gastoKmRodado * precoCombustivel;
    }
};


const uno = new Carro('Fiat', 'Amarelo', 1/12);

const palio = new Carro('Fiat', 'Azul', 1/10);

console.log(`O gasto total do percurso é R$${uno.calcularGastoDePercurso(70, 5).toFixed(2) } reais.`);

console.log(`O gasto total do percurso é R$${palio.calcularGastoDePercurso(70, 5).toFixed(2) } reais.`);