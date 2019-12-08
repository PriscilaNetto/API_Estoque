const mongoose = require('mongoose')
const Schema = mongoose.Schema
const produtosSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
    nome: { type: String, required: true},
    tamanho: { type: String, required: true},
    modelagem: { type: String, required: true},
    cor: { type: String, required: true},
    quantidade: { type: String, required: true},
    fornecedor: { type: String, required: true},
    dataEntrada: {type: Date},
    dataSaída: {type: Date}
})

const produtosCollection = mongoose.model('produtos', produtosSchema)

module.exports = {produtosCollection}