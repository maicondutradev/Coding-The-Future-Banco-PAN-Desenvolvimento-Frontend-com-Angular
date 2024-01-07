const pessoa1 = {
    nome: 'Maicon Fonseca Dutra',
    idade: 23,
    
    descrever: function(){
        console.log(`O meu nome é ${this.nome} e a minha idade é ${this.idade}`);
    }
};

pessoa1.descrever();

console.log(pessoa1.nome);

/*
//Alterando o valor da função
pessoa1.descrever = function(){
    console.log(`O meu nome é ${this.nome}`);
}

//Adicionando um novo valor ao objeto
pessoa1.altura = 1.76;

//Deletando um valor do objeto
delete pessoa1.nome;
*/