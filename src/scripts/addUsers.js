const database = require('../services/database');
const Usuario = require('../models/usuario');
const usuariosJSON = require('../data/usuario.json');

const addUsers = async () => {
    try {
        for (let usuario of usuariosJSON) {
            console.log(`Inserindo ${usuario.nome}`);
            await new Usuario(usuario).save();
        }
        console.log('Final do Script')
    } catch (error) {
        console.log(error.message);
    }
};

addUsers();