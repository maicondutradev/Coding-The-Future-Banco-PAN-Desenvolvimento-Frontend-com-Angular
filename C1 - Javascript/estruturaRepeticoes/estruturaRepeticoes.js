

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;

console.log(`A sua média é ${media.toFixed(1)}!`);





/*
const nome = 'Maicon Fonseca Dutra'; 

for (let i = 0; i < nome.length; i++) {

    console.log(nome[i]);

}
*/

