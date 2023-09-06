const database = require('../services/database');
const Filme = require('../models/filme');
const Temporada = require('../models/temporada');
const Episodio = require('../models/episodio');

const addTemporadasEpisodios = async () => {
    try {
        const series = await Filme.find({ tipo: 'serie' }).select('_id');

        for (let serie of series) {
            console.log(`FILME ${serie} ------`);
            const numTemporadas = Math.floor(Math.random() * 5) + 1;
            for (let i = 1; i <= numTemporadas; i++) {
                console.log(`Inserindo temporada ${i} de ${numTemporadas}`);
                const temporada = await new Temporada({
                    filme_id: serie,
                    titulo: `Temporada ${i}`
                }).save();

                const numEpisodios = Math.floor(Math.random() * 5) + 1;
                for (let x = 1; x <= numEpisodios; x++) {
                    console.log(`Inserindo Episodios ${x} de ${numEpisodios}`);
                    await new Episodio({
                        temporada: temporada._id,
                        titulo: `Episodios ${x}`,
                        numero: x,
                        descricao: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy',
                        capa: 'https://picsum.photos/300/200'
                    }).save();
                }
            }
        }
        console.log('Final do Script')
    } catch (error) {
        console.log(error.message);
    }
};

addTemporadasEpisodios();