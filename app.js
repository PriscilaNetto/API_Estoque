require('dotenv-safe').load();
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const produtos = require('./src/routes/produtos')
const database = require('./src/models/database')
database.connect()

app.use(bodyParser.json())
app.use(cors())
app.use('/produtos', produtos)

const port = process.env.PORT || 3001

app.get('/', (request, response) => {
    response.send('E aí, turo booom?')
})

    app.listen(port, function() {
    console.info(`toc, toc na porta ${port}`);
})


module.exports = app