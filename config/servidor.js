const express = require('express')
const app = express()

//porta do servidor
const porta = process.env.PORT || 4040

//configurar o transporte de dados do formulário para script
app.use(express.urlencoded({extended:false}))
//exportando a variavél porta e app
module.exports = {app, porta}