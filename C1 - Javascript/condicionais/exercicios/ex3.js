const peso = 120;
const altura = 1.76;
const imc = peso / (altura * altura);

if (imc < 18.5){
    console.log(`Abaixo do peso! com o imc de ${imc.toFixed(1)}`);

} else if (imc >= 18.5 && imc < 25){
    console.log(`Peso normal! com o imc de ${imc.toFixed(1)}`);

} else if (imc >= 25 && imc < 30){
    console.log(`Acima do peso! com o imc de ${imc.toFixed(1)}`);

} else if (imc >= 30 && imc < 40){
    console.log(`Obeso! com o imc de ${imc.toFixed(1)}`);

} else if (imc >= 40){
    console.log(`Obesidade grave! com o imc de ${imc.toFixed(1)}`);
}