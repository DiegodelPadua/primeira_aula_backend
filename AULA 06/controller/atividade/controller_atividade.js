/**************************************************************************
 * Objetivo: Controller de Atividade
 * Data: 20/05/2026
 * Autor: Diego de Pádua
 * Versão: 1.0
 ***************************************************************************/

const config_message = require('../modulo/configMessages.js')
const filmeDAO = require('../../model/DAO/filme/filme.js')

const inserirNovaAtividade = async function(dados, contentType){

    let message = JSON.parse(JSON.stringify(config_message))

    try {

        if(String(contentType).toLowerCase() == 'application/json'){

            if(
                dados.nome == '' || dados.nome == undefined || dados.nome == null ||
                dados.nome.length > 80
            ){
                message.ERROR_BAD_REQUEST.field = '[ATIVIDADE] INVÁLIDO'
                return message.ERROR_BAD_REQUEST

            }else{

                let result = await filmeDAO.insertAtividade(dados)

                if(result)
                    return message.SUCCESS_CREATED_ITEM
                else
                    return message.ERROR_INTERNAL_SERVER_MODEL
            }

        }else{
            return message.ERROR_CONTENT_TYPE
        }

    } catch(error){
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

const listarAtividade = async function(){

    let message = JSON.parse(JSON.stringify(config_message))

    try {

        let result = await filmeDAO.selectAllAtividade()

        if(result){

            if(result.length > 0){

                message.DEFAULT_MESSAGE.status = message.SUCCESS_RESPONSE.status
                message.DEFAULT_MESSAGE.status_code = message.SUCCESS_RESPONSE.status_code
                message.DEFAULT_MESSAGE.response.count = result.length
                message.DEFAULT_MESSAGE.response.atividade = result

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

const buscarAtividade = async function(id){

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

            let result = await filmeDAO.selectByIdAtividade(id)

            if(result){

                if(result.length > 0){

                    message.DEFAULT_MESSAGE.status = message.SUCCESS_RESPONSE.status
                    message.DEFAULT_MESSAGE.status_code = message.SUCCESS_RESPONSE.status_code
                    message.DEFAULT_MESSAGE.response.atividade = result

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

const atualizarAtividade = async function(dados, id, contentType){

    let message = JSON.parse(JSON.stringify(config_message))

    try {

        if(String(contentType).toLowerCase() == 'application/json'){

            let resultBuscarID = await buscarAtividade(id)

            if(resultBuscarID.status){

                if(
                    dados.nome == '' ||
                    dados.nome == undefined ||
                    dados.nome == null ||
                    dados.nome.length > 80
                ){
                    message.ERROR_BAD_REQUEST.field = '[ATIVIDADE] INVÁLIDO'
                    return message.ERROR_BAD_REQUEST

                }else{

                    dados.id = id

                    let result = await filmeDAO.updateAtividade(dados)

                    if(result)
                        return message.SUCCESS_UPDATED_ITEM
                    else
                        return message.ERROR_INTERNAL_SERVER_MODEL
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

const excluirAtividade = async function(id){

    let message = JSON.parse(JSON.stringify(config_message))

    try {

        let resultBuscarID = await buscarAtividade(id)

        if(resultBuscarID.status){

            let result = await filmeDAO.deleteAtividade(id)

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
    inserirNovaAtividade,
    listarAtividade,
    buscarAtividade,
    atualizarAtividade,
    excluirAtividade
}