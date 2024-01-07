function escrevaNome(nome){
    return nome;
}

function verificarIdade(idade){
    if(idade >= 18){
        console.log(`Seu nome é ${escrevaNome('Maicon')} e você é maior de idade!`);
    }else{
        console.log(`Seu nome é ${escrevaNome('Maicon')} e você é menor de idade!`);
    }
}

verificarIdade(18);