const conexao = require('../config/bancodedados')

module.exports = (app)=>{

    //conexão entre rotas
    var conexao = require('../config/bancodedados')
    var professores = require('../models/professores')

    //abrir o arquivo profrsores.ejs
    app.get('/profs',(req,res)=>{
        
        conexao()
        professores.find()
        .then((professores)=>{
            res.render('professores.ejs',{dados:professores})   
        })
        
    })

    //cria a rota para a gravação dos dados do formulário professore.ejs
    app.post('/profs',(req,res)=>{
        var documento = new professores({
            nome:req.body.nome,
            disciplina:req.body.disciplina,
            emal:req.body.email
        }).save()
        .then((result)=>{
            res.redirect('/profs')
        })
        .catch((err)=>{
            console.log("Não foi possível gravar os dados no banco de dados")
        })
    })

}