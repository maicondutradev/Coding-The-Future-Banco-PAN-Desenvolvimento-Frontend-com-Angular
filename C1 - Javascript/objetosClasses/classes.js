class Pessoa {
    nome;
    idade;
    anoNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`O meu nome é ${this.nome} e a minha idade é ${this.idade} e eu nasci no ano de ${this.anoNascimento}.`);
    }
}

function compararPessoas(p1,p2){
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velha(o) que ${p2.nome}!`);

    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velha(o) que ${p1.nome}!`);

    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade!`);
    }
}

const maicon = new Pessoa('Maicon', 23);
const mirela = new Pessoa('Mirela', 22);

compararPessoas(maicon, mirela);




/*
class Pessoa {
    nome;
    idade;
    anoNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`O meu nome é ${this.nome} e a minha idade é ${this.idade} e eu nasci no ano de ${this.anoNascimento}.`);
    }
}
const maicon = new Pessoa('Maicon Fonseca Dutra', 23);

const mirela = new Pessoa('Mirela Taciane dos Santos', 22);

maicon.descrever();
mirela.descrever();

console.log(maicon);
console.log(mirela);
*/

///////////////////////////////////////////////////////////////////////////

/*
class Pessoa {
    nome;
    idade;

    descrever() {
        console.log(`O meu nome é ${this.nome} e a minha idade é ${this.idade}`);
    }
}

const maicon = new Pessoa();
maicon.nome = 'Maicon Fonseca Dutra';
maicon.idade = 23;

const mirela = new Pessoa();
mirela.nome = 'Mirela Taciane dos Santos';
mirela.idade = 22;

maicon.descrever();
mirela.descrever();

console.log(maicon);
console.log(mirela);
*/