const servidor = require('./config/servidor.js')
const app = servidor.app
const porta = servidor.porta


var form = require('./routes/form')(app)
var profs = require('./routes/profs')(app)
app.listen(porta, ()=>{
    console.log('Servidor em http://localhost:' + porta)
})