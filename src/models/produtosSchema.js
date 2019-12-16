const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ProdutosSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
    nome: { type: String, required: true},
    tamanho: { type: String, required: true},
    modelagem: { type: String, required: true},
    cor: { type: String, required: true},
    quantidade: { type: Number, required: true},
    quantidadeVenda: {type: Number},
    fornecedor: { type: String, required: true},
    dataEntrada: {type: Date},
    dataSaída: {type: Date}
})

const produtosModel = mongoose.model('produtos', ProdutosSchema)

module.exports = produtosModel