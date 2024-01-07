const nota1 = 2;
const nota2 = 5;
const nota3 = 3;

const media = (nota1 + nota2 + nota3) / 3;

if (media < 5){
    console.log(`Você foi reprovado! com uma media de ${media.toFixed(1)}`);
} else if (media >= 5 && media < 7){
    console.log(`Você está de recuperação! com uma media de ${media.toFixed(1)}`);
} else if (media >= 7){
    console.log(`Você passou de semestre! com uma media de ${media.toFixed(1)}`);
}