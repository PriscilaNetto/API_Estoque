const express = require ('express')
const router = express.Router()
const controller = require("../controllers/produtosController")

router.get('', controller.listaProdutos)
router.post('', controller.novoProduto)
router.get('/:id', controller.produtoById)
router.patch('/:id', controller.atualizaProduto)
router.delete('/:id', controller.removeProduto)

module.exports = router