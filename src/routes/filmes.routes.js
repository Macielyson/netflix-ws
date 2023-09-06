const express = require('express');
const router = express.Router();
const Filme = require('../models/filme');
const _ = require('underscore');
const Temporada = require('../models/temporada');


// CRIANDO AS ROTAS.
//RECUPERAR TELA HOME

router.get('/home', async (req, res) => {
    try {

        // recuperando todos os filmes
        let filmes = await Filme.find({});
        let finalFilmes = [];

        //recuperando temporadas
        for (let filme of filmes) {
            const temporadas = await Temporada.find({
                filme_id: filme._id
            });

            const newFilme = { ...filme._doc, temporadas } //_doc apenas o documento
            finalFilmes.push(newFilme);
        }

        // misturando resultados aleatorios
        finalFilmes = _.shuffle(finalFilmes) //shuffle vai bagunçar os resultados 

        // filme principal
        const principal = finalFilmes[0];

        // separar em seçoes
        const secoes = _.chunk(finalFilmes, 5);
        res.json({ error: false, principal, secoes });
    } catch (error) {
        res.json({ error: true, message: error.message });
    }
});


// PEGAR TODOS OS REGISTROS
router.get('/', async (req, res) => {
    try {
        const filmes = await Filme.find({});// a chave é para filtrar alguns parametros
        res.json({ error: false, filmes });

    } catch (err) {
        res.json({ error: true, message: err.message });
    }
});

// PEGAR SOMENTE O REGISTRO COM O ID
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const filme = await Filme.findById(id);
        res.json({ error: false, filme });
    } catch (err) {
        res.json({ error: true, message: err.message });

    }
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
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const novo_filme = req.body;
        const filme = await Filme.findByIdAndUpdate(id, novo_filme);
        res.json({ error: false, filme });

    } catch (err) {
        res.json({ error: true, message: err.message });
    }
});


// DELETE SOMENTE O REGISTRO COM O ID
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await Filme.findByIdAndDelete(id);
        res.json({ error: false });
    } catch (err) {
        res.json({ error: true, message: err.message });

    }

});

module.exports = router;