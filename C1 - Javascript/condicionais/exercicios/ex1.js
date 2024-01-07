const etanol = 5.79;
const gasolina = 6.66;
const kmPorLitro = 10;
const distanciaEmKM = 100;
const tipoCombustivel = etanol;

const gastoMedio = distanciaEmKM / kmPorLitro;

if (tipoCombustivel == etanol){
    const valorGasto = gastoMedio * etanol;
    console.log(`O gasto para realizar essa viagem usando etanol é de R$${valorGasto.toFixed(2)} Reais`);

} else if(tipoCombustivel == gasolina){
    const valorGasto = gastoMedio * gasolina;
    console.log(`O gasto para realizar essa viagem usando etanol é de R$${valorGasto.toFixed(2)} Reais`);
}
