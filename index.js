const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();


app.use(morgan('dev'));
app.use(bodyParser.json());// para manda o json no corpo da requisição


// PEGAR TODOS OS REGISTROS
app.get('/', (req, res) => {
    res.json({ mensagem: 'Rota Funcionando 1' });
});

// PEGAR SOMENTE O REGISTRO COM O ID
app.get('/:id', (req, res) => {
    const id = req.params.id;
    res.json({ mensagem: `PEGAR SOMENTE O REGISTRO COM O ID: ${id}` });
});

// CRIAR REGISTRO
app.post('/', (req, res) => {
    const body = req.body;
    res.json(body);
});

// ATUALIZAR SOMENTE O REGISTRO COM O ID
app.put('/:id', (req, res) => {
    const id = req.params.id;
    res.json({ mensagem: `ATUALIZAR SOMENTE O REGISTRO COM O ID: ${id}` });
});


// DELETE SOMENTE O REGISTRO COM O ID
app.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.json({ mensagem: `DELETAR SOMENTE O REGISTRO COM O ID: ${id}` });
});


app.listen(3000, () => {
    console.log('Meu servidor esta funcionando');
})