const mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost:27017/apiestoque'
const connect = () => {
    mongoose.connect(DB_URL, {useNewUrlParser:true})
const connection = mongoose.connection
connection.on('error', () => console.error('Ops, não conectou :/'))

connection.once('open', () => console.log('Yupiii, conectamos! :D'))

}

module.exports = {connect}



