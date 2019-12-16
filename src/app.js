const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = 3001
const produtos = require('./src/routes/produtos')
const database = require('./src/models/database')
database.connect()

app.use(bodyParser.json())
app.use(cors())
app.use('/produtos', produtos)

app.get('/', (request, response) => {
    response.send('E aí, turo booom?')
})

app.listen(PORT)

    console.info(`toc, toc na porta ${PORT}`);


module.exports = app