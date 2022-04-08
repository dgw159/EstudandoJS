const sequence = {
    __id: 1,
    get id() {return this.__id++}
}

const produtos = {}

function salvarProduto(produto){
    if (!produtos.id) produtos.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

function getProduto(id){
    return produtos[id] || {}
}

function getProdutos(id){
    return Object.values(produtos)
}

module.exports = {salvarProduto, getProduto, getProdutos}