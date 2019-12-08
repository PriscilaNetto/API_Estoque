const express = require('express')
const app = express()
const index = require('./routes/index')
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = 3001
const listaProdutos = require('./routes/produtos');

app.use(bodyParser.json())
app.use(cors())
app.use('produtos', listaProdutos)

app.get('/', (request, response) => {
    response.send('1...2...3...Ufa, deu certo!')
})

app.listen(PORT)

    console.info(`toc, toc na porta ${PORT}`);


module.exports = app