const express = require('express');
const router = express.Router();
const Filme = require('./models/filme');


// CRIANDO AS ROTAS.
// PEGAR TODOS OS REGISTROS
router.get('/', (req, res) => {
    res.json({ mensagem: 'Rota Funcionando' });
});

// PEGAR SOMENTE O REGISTRO COM O ID
router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.json({ mensagem: `PEGAR SOMENTE O REGISTRO COM O ID: ${id}` });
});

// CRIAR REGISTRO.
router.post('/', async (req, res) => { //
    try {
        const filme = req.body;
        const response = await new Filme(filme).save();
        res.json({ error: false, filme: response });
    } catch (e) {
        res.json({ error: true, message: e.message });
    }
});

// ATUALIZAR SOMENTE O REGISTRO COM O ID
router.put('/:id', (req, res) => {
    const id = req.params.id;
    res.json({ mensagem: `ATUALIZAR SOMENTE O REGISTRO COM O ID: ${id}` });
});


// DELETE SOMENTE O REGISTRO COM O ID
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.json({ mensagem: `DELETAR SOMENTE O REGISTRO COM O ID: ${id}` });
});

module.exports = router;