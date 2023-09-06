/*Aqui ficarar responsavel por fazer nossa conecao com o banco*/
const mongoose = require('mongoose');// mongoose trabalhar com js no mongo db. fazer a conexao

mongoose.connect('mongodb://127.0.0.1:27017/netflix', {  // conexao com o banco
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro de conexão ao MongoDB:'));
db.once('open', () => {
    console.log('Conexão bemm-sucedida ao MongoDB!');
});
