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


//Retorna dados do estados filtrando pelo UF
app.get('/v1/senai/dados/estado/:uf', function(request,response){


    let sigla = request.params.uf
    let estado = estadosCidades.getDadosEstado(sigla)

    if(estado){

        response.status(200)
        response.json(estado)
        

    }else{

        response.status(404)
        response.json({"message": "O estado informado não foi encontrado!"})
        
    }
   


})

//Retorna dados da capital de cada estado, filtrando pelo UF
app.get('/v1/senai/capital/estado/:uf', function(request, response){

    let sigla = request.params.uf
    let capital = estadosCidades.getCapitalEstado(sigla)

    if(capital){

        response.status(200) 
        response.json(capital)
        
    }else{

        response.status(404)
        response.json({"message": "A capital informada não foi encontrada!"})
        
    }

})

//Retorna dados do estado que foram capitais do brasil
app.get('/v1/senai/estados/capital/brasil', function(request, response){

    let sigla = request.params.brasil
    let capital = estadosCidades.getCapitalPais(sigla)

    if(capital){
        
        response.status(200)
        response.json(capital)

    }else{

        response.status(404)
        response.json({"message": "A capital informada não foi encontrada!"})
        
    }

})

//Retorna dados do estado filtrando por região
app.get('/v1/senai/estados/regiao/:regiao', function(request, response){

    let sigla = request.params.regiao
    let regiao = estadosCidades.getEstadosRegiao(sigla)

    if(regiao){
        response.status(200).json(regiao)
        
    }else{

        response.status(404)
        response.json({"message": "A regiao informada não foi encontrada!"})
        
    }

})

//Retonada dados da cidade filtrando pela UF
app.get('/v1/senai/cidades/estado/:uf', function(request, response){

    let sigla = request.params.uf
    let cidade = estadosCidades.getCidades(sigla)

    if(cidade){

        response.status(200) 
        response.json(cidade)
        
    }else{

        response.status(404)
        response.json({"message": "A cidade informada não foi encontrada!"})
        
    }
    
})

//Retorna a lista de estados
app.get('/v1/senai/estados', function(request, response){

    //chama a função listaDeEstados
    let estados = estadosCidades.getListaDeEstados()

    response.status(200)
    response.json(estados)
    


})

app.get('/v1/senai/help', function(request, response){

    let docAPI = {

        "API-description": "API para manipular dados de Estados e Cidades", 
        "date": "2026-04-02",
        "Development": "Diego de Pádua", "email": "diego.lemos@docente.senai.br",
        "Version": "1.0",
        "Endpoints":[
            {
                "id": 1,
                "Rota 1": "/v1/senai/estados",
                "obs": "Retorna a lista de todos os estados"
            },
            {
                "id": 2,
                "Rota 2": "/v1/senai/dados/estados/sp",
                "obs": "Retorna os dados do estado filtrando pela sigla do estado"
            },
            {
                "id": 3,
                "Rota 3": "/v1/senai/capital/estado/sp",
                "obs": "Retorna os dados da capital filtrando pela sigla do estado"
            },
            {
                "id": 4,
                "Rota 4": "/v1/senai/estados/capital/brasil",
                "obs": "Retorna todos os estados que formaram capital do Brasil"
            },
            {
                "id": 5,
                "Rota 5": "/v1/senai/estados/regiao/sul",
                "obs": "Retorna todos os estados que se referem a uma região"
            },
            {
                "id": 6,
                "Rota 6": "/v1/senai/cidades/estado/sp",
                "obs": "Retorna todas as cidades filtrando pela sigla do estado"
            }
        ]

    }

    response.status(200)
    response.json(docAPI)

})

//app.get('/cidades', function(request, response){
    //response.json({"message": "Testanto minha API Cidades"})
    //response.status(200)
//})

//Serve para inicializar a API para receber requisições
app.listen(8080, function(){
    console.log('API funcionando e aguardando novas requisições...')
})