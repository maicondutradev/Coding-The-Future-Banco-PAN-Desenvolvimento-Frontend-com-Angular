class Pessoas {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
        return this.peso / (this.altura * this.altura);
    }

    classificarImc(){
        const imc = this.calcularImc();

        if (imc < 18.5){
            return(`Abaixo do peso}`);
        
        } else if (imc >= 18.5 && imc < 25){
            return(`Peso normal`);
        
        } else if (imc >= 25 && imc < 30){
            return(`Acima do peso`);
        
        } else if (imc >= 30 && imc < 40){
            return(`Obeso`);
        
        } else if (imc >= 40){
            return(`Obesidade grave`);
        }
    }
};

const jose = new Pessoas('José',70,1.75);
console.log(`O IMC de ${jose.nome} é ${jose.calcularImc().toFixed(2)} e ele(a) está ${jose.classificarImc()}!`);

const mirela = new Pessoas('Mirela', 54, 1.56);
console.log(`O IMC de ${mirela.nome} é ${mirela.calcularImc().toFixed(2)} e ele(a) está ${mirela.classificarImc()}!`);

const maicon = new Pessoas('Maicon', 78, 1.76);
console.log(`O IMC de ${maicon.nome} é ${maicon.calcularImc().toFixed(2)} e ele(a) está ${maicon.classificarImc()}!`);

const joao = new Pessoas('João', 99, 1.73);
console.log(`O IMC de ${joao.nome} é ${joao.calcularImc().toFixed(2)} e ele(a) está ${joao.classificarImc()}!`);
