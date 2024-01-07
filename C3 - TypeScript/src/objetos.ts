//Objeto Não Tipado - Sem previsibilidade
let produto:object = {
    name:"maicon",
    cidade:"RJ"
}

//Objeto Tipado - Com previsibilidade
type ProdutosLoja = {
    nome: string;
    preco: number;
    unidades: number;
}

let meuProduto: ProdutosLoja = {
    nome: "Tênis",
    preco: 89.99,
    unidades: 5
}