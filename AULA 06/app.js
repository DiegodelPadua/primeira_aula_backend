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

app.get('/v1/senai/locadora/filme', async function (request, response) {

    let result = await controllerFilme.listarFilme()


    response.status(result.status_code)
    // console.log(result)
    response.json(result)
    
})

//todo identificador de registro chega via parâmetro
//sempre que for localizar via PK (chave primária)
//Quando for usar filtro é via CARRY
app.get('/v1/senai/locadora/filme/:id', async function (request, response) {

    //Recebe o ID via parâmetro
    let id = request.params.id

    let result = await controllerFilme.buscarFilme(id)

    // console.log('RESULTADO DO CONTROLLER:', result)

    response.status(result.status_code)
    response.json(result)
    
})

app.put('/v1/senai/locadora/filme/:id', bodyParserJSON, async function(request,response){
    //Recebe o contenty type da requisição
    let contentType = request.headers['content-type']
    //Recebe o ID do registro a ser atualizado
    let id = request.params.id
    //Recebe os dados enviados no corpo da requisição
    let dados = request.body

    //Chama a função de atualizar na controller e encaminha os dados, 
    //id e content-type obedecendo a ordem de criação da controller
    let result = await controllerFilme.atualizarFilme(dados, id, contentType)

    response.status(result.status_code)
    response.json(result)
})

app.delete('/v1/senai/locadora/filme/:id', async function(request, response){

    let id = request.params.id

    let dados = await controllerFilme.excluirFilme(id)

    response.status(dados.status_code)
    response.json(dados)
})

app.post('/v1/senai/locadora/classificacao', bodyParserJSON, async function(request, response){

    let dados = request.body

    let contentType = request.headers['content-type']

    let result = await controllerFilme.inserirNovaClassificacao(dados, contentType)

    response.status(result.status_code)
    response.json(result)
})

app.post('/v1/senai/locadora/ator/nacionalidade', bodyParserJSON, async function(request, response){

    let dados = request.body
    let contentType = request.headers['content-type']

    let result = await controllerFilme.inserirAtorNacionalidade(dados, contentType)

    response.status(result.status_code)
    response.json(result)
})

app.post('/v1/senai/locadora/atividade', bodyParserJSON, async function(request, response){

    let dados = request.body

    let contentType = request.headers['content-type']

    let result = await controllerFilme.inserirNovaAtividade(dados, contentType)

    response.status(result.status_code)
    response.json(result)
})

app.post('/v1/senai/locadora/genero', bodyParserJSON, async function(request, response){

    let dados = request.body

    let contentType = request.headers['content-type']

    let result = await controllerFilme.inserirNovoGenero(dados, contentType)

    response.status(result.status_code)
    response.json(result)
})

app.post('/v1/senai/locadora/ator', bodyParserJSON, async function(request, response){

    let dados = request.body
    let contentType = request.headers['content-type']

    let result = await controllerFilme.inserirNovoAtor(dados, contentType)

    response.status(result.status_code)
    response.json(result)
})

app.post('/v1/senai/locadora/ator/atividade', bodyParserJSON, async function(request, response){

    let dados = request.body
    let contentType = request.headers['content-type']

    let result = await controllerFilme.inserirAtorAtividade(dados, contentType)

    response.status(result.status_code)
    response.json(result)
})

app.post('/v1/senai/locadora/diretor', bodyParserJSON, async function(request, response){

    let dados = request.body
    let contentType = request.headers['content-type']

    let result = await controllerFilme.inserirNovoDiretor(dados, contentType)

    response.status(result.status_code)
    response.json(result)
})

app.post('/v1/senai/locadora/diretor/nacionalidade', bodyParserJSON, async function(request, response){

    let dados = request.body
    let contentType = request.headers['content-type']

    let result = await controllerFilme.inserirDiretorNacionalidade(dados, contentType)

    response.status(result.status_code)
    response.json(result)
})

app.post('/v1/senai/locadora/diretor/atividade', bodyParserJSON, async function(request, response){

    let dados = request.body
    let contentType = request.headers['content-type']

    let result = await controllerFilme.inserirDiretorAtividade(dados, contentType)

    response.status(result.status_code)
    response.json(result)
})

//Serve para inicializar a API para receber requisições
app.listen(8080, function(){
    console.log('API funcionando e aguardando novas requisições...')
})


