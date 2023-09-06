const mongoose = require('mongoose');

const Filme = mongoose.model('Filme', {
    titulo: { // essa é uma formataçao valida json
        type: String,
        required: true
    },
    tipo: String,
    capa: String,
    logo: String,
    thumb: String,
    descricao: String,
    generos: Array,
    elenco: Array,
    cenas_momento: Array
});

module.exports = Filme;