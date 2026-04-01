/***************************************************************************************************
 * Objetivo: Arquivo responsável pela criação da API do projeto de Estados e Cidades
 * Data: 01/04/2026
 * Autor: Diego de Pádua
 * Versão: 1.0
 * 
 * Instalação do EXPRESS - npm install express --save
 *     Dependencia resposável pela utilização do protocolo HTTP para criar uma API
 * 
 * 
 * instalação do CORS    - npm install cors --save
 *     Dependência responsável pelas configurações a serem realizadas para a permissão de acesso da API
 ****************************************************************************************************/


//Import das dependências para criar a API
const express = require('express')
const cors = require('cors')

//Criando um objeto para manipular o express
const app = express()

//Conjunto de permissões a serem aplicadas do CORS da API
const corsOptions = {
    origin:['*'], //A origem da requisição 'IP´s" ou *(todos)
    methods: 'GET',//São os verbos que serão liberados na API (GET, POST, PUT e DELETE) "protocolo HTTPS"
    allowedHeaders: ['Content-type', 'Autorization'], // São permissões de cabeçalho do CORS 
}

//Configura as permissões da API através do CORS
app.use(cors(corsOptions))

//Response -> Retornos da API
//Request  -> São chegadas de dados na API

//import do arquivo de funções
const estadosCidades = require('./modulo/funcao.js')

//Criando EndPoints para a API
app.get('/v1/senai/estados', function(request, response){

    let estados = estadosCidades.getListaDeEstados()

    response.json(estados)
    response.status(200)


})

app.get('/v1/senai/dados/estado/:uf', function(request,response){


    let sigla = request.params.uf
    let estado = estadosCidades.getDadosEstado(sigla)

    response.json(estado)
    response.status(200)


})

app.get('/cidades', function(request, response){
    response.json({"message": "Testanto minha API Cidades"})
    response.status(200)
})

//Serve para inicializar a API para receber requisições
app.listen(8080, function(){
    console.log('API funcionando e aguardando novas requisições...')
})