/**************************************************************************
 * Objetivo: Controller de Ator
 * Data: 20/05/2026
 * Autor: Diego de Pádua
 * Versão: 1.0
 ***************************************************************************/

const config_message = require('../modulo/configMessages.js')
const atorDAO = require('../../model/DAO/ator/ator.js')

const inserirNovoAtor = async function(dados, contentType){

    let message = JSON.parse(JSON.stringify(config_message))

    try {

        if(String(contentType).toLowerCase() == 'application/json'){

            if(
                dados.nome == '' || dados.nome == undefined || dados.nome == null || dados.nome.length > 100 ||
                dados.data_nascimento == '' || dados.data_nascimento == undefined || dados.data_nascimento == null || dados.data_nascimento.length != 10
            ){
                message.ERROR_BAD_REQUEST.field = '[ATOR] INVÁLIDO'
                return message.ERROR_BAD_REQUEST
            }else{

                let idAtor = await atorDAO.insertAtor(dados)

                if(idAtor){
                    message.DEFAULT_MESSAGE.status = message.SUCCESS_CREATED_ITEM.status
                    message.DEFAULT_MESSAGE.status_code = message.SUCCESS_CREATED_ITEM.status_code
                    message.DEFAULT_MESSAGE.message = message.SUCCESS_CREATED_ITEM.message
                    message.DEFAULT_MESSAGE.response.ator = {
                        id_ator: idAtor,
                        nome: dados.nome,
                        data_nascimento: dados.data_nascimento
                    }

                    return message.DEFAULT_MESSAGE
                }else{
                    return message.ERROR_INTERNAL_SERVER_MODEL
                }
            }

        }else{
            return message.ERROR_CONTENT_TYPE
        }

    } catch(error){
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

const listarAtor = async function(){

    let message = JSON.parse(JSON.stringify(config_message))

    try {

        let result = await atorDAO.selectAllAtor()

        if(result){

            if(result.length > 0){

                message.DEFAULT_MESSAGE.status = message.SUCCESS_RESPONSE.status
                message.DEFAULT_MESSAGE.status_code = message.SUCCESS_RESPONSE.status_code
                message.DEFAULT_MESSAGE.response.count = result.length
                message.DEFAULT_MESSAGE.response.ator = result

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

const buscarAtor = async function(id){

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

        }else{

            let result = await atorDAO.selectByIdAtor(id)

            if(result){

                if(result.length > 0){

                    message.DEFAULT_MESSAGE.status = message.SUCCESS_RESPONSE.status
                    message.DEFAULT_MESSAGE.status_code = message.SUCCESS_RESPONSE.status_code
                    message.DEFAULT_MESSAGE.response.ator = result

                    return message.DEFAULT_MESSAGE

                }else{
                    return message.ERROR_NOT_FOUND
                }

            }else{
                return message.ERROR_INTERNAL_SERVER_MODEL
            }
        }

    } catch(error){
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

const atualizarAtor = async function(dados, id, contentType){

    let message = JSON.parse(JSON.stringify(config_message))

    try {

        if(String(contentType).toLowerCase() == 'application/json'){

            let resultBuscarID = await buscarAtor(id)

            if(resultBuscarID.status){

                if(
                    dados.nome == '' || dados.nome == undefined || dados.nome == null || dados.nome.length > 100 ||
                    dados.data_nascimento == '' || dados.data_nascimento == undefined || dados.data_nascimento == null || dados.data_nascimento.length != 10
                ){
                    message.ERROR_BAD_REQUEST.field = '[ATOR] INVÁLIDO'
                    return message.ERROR_BAD_REQUEST

                }else{

                    dados.id = id

                    let result = await atorDAO.updateAtor(dados)

                    if(result){
                        message.DEFAULT_MESSAGE.status = message.SUCCESS_UPDATED_ITEM.status
                        message.DEFAULT_MESSAGE.status_code = message.SUCCESS_UPDATED_ITEM.status_code
                        message.DEFAULT_MESSAGE.message = message.SUCCESS_UPDATED_ITEM.message

                        return message.DEFAULT_MESSAGE
                    }else{
                        return message.ERROR_INTERNAL_SERVER_MODEL
                    }
                }

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

const excluirAtor = async function(id){

    let message = JSON.parse(JSON.stringify(config_message))

    try {

        let resultBuscarID = await buscarAtor(id)

        if(resultBuscarID.status){

            let result = await atorDAO.deleteAtor(id)

            if(result){
                message.DEFAULT_MESSAGE.status = message.SUCCESS_DELETED_ITEM.status
                message.DEFAULT_MESSAGE.status_code = message.SUCCESS_DELETED_ITEM.status_code
                message.DEFAULT_MESSAGE.message = message.SUCCESS_DELETED_ITEM.message

                return message.DEFAULT_MESSAGE
            }else{
                return message.ERROR_INTERNAL_SERVER_MODEL
            }

        }else{
            return resultBuscarID
        }

    } catch(error){
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

module.exports = {
    inserirNovoAtor,
    listarAtor,
    buscarAtor,
    atualizarAtor,
    excluirAtor
}