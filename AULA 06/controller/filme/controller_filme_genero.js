
/*****************************************************************************
 * Objetivo: Arquivo responsável pelo CRUD do filme_genero no Banco de Dados
 * Data: 22/05/2026
 * Autor: Diego de Pádua
 * Versão: 1.0
 *****************************************************************************/

const config_message = require('../modulo/configMessages.js')

const filmeGeneroDAO = require('../../model/DAO/filme_genero/filme_genero.js')



const inserirNovoFilmeGenero = async function(filmeGenero, contentType){

    let message = JSON.parse(JSON.stringify(config_message))

    try {

        

            if(
                filmeGenero.id_filme == '' || 
                filmeGenero.id_filme == undefined || 
                filmeGenero.id_filme == null ||
                filmeGenero.id_filme <= 0
            ){
                message.ERROR_BAD_REQUEST.field = '[id_filme] INVÁLIDO'
                return message.ERROR_BAD_REQUEST

            }else if(filmeGenero.id_genero == undefined || String(filmeGenero.id_genero).replaceAll(' ', '') == '' || filmeGenero.id_genero == null 
                    || isNaN(filmeGenero.id_genero) || filmeGenero.id_genero <= 0){
                        messageJSON.ERROR_BAD_REQUEST.field = '[ID_GENERO] INVÁLIDO'
                        return messageJSON.ERROR_BAD_REQUEST
            }
            else{

                let result = await filmeGeneroDAO.insertFilmeGenero(filmeGenero)

                if(result)
                    return message.SUCCESS_CREATED_ITEM
                else
                    return message.ERROR_INTERNAL_SERVER_MODEL
            }


    } catch(error){
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

const listarFilmeGenero = async function(){

    let message = JSON.parse(JSON.stringify(config_message))

    try {

        let result = await filmeGeneroDAO.selectAllFilmeGenero()

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

const buscarFilmeGenero = async function(id){

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

            let result = await filmeGeneroDAO.selectByIdFilmeGenero(id)
            console.log(result)

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
        console.log(error)
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

const buscarFilmeIdGenero = async function(idGenero){

    let message = JSON.parse(JSON.stringify(config_message))

    try {

        if(
            idGenero == '' ||
            idGenero == undefined ||
            idGenero == null ||
            isNaN(idGenero) ||
            idGenero <= 0
        ){
            message.ERROR_BAD_REQUEST.field = '[ID_GENERO] INVÁLIDO'
            return message.ERROR_BAD_REQUEST

        }else{

            let result = await filmeGeneroDAO.selectFilmesByIdGenero(idGenero)

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

const buscarGeneroIdFilme = async function(idFilme){

    let message = JSON.parse(JSON.stringify(config_message))

    try {

        if(
            idFilme == '' ||
            idFilme == undefined ||
            idFilme == null ||
            isNaN(idFilme) ||
            idFilme <= 0
        ){
            message.ERROR_BAD_REQUEST.field = '[ID_GENERO] INVÁLIDO'
            return message.ERROR_BAD_REQUEST

        }else{

            let result = await filmeGeneroDAO.selectGenerosByIdFilme(idFilme)

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

const atualizarFilmeGenero = async function(filmeGenero, id, contentType){

    let message = JSON.parse(JSON.stringify(config_message))

    try {



            let resultBuscarID = await buscarFilmeGenero(id)

            if(resultBuscarID.status){

                if(
                    filmeGenero.nome == '' ||
                    filmeGenero.nome == undefined ||
                    filmeGenero.nome == null ||
                    filmeGenero.nome.length > 80
                ){
                    message.ERROR_BAD_REQUEST.field = '[GENERO] INVÁLIDO'
                    return message.ERROR_BAD_REQUEST

                }else{

                    filmeGenero.id = id

                    let result = await filmeGeneroDAO.updateFilmeGenero(filmeGenero)

                    if(result)
                        return message.SUCCESS_UPDATED_ITEM
                    else
                        return message.ERROR_INTERNAL_SERVER_MODEL
                }

            }else{
                return resultBuscarID
            }


    } catch(error){
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

const excluirFilmeGenero = async function(id){

    let message = JSON.parse(JSON.stringify(config_message))

    try {

        let resultBuscarID = await buscarFilmeGenero(id)

        if(resultBuscarID.status){

            let result = await filmeGeneroDAO.deleteFilmeGenero(id)

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

//Função para excluir os generos relacionados com o filme
const excluirGenerosIdFilmes = async function(idFilme){

    let message = JSON.parse(JSON.stringify(config_message))

    try {


            let result = await filmeGeneroDAO.deleteFilmeGenero(idFilme)

            if(result){
                return message.SUCCESS_DELETED_ITEM
            }else{
                return message.ERROR_INTERNAL_SERVER_MODEL
            }

    } catch(error){
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

module.exports = {
    inserirNovoFilmeGenero,
    listarFilmeGenero,
    buscarFilmeGenero,
    atualizarFilmeGenero,
    excluirFilmeGenero,
    buscarFilmeIdGenero,
    buscarGeneroIdFilme,
    excluirGenerosIdFilmes
}