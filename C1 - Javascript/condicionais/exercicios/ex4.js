const precoProduto = 32.50;
const aVistaDebito = precoProduto * 0.9;
const aVistaDinheiroEPix = precoProduto * 0.85;
const cartao2x = precoProduto;
const cartaoAcima2x = precoProduto * 1.1;
const escolhaDePagamento = cartaoAcima2x;

if (escolhaDePagamento == aVistaDebito){
    console.log(`O valor do produto é R$${precoProduto.toFixed(2)}, com um desconto de 10% ficou R$${aVistaDebito.toFixed(2)}`);

} else if (escolhaDePagamento == aVistaDinheiroEPix){
    console.log(`O valor do produto é R$${precoProduto.toFixed(2)}, com um desconto de 15% ficou R$${aVistaDinheiroEPix.toFixed(2)}`);

} else if (escolhaDePagamento == cartao2x){
    console.log(`O valor do produto é R$${precoProduto.toFixed(2)}, sem desconto ficou R$${cartao2x.toFixed(2)}`);

} else if (escolhaDePagamento == cartaoAcima2x){
    console.log(`O valor do produto é R$${precoProduto.toFixed(2)}, com um acrescimo de 10% ficou R$${cartaoAcima2x.toFixed(2)}`);
}
