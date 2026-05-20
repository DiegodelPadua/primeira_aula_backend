

const config_message = require('../modulo/configMessages.js')

const generoDAO = require('../../model/DAO/genero/genero.js')



const inserirNovoGenero = async function(dados, contentType){

    let message = JSON.parse(JSON.stringify(config_message))

    try {

        if(String(contentType).toLowerCase() == 'application/json'){

            if(
                dados.nome == '' || 
                dados.nome == undefined || 
                dados.nome == null ||
                dados.nome.length > 80
            ){
                message.ERROR_BAD_REQUEST.field = '[GENERO] INVÁLIDO'
                return message.ERROR_BAD_REQUEST

            }else{

                let result = await generoDAO.insertGenero(dados)

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

const listarGenero = async function(){

    let message = JSON.parse(JSON.stringify(config_message))

    try {

        let result = await generoDAO.selectAllGenero()

        if(result){

            if(result.length > 0){

                message.DEFAULT_MESSAGE.status = message.SUCCESS_RESPONSE.status
                message.DEFAULT_MESSAGE.status_code = message.SUCCESS_RESPONSE.status_code
                message.DEFAULT_MESSAGE.response.count = result.length
                message.DEFAULT_MESSAGE.response.genero = result

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

const buscarGenero = async function(id){

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

            let result = await generoDAO.selectByIdGenero(id)

            if(result){

                if(result.length > 0){

                    message.DEFAULT_MESSAGE.status = message.SUCCESS_RESPONSE.status
                    message.DEFAULT_MESSAGE.status_code = message.SUCCESS_RESPONSE.status_code
                    message.DEFAULT_MESSAGE.response.genero = result

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

const atualizarGenero = async function(dados, id, contentType){

    let message = JSON.parse(JSON.stringify(config_message))

    try {

        if(String(contentType).toLowerCase() == 'application/json'){

            let resultBuscarID = await buscarGenero(id)

            if(resultBuscarID.status){

                if(
                    dados.nome == '' ||
                    dados.nome == undefined ||
                    dados.nome == null ||
                    dados.nome.length > 80
                ){
                    message.ERROR_BAD_REQUEST.field = '[GENERO] INVÁLIDO'
                    return message.ERROR_BAD_REQUEST

                }else{

                    dados.id = id

                    let result = await generoDAO.updateGenero(dados)

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

const excluirGenero = async function(id){

    let message = JSON.parse(JSON.stringify(config_message))

    try {

        let resultBuscarID = await buscarGenero(id)

        if(resultBuscarID.status){

            let result = await generoDAO.deleteGenero(id)

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
    inserirNovoGenero,
    listarGenero,
    buscarGenero,
    atualizarGenero,
    excluirGenero
}