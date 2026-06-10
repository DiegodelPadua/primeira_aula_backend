const config_message = require('../modulo/configMessages.js')

const atorNacionalidadeDAO = require('../../model/DAO/ator_nacionalidade/ator_nacionalidade.js')


// Inserir
const inserirAtorNacionalidade = async function(dados, contentType){

    let message = JSON.parse(JSON.stringify(config_message))

    try {

        if(String(contentType).toLowerCase() == 'application/json'){

            if(
                dados.id_ator == '' ||
                dados.id_ator == undefined ||
                dados.id_ator == null ||
                isNaN(dados.id_ator) ||
                dados.id_ator <= 0 ||

                dados.id_nacionalidade == '' ||
                dados.id_nacionalidade == undefined ||
                dados.id_nacionalidade == null ||
                isNaN(dados.id_nacionalidade) ||
                dados.id_nacionalidade <= 0
            ){
                message.ERROR_BAD_REQUEST.field = '[ATOR_NACIONALIDADE] INVÁLIDO'
                return message.ERROR_BAD_REQUEST
            }

            let result = await atorNacionalidadeDAO.insertAtorNacionalidade(dados)

            if(result)
                return message.SUCCESS_CREATED_ITEM
            else
                return message.ERROR_INTERNAL_SERVER_MODEL

        }else{
            return message.ERROR_CONTENT_TYPE
        }

    } catch(error){
        console.log('ERRO NO CONTROLLER inserirAtorNacionalidade:', error)
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}


// Listar
const listarAtorNacionalidade = async function(){

    let message = JSON.parse(JSON.stringify(config_message))

    try {

        let result = await atorNacionalidadeDAO.selectAllAtorNacionalidade()

        if(result){

            if(result.length > 0){

                message.DEFAULT_MESSAGE.status = message.SUCCESS_RESPONSE.status
                message.DEFAULT_MESSAGE.status_code = message.SUCCESS_RESPONSE.status_code
                message.DEFAULT_MESSAGE.response.count = result.length
                message.DEFAULT_MESSAGE.response.ator_nacionalidade = result

                return message.DEFAULT_MESSAGE

            }else{
                return message.ERROR_NOT_FOUND
            }

        }else{
            return message.ERROR_INTERNAL_SERVER_MODEL
        }

    } catch(error){
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}


// Buscar por ID
const buscarAtorNacionalidade = async function(id){

    let message = JSON.parse(JSON.stringify(config_message))

    try {

        if(
            id == '' ||
            id == undefined ||
            id == null ||
            isNaN(id) ||
            id <= 0
        ){
            message.ERROR_BAD_REQUEST.field = '[ID] INVÁLIDO'
            return message.ERROR_BAD_REQUEST
        }

        let result = await atorNacionalidadeDAO.selectByIdAtorNacionalidade(id)

        if(result){

            if(result.length > 0){

                message.DEFAULT_MESSAGE.status = message.SUCCESS_RESPONSE.status
                message.DEFAULT_MESSAGE.status_code = message.SUCCESS_RESPONSE.status_code
                message.DEFAULT_MESSAGE.response.ator_nacionalidade = result

                return message.DEFAULT_MESSAGE

            }else{
                return message.ERROR_NOT_FOUND
            }

        }else{
            return message.ERROR_INTERNAL_SERVER_MODEL
        }

    } catch(error){
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}


// Atualizar
const atualizarAtorNacionalidade = async function(dados, id, contentType){

    let message = JSON.parse(JSON.stringify(config_message))

    try {

        if(String(contentType).toLowerCase() == 'application/json'){

            let resultBuscarID = await buscarAtorNacionalidade(id)

            if(resultBuscarID.status){

                if(
                    dados.id_ator == '' ||
                    dados.id_ator == undefined ||
                    dados.id_ator == null ||
                    isNaN(dados.id_ator) ||
                    dados.id_ator <= 0 ||

                    dados.id_nacionalidade == '' ||
                    dados.id_nacionalidade == undefined ||
                    dados.id_nacionalidade == null ||
                    isNaN(dados.id_nacionalidade) ||
                    dados.id_nacionalidade <= 0
                ){
                    message.ERROR_BAD_REQUEST.field = '[ATOR_NACIONALIDADE] INVÁLIDO'
                    return message.ERROR_BAD_REQUEST
                }

                dados.id = id

                let result = await atorNacionalidadeDAO.updateAtorNacionalidade(dados)

                if(result)
                    return message.SUCCESS_UPDATED_ITEM
                else
                    return message.ERROR_INTERNAL_SERVER_MODEL

            }else{
                return resultBuscarID
            }

        }else{
            return message.ERROR_CONTENT_TYPE
        }

    } catch(error){
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}


// Excluir
const excluirAtorNacionalidade = async function(id){

    let message = JSON.parse(JSON.stringify(config_message))

    try {

        let resultBuscarID = await buscarAtorNacionalidade(id)

        if(resultBuscarID.status){

            let result = await atorNacionalidadeDAO.deleteAtorNacionalidade(id)

            if(result)
                return message.SUCCESS_DELETED_ITEM
            else
                return message.ERROR_INTERNAL_SERVER_MODEL

        }else{
            return resultBuscarID
        }

    } catch(error){
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}


module.exports = {
    inserirAtorNacionalidade,
    listarAtorNacionalidade,
    buscarAtorNacionalidade,
    atualizarAtorNacionalidade,
    excluirAtorNacionalidade
}