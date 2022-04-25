//criar api de filmes
require('dotenv').config();
const express = require('express'); // importando o express
const api = express(); // cria um servidor
const mongoose = require('mongoose'); //Puxando o mongoose 
const { listarFilmes, adicionarFilmes, removerFilmes } = require('./routes/routes');
const porta = process.env.PORTA_API; //Puxando a porta do .env
const enderecoBanco = process.env.URL_BD; //Puxando a url do .env


api.listen(porta, function () {
    console.log('API rodando na porta: ' + porta);
});

mongoose.connect(enderecoBanco);
mongoose.connection.on('connected', function () {
    console.log('Deu bom, entrei no banco')
});


// GET -> pedir informação
// POST -> enviar informação (criar/cadastrar)
// PUT -> enviar informação (editar)
// DELETE -> deletar informação

api.get('/filmes', listarFilmes);
api.post('/filmes:add', adicionarFilmes);
api.delete('/filmes:del', removerFilmes);