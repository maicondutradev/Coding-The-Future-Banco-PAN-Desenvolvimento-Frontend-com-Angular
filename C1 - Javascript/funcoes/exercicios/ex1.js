//Refatorando o exercicio de imc, usando funções!
function calcularImc(peso, altura){
    return peso / (altura * altura);
}

function classificarImc(imc){
    if (imc < 18.5){
        return(`Abaixo do peso! com o imc de ${imc.toFixed(1)}`);
    
    } else if (imc >= 18.5 && imc < 25){
        return(`Peso normal! com o imc de ${imc.toFixed(1)}`);
    
    } else if (imc >= 25 && imc < 30){
        return(`Acima do peso! com o imc de ${imc.toFixed(1)}`);
    
    } else if (imc >= 30 && imc < 40){
        return(`Obeso! com o imc de ${imc.toFixed(1)}`);
    
    } else if (imc >= 40){
        return(`Obesidade grave! com o imc de ${imc.toFixed(1)}`);
    }return
}

function main (){
    const imc = calcularImc(95, 1.75);
    console.log(classificarImc(imc));   
}

main();

//FUNCAO ANONIMA - Chamando a funcao imediatamente, sem a necessidade de atribuir um nome ou chamar ela.
/*
(function(){
    const imc = calcularImc(95, 1.75);
    console.log(classificarImc(imc));      
})();
*/