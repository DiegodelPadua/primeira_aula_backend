/*****************************************************************************
 * Objetivo: Controller responsável pela relação ator x atividade
 * Data: 27/05/2026
 * Autor: Diego de Pádua
 * Versão: 1.0
 *****************************************************************************/

//Import do arquivo de mensagens
const config_message = require('../modulo/configMessages.js')

//Import do DAO
const atorAtividadeDAO = require('../../model/DAO/ator_atividade/ator_atividade.js')


//*********************************************************************************
//Função responsável por inserir um ator na atividade
//*********************************************************************************
const inserirAtorAtividade = async function(dados, contentType){

    let message = JSON.parse(JSON.stringify(config_message))

    try {

        //Validação do content type
        if(String(contentType).toLowerCase() == 'application/json'){

            //Validação dos IDs
            if(
                dados.id_ator == '' ||
                dados.id_ator == undefined ||
                dados.id_ator == null ||
                isNaN(dados.id_ator) ||
                dados.id_ator <= 0 ||

                dados.id_atividade == '' ||
                dados.id_atividade == undefined ||
                dados.id_atividade == null ||
                isNaN(dados.id_atividade) ||
                dados.id_atividade <= 0
            ){

                message.ERROR_BAD_REQUEST.field = '[ATOR_ATIVIDADE] INVÁLIDO'
                return message.ERROR_BAD_REQUEST

            }else{

                //Chama o DAO
                let result = await atorAtividadeDAO.insertAtorAtividade(dados)

                if(result)
                    return message.SUCCESS_CREATED_ITEM
                else
                    return message.ERROR_INTERNAL_SERVER_MODEL
            }

        }else{

            return message.ERROR_CONTENT_TYPE
        }

    } catch(error){

        console.log('ERRO NO CONTROLLER inserirAtorAtividade:', error)

        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

module.exports = {
    inserirAtorAtividade
}