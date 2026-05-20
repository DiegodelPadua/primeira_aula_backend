


const config_message = require('../modulo/configMessages.js')

const classificacaoDAO = require('../../model/DAO/classificacao/classificacao.js')

const inserirNovaClassificacao = async function(dados, contentType){

    let message = JSON.parse(JSON.stringify(config_message))

    try {

        if(String(contentType).toLowerCase() == 'application/json'){

            if(
                dados.descricao == '' || dados.descricao == undefined || dados.descricao == null ||
                dados.idade_minima == undefined || dados.idade_minima == null || isNaN(dados.idade_minima)
            ){
                message.ERROR_BAD_REQUEST.field = '[CLASSIFICACAO] INVÁLIDO'
                return message.ERROR_BAD_REQUEST
            }else{

                let result = await classificacaoDAO.insertClassificacao(dados)

                if(result)
                    return message.SUCCESS_CREATED_CLASSIFICACAO
                else
                    return message.ERROR_INTERNAL_SERVER_MODEL
            }

        }else{
            return message.ERROR_CONTENT_TYPE
        }

    } catch(error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

const listarClassificacao = async function(){

    let message = JSON.parse(JSON.stringify(config_message))

    try {

        let result = await classificacaoDAO.selectAllClassificacao()

        if(result){

            if(result.length > 0){

                message.DEFAULT_MESSAGE.status = message.SUCCESS_RESPONSE.status
                message.DEFAULT_MESSAGE.status_code = message.SUCCESS_RESPONSE.status_code
                message.DEFAULT_MESSAGE.response.count = result.length
                message.DEFAULT_MESSAGE.response.classificacao = result

                return message.DEFAULT_MESSAGE
            }else{
                return message.ERROR_NOT_FOUND
            }

        }else{
            return message.ERROR_INTERNAL_SERVER_MODEL
        }

    } catch(error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

const buscarClassificacao = async function(id){

    let message = JSON.parse(JSON.stringify(config_message))

    try {

        if(id == '' || id == undefined || id == null || isNaN(id) || id <= 0){
            message.ERROR_BAD_REQUEST.field = '[ID] INVÁLIDO'
            return message.ERROR_BAD_REQUEST
        }else{

            let result = await classificacaoDAO.selectByIdClassificacao(id)

            if(result){

                if(result.length > 0){

                    message.DEFAULT_MESSAGE.status = message.SUCCESS_RESPONSE.status
                    message.DEFAULT_MESSAGE.status_code = message.SUCCESS_RESPONSE.status_code
                    message.DEFAULT_MESSAGE.response.classificacao = result

                    return message.DEFAULT_MESSAGE
                }else{
                    return message.ERROR_NOT_FOUND
                }

            }else{
                return message.ERROR_INTERNAL_SERVER_MODEL
            }
        }

    } catch(error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

const atualizarClassificacao = async function(dados, id, contentType){

    let message = JSON.parse(JSON.stringify(config_message))

    try {

        if(String(contentType).toLowerCase() == 'application/json'){

            let resultBuscarID = await buscarClassificacao(id)

            if(resultBuscarID.status){

                if(
                    dados.descricao == '' || dados.descricao == undefined || dados.descricao == null ||
                    dados.idade_minima == undefined || dados.idade_minima == null || isNaN(dados.idade_minima)
                ){
                    message.ERROR_BAD_REQUEST.field = '[CLASSIFICACAO] INVÁLIDO'
                    return message.ERROR_BAD_REQUEST
                }else{

                    dados.id = id

                    let result = await classificacaoDAO.updateClassificacao(dados)

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

    } catch(error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

const excluirClassificacao = async function(id){

    let message = JSON.parse(JSON.stringify(config_message))

    try {

        let resultBuscarID = await buscarClassificacao(id)

        if(resultBuscarID.status){

            let result = await classificacaoDAO.deleteClassificacao(id)

            if(result)
                return message.SUCCESS_DELETED_ITEM
            else
                return message.ERROR_INTERNAL_SERVER_MODEL

        }else{
            return resultBuscarID
        }

    } catch(error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

module.exports = { 
    inserirNovaClassificacao,
    listarClassificacao,
    buscarClassificacao,
    atualizarClassificacao,
    excluirClassificacao
}