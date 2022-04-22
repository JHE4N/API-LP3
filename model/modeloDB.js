//Modelo para a base de dados
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const listaFilmes = new Schema({//Criando um schema para a base de dados
    nome: {type: String, required: true, unique: true}, //nome do filme
    informacoes: {type: String, required: true}, //ano de lamçamento, genero, duracao
    download: {type: String, required: true},  //link para download se tiver
    created: {type: Date, default: Date.now}
});
module.exports = mongoose.model('Filmes', listaFilmes); // exportando o model