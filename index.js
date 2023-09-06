const express = require('express'); //busca todo o modulo express
const morgan = require('morgan'); // essa fatury faz
const bodyParser = require('body-parser'); //  para trablahar com o corpo da requisiçao;
const database = require('./src/services/database');
const cors = require('cors');
const app = express(); // executa o express no app

const filmeRoutes = require('./src/routes/filmes.routes');
const usuarioRoutes = require('./src/routes/usuarios.routes');


//MIDDLEWARES
// morgan serve para registrar detalhes sobre as solicitações que o aplicativo recebe e as respostas que ele envia
app.use(bodyParser.json());// para manda o json no corpo da requisição
app.use(cors());
app.use(morgan('dev')); // apenas para ambinde de desenvolvimento

//ROUTES
app.use('/', filmeRoutes);
app.use('/usuario', usuarioRoutes)


// INICIALIZAR O SERVIDOR
app.listen(3000, () => {
    console.log('Meu servidor esta funcionando');
})