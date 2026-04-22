/********************************************************************************************
 * * Objetivo: 
 * Data: 17/04/2026
 * Autor: Diego de Pádua
 * Versão: 1.0
 * 
 * Instalação do EXPRESS - npm install express --save
 *     Dependencia resposável pela utilização do protocolo HTTP para criar uma API
 * 
 * 
 * instalação do CORS    - npm install cors --save
 *     Dependência responsável pelas configurações a serem realizadas para a permissão de acesso da API
 *************************************************************************************/


//Import das dependências para criar a API
const express = require('express')
const cors = require('cors')
const bodyParser =require('body-parser')

//Import das CONTROLLERS do projeto
const controllerFilme = require('./controller/filme/controller_filme.js')

//Criando um objeto para manipular dados do body da API em formato JSON
const bodyParserJSON = bodyParser.json()

//Criando um objeto para manipular o express
const app = express()

//Conjunto de permissões a serem aplicadas do CORS da API
const corsOptions = {
    origin:['*'], //A origem da requisição 'IP´s" ou *(todos)
    methods: 'GET, POST, PUT DELETE, OPTIONS',//São os verbos que serão liberados na API (GET, POST, PUT e DELETE) "protocolo HTTPS"
    allowedHeaders: ['Content-type', 'Autorization'], // São permissões de cabeçalho do CORS 
}

//Configura as permissões da API através do CORS
app.use(cors(corsOptions))


//ENDPOINTS
app.post('/v1/senai/locadora/filme', bodyParserJSON, async function(request,response){

    //Recebe o conteúdo dentro do body da requisição
    let dados = request.body

    //Recebe o content-type da requisição para validar se é um JSON
    let contentType = request.headers['content-type']
    //É interessante fazer o tratamento do tipo de código que o banco de dados vai aceitar
    //Ex: Json, XML, Text
    //console.log(request.headers)

    let result = await controllerFilme.inserirNovoFilme(dados, contentType)

    response.status(result.status_code)


    response.json(result)

})



//Serve para inicializar a API para receber requisições
app.listen(8080, function(){
    console.log('API funcionando e aguardando novas requisições...')
})