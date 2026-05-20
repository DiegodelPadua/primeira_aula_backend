/**************************************************************************
 * Objetivo: Controller de Diretor
 * Data: 20/05/2026
 * Autor: Diego de Pádua
 * Versão: 1.0
 ***************************************************************************/

const config_message = require('../modulo/configMessages.js')
const filmeDAO = require('../../model/DAO/filme/filme.js')

const inserirNovoDiretor = async function(dados, contentType){

    let message = JSON.parse(JSON.stringify(config_message))

    try {

        if(String(contentType).toLowerCase() == 'application/json'){

            if(
                dados.nome == '' || dados.nome == undefined || dados.nome == null || dados.nome.length > 100 ||
                dados.data_nascimento == '' || dados.data_nascimento == undefined || dados.data_nascimento == null || dados.data_nascimento.length != 10
            ){
                message.ERROR_BAD_REQUEST.field = '[DIRETOR] INVÁLIDO'
                return message.ERROR_BAD_REQUEST
            }else{

                let idDiretor = await filmeDAO.insertDiretor(dados)

                if(idDiretor){
                    message.DEFAULT_MESSAGE.status = message.SUCCESS_CREATED_ITEM.status
                    message.DEFAULT_MESSAGE.status_code = message.SUCCESS_CREATED_ITEM.status_code
                    message.DEFAULT_MESSAGE.message = message.SUCCESS_CREATED_ITEM.message
                    message.DEFAULT_MESSAGE.response.diretor = {
                        id_diretor: idDiretor,
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

const listarDiretor = async function(){

    let message = JSON.parse(JSON.stringify(config_message))

    try {

        let result = await filmeDAO.selectAllDiretor()

        if(result){

            if(result.length > 0){

                message.DEFAULT_MESSAGE.status = message.SUCCESS_RESPONSE.status
                message.DEFAULT_MESSAGE.status_code = message.SUCCESS_RESPONSE.status_code
                message.DEFAULT_MESSAGE.response.count = result.length
                message.DEFAULT_MESSAGE.response.diretor = result

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

const buscarDiretor = async function(id){

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

            let result = await filmeDAO.selectByIdDiretor(id)

            if(result){

                if(result.length > 0){

                    message.DEFAULT_MESSAGE.status = message.SUCCESS_RESPONSE.status
                    message.DEFAULT_MESSAGE.status_code = message.SUCCESS_RESPONSE.status_code
                    message.DEFAULT_MESSAGE.response.diretor = result

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

const atualizarDiretor = async function(dados, id, contentType){

    let message = JSON.parse(JSON.stringify(config_message))

    try {

        if(String(contentType).toLowerCase() == 'application/json'){

            let resultBuscarID = await buscarDiretor(id)

            if(resultBuscarID.status){

                if(
                    dados.nome == '' || dados.nome == undefined || dados.nome == null || dados.nome.length > 100 ||
                    dados.data_nascimento == '' || dados.data_nascimento == undefined || dados.data_nascimento == null || dados.data_nascimento.length != 10
                ){
                    message.ERROR_BAD_REQUEST.field = '[DIRETOR] INVÁLIDO'
                    return message.ERROR_BAD_REQUEST

                }else{

                    dados.id = id

                    let result = await filmeDAO.updateDiretor(dados)

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

const excluirDiretor = async function(id){

    let message = JSON.parse(JSON.stringify(config_message))

    try {

        let resultBuscarID = await buscarDiretor(id)

        if(resultBuscarID.status){

            let result = await filmeDAO.deleteDiretor(id)

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
    inserirNovoDiretor,
    listarDiretor,
    buscarDiretor,
    atualizarDiretor,
    excluirDiretor
}