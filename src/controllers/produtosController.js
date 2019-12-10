const {connect} = require ('../models/database')
const produtosModel = require('../models/ProdutosSchema')

connect()

const listaProdutos = (request, response) => {
    produtosModel.find((error, produtos) => {
        if (error){
            return response.status(500).send(error)
        }
           return response.status(200).send(produtos)
        })
    }

const novoProduto = (request, response) => {

    const adicionaProduto = new produtosModel(request.body)
    adicionaProduto.save((error) => {
        if (error) {
            return response.status(500).send(error)
        }
            return response.status(201).send(adicionaProduto)
    })
}

const produtoById = (request, response) => {
    const id = request.params.id

    return produtosModel.findById(id, (error, produto) =>{
        if (error) {
            return response.status(500).send(error)
        }
        
        if(produto) {
         
            return response.status(200).send(produto)
        }
            return response.status(404).send('Xii, não encontrei seu produto')

    })
}


module.exports = {
    listaProdutos,
    novoProduto,
    produtoById
}