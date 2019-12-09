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

// const adicionaProduto = (request, response) => {

//     const novoProduto = new produtosModel(request.body)
//     novoProduto.save((error) => {
//         if (error) {
//             return response.status(500).send(error)
//         }
//             return response.status(201).send(novoProduto)
//     })
// }


module.exports = {
    listaProdutos
    // adicionaProduto
}