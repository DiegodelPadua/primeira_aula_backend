/*****************************************************************************************************
 * Objetivo: Arquivo responsável pela validação, tratamento e manipulação de dados paro CRUD de filmes
 * Data:17/04/20026
 * Autor: Diego de Pádua
 * Versão: 1.0
 *****************************************************************************************************/

//Import do arquivo de padronização de mensagens
const config_message = require('../modulo/configMessages.js')

//Import do arquivo DAO para fazer o CRUD do filme no banco de dados
const filmeDAO = require('../../model/DAO/filme/filme.js')


//Função para inserir um novo filme
const inserirNovoFilme = async function(filme, contentType) {
    //console.log(filme)

    //Criando um clone do objeto JSON para manipular a sua estrutura local sem 
    //modificar a estrutura original
    let message = JSON.parse(JSON.stringify(config_message))

    try {
        
    

                if(String(contentType).toUpperCase() == 'APPLICATION/JSON'){

                //Validação de dados para os atributos do filme (status400)
                let validar = await validarDados(filme)

                //Se a função validar retornar um Json de erro, iremos devolver ao APP o erro
                if(validar){

                    return validar

                }
                else{

                    //Encaminha os dados do filme para o DAO
                    let result = await filmeDAO.insertFilme(filme)

                    if(result){
                        message.DEFAULT_MESSAGE.status = message.SUCCESS_CREATED_ITEM.status
                        message.DEFAULT_MESSAGE.status_code = message.SUCCESS_CREATED_ITEM.status_code
                        message.DEFAULT_MESSAGE.message = message.SUCCESS_CREATED_ITEM.message

                    }else{ //500
                    return message.ERROR_INTERNAL_SERVER_MODEL //500
                    }

                    return message.DEFAULT_MESSAGE
                }
            }else{

                return message.ERROR_CONTENT_TYPE //415

            }

        } catch (error) {

            return message.ERROR_INTERNAL_SERVER_CONTROLLER //500 (controller)
            
        }
}

//Função para atualizar um filme
const atualizarFilme = async function() {
    
}

//Função para retornar todos os filmes
const listarFilme = async function() {
    
}

//Função para buscar um filme pelo ID
const buscarFilme = async function() {
    
}

//Função para excluir um filme 
const excluirFilme = async function() {
    
}

//Função para validar todos os dados de filme 
//(obrigadtórios, quantidade de caracteres)
const validarDados = async function (filme) {

    let message = JSON.parse(JSON.stringify(config_message))

    if      (filme.nome == '' || filme.nome == null || filme.nome == undefined || filme.nome.length > 80){

        message.ERROR_BAD_REQUEST.field = '[NOME] INVÁLIDO'
        return message.ERROR_BAD_REQUEST //400

    }else if(filme.data_lancamento == '' || filme.data_lancamento == null || filme.data_lancamento == undefined || filme.data_lancamento.length != 10 ){

        message.ERROR_BAD_REQUEST.field = '[DATA_LACAMENTO] INVÁLIDO'
        return message.ERROR_BAD_REQUEST //400

    }else if(filme.duracao == '' || filme.duracao == null || filme.duracao == undefined || filme.duracao.length < 5){

        message.ERROR_BAD_REQUEST.field = '[DURACAO] INVÁLIDO'
        return message.ERROR_BAD_REQUEST //400

    }else if(filme.sinopse == '' || filme.sinopse == null || filme.sinopse == undefined){

        message.ERROR_BAD_REQUEST.field = '[SINOPSE] INVÁLIDO'
        return message.ERROR_BAD_REQUEST //400

    }else if(isNaN(filme.avaliacao) || filme.avaliacao.length > 3){

        message.ERROR_BAD_REQUEST.field = '[AVALIACAO] INVÁLIDO'
        return message.ERROR_BAD_REQUEST //400

    }else if(filme.valor == '' || filme.valor == null || filme.valor == undefined || filme.valor.split('.')[0].length > 3 || isNaN(filme.valor)){

        message.ERROR_BAD_REQUEST.field = '[VALOR] INVÁLIDO'
        return message.ERROR_BAD_REQUEST //400

    }else if(filme.capa.length > 255){

        message.ERROR_BAD_REQUEST.field = '[CAPA] INVÁLIDO'
        return message.ERROR_BAD_REQUEST //400

    }else{

        return false
    }
}

module.exports = {
    inserirNovoFilme,
    validarDados

}