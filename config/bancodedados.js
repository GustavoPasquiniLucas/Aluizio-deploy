const mongoose = require('mongoose')

//Criar partimento no banco de dados
const conexao = async()=>{
    var bdlocal = await mongoose.connect('mongodb://localhost/fiap')
    // var bdatlas = await mongoose.conect('mongodb+srv://userAdmin:pasquini43@cluster0.bvp72.mongodb.net/test')
}

module.exports = conexao