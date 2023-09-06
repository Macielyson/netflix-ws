const express = require('express'); //busca todo o modulo express
const morgan = require('morgan'); // essa fatury faz
const bodyParser = require('body-parser'); //  para trablahar com o corpo da requisiçao;
const database = require('./src/services/database');
const app = express(); // executa o express no app

const routes = require('./src/filmes.routes');
const Filme = require('./src/models/filme');

// morgan serve para registrar detalhes sobre as solicitações que o aplicativo recebe e as respostas que ele envia
app.use(bodyParser.json());// para manda o json no corpo da requisição
app.use(morgan('dev')); // apenas para ambinde de desenvolvimento

app.use('/', routes);


// INICIALIZAR O SERVIDOR
app.listen(3000, () => {
    console.log('Meu servidor esta funcionando');
})