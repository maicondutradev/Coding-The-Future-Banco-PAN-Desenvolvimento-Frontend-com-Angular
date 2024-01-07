function calculaAVistaDebito(){
    return precoProduto * 0.9;
}
function calculaAVistaDinheiroEPix(){
    return precoProduto * 0.85;
}
function calculaCartao2x(){
    return precoProduto;
}
function calculaCartaoAcima2x(){
    return precoProduto * 1.1;
}

function valorFinal(){
    switch (escolhaDePagamento){
        case calculaAVistaDebito():
        console.log(`O valor do produto é R$${precoProduto.toFixed(2)}, com um desconto de 10% ficou R$${calculaAVistaDebito().toFixed(2)}`);
        break;

        case calculaAVistaDinheiroEPix():
        console.log(`O valor do produto é R$${precoProduto.toFixed(2)}, com um desconto de 15% ficou R$${calculaAVistaDinheiroEPix().toFixed(2)}`);
        break;

        case calculaCartao2x():
        console.log(`O valor do produto é R$${precoProduto.toFixed(2)}, sem desconto ficou R$${calculaCartao2x().toFixed(2)}`);
        break; 

        case calculaCartaoAcima2x():
        console.log(`O valor do produto é R$${precoProduto.toFixed(2)}, com um acrescimo de 10% ficou R$${calculaCartaoAcima2x().toFixed(2)}`);
    }
}


const precoProduto = 32.50;
const escolhaDePagamento = calculaAVistaDebito();
valorFinal();


