//criar api de filmes
const { config } = require('dotenv');
require('dotenv').config();
const express = require('express'); // importando o express
const api = express(); // cria um servidor
const mongoose = require('mongoose'); //Puxando o mongoose 
const porta = process.env.PORTA_API; //Puxando a porta do .env
const enderecoBanco = process.env.URL_BD; //Puxando a url do .env

/*mongoose.connect(enderecoBanco);
mongoose.connection.on('connected', function() {
    console.log('Deu bom, entrei no banco')
})
api.listen(porta, function () {
    console.log('API rodando na porta ' + porta);
});
*/

api.listen(3000, function () {
    console.log('API rodando na porta: ' + porta);
    console.log('Endereço do banco: ' + enderecoBanco);
});


// GET -> pedir informação
// POST -> enviar informação (criar/cadastrar)
// PUT -> enviar informação (editar)
// DELETE -> deletar informação

api.get('filmes')