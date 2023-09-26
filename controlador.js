let inputDescricao = document.getElementById("iptDescricao")
let inputPrecoUnitario = document.getElementById("iptPrecoUnitario")
let btnCadastrarProduto = document.getElementById("btnCadastrar")
let divContainerDeCards = document.getElementById("containerDeCards")


let estoque = new Estoque();

btnCadastrarProduto.addEventListener("click", quandoClicarNoBotaoCadastrar);

function quandoClicarNoBotaoCadastrar() {
    let produto = new Produto(
        inputDescricao.value,
        inputPrecoUnitario.value
    )

    estoque.adicionarProduto(produto)
    desenharCards(estoque, divContainerDeCards);
}



