const { gets, print } = require('./funcao-auxiliar');

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);
}

let maiorValor = -1;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];
    if(numeroSorteado > maiorValor){
        maiorValor = numeroSorteado;
    }
}

print(maiorValor);


//Uma maneira mais simplificada de resolver esse problema
/*

const quantidadeDeAlunos = gets();

let maiorValorEncontrado = 0;

for(let i = 0; i < quantidadeDeAlunos; i++){
    const numeroSorteado = gets();
    if(numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado;
    }
}

print(maiorValorEncontrado);

*/