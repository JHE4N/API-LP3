//Aqui fica todas as rotas do sistema, as funções para cada rota(get, post, put, delete)
//Essas rotas são exportadas para o index.js
const { response } = require('express');
const Filmes = require('../model/modeloDB'); //requerindo o Filmes dentro do model, lá esta exportando o model(table)

exports.listarFilmes = function (req, res) {
    filmes.find({}, function (erro, filmes) {
        if (erro)
            return res.send({mensagem:'[ERRO]: Não foi possível listar filmes!'});
        return res.send({mensagem:'[SUCESSO]: Filmes listados com sucesso!', filmes: filmes});
    });
};
exports.adicionarFilmes = function (req, res) {
    const novoFilme = req.query;
    if(!novoFilme.nome || !novoFilme.informacoes || !novoFilme.download)
        return res.send({mensagem:'[ERRO]: Dados insuficientes para cadastrar o filme!'});
    Filmes.create(novoFilme, function (erro, filme) {
        if (erro)
            return res.send({mensagem:'[ERRO]: Não foi possível cadastrar o filme!'});
        return res.send({mensagem:'[SUCESSO]: Filme cadastrado com sucesso!'});
    });
}
