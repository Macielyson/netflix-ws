const express = require('express'); //busca todo o modulo express
const morgan = require('morgan'); // essa fatury faz
const bodyParser = require('body-parser'); //  para trablahar com o corpo da requisiçao;
const app = express(); // executa o express no app

const mongoose = require('mongoose');// mongoose trabalhar com js no mongo db. fazer a conexao
const routes = require('./src/filmes.routes');
const Filme = require('./src/models/filme');

mongoose.connect('mongodb://127.0.0.1:27017/netflix', {  // conexao com o banco
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro de conexão ao MongoDB:'));
db.once('open', () => {
    console.log('Conexão bemm-sucedida ao MongoDB!');
});


// morgan serve para registrar detalhes sobre as solicitações que o aplicativo recebe e as respostas que ele envia
app.use(bodyParser.json());// para manda o json no corpo da requisição
app.use(morgan('dev')); // apenas para ambinde de desenvolvimento

app.use('/', routes);


// INICIALIZAR O SERVIDOR
app.listen(3000, () => {
    console.log('Meu servidor esta funcionando');
})