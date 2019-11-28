const express = require('express')
const app = express()
const index = require('./routes/index')
const cors = require('cors')

const bodyParser = require('body-parser')



// const listaProdutos = require('./routes/produtos');

app.use(bodyParser.json())
app.use(cors())

// app.use(function (request, response, next){
//     response.header('Access-Control-Allow-Origin', '*')
//     response.header(
//         'Acess-Control-Allow-Headers',
//         'Origin, X-Requested-With, Content-Type, Accept'
//     );
//     next()
// });
app.use('/', index)
// app.use('produtos', produtos)

module.exports = app