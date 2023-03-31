const path = require('path')
const express = require('express')

const app = express()

app.use(require('cors')())
app.use(express.json())


app.post('/send', (req, res, next) => {
    const nome = req.body.nome
    const email = req.body.email
    const contacto = req.body.contacto
    const mensagem = req.body.mensagem 
    /* const dados = {nome,email,contacto,mensagem} */

    require('./src/components/services/MailService')(email,nome,mensagem,contacto)
    .then(response => res.json(response))
    .catch(error => res.json(error))
/* 
    res.json(JSON.stringify(dados)) */
})

app.use(express.static(path.join(__dirname, 'build')))

app.listen(3030, () => {
    console.log("Servidor escutando na porta 3030")
}) 


/* 
const path = require('path')
const express = require('express');
const app = express();
 
app.use(require("cors")()); 
app.use(express.json());
 
app.get('/send', (req, res, next) => {
    res.json({message: "Tudo ok por aqui!"});
})
 
app.post('/send', (req, res, next) => { 
    res.json(req.body);
}) 
 
app.listen(3001, () => console.log("Servidor escutando na porta 3030..."));
*/