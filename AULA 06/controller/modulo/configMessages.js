/**************************************************************************
 * Objetivo:    Arquivo responsável pela configuração e padronização
 *              das mensagens da API
 * Data:    17/04/2026
 * Autor:   Diego de Pádua
 * Versão:  1.0   
 ***************************************************************************/

//Padronização de cabeçalho para tenorto dos esnpoints da API
const DEFAULT_MESSAGE = {
    api_description:'API para gerenciar o controle de Filmes',
    development:    'Diego de Pádua Bezerra de Lemos',
    version:        '1.0.4.26',
    status:         Boolean,
    status_code:    Number,
    response:       {}
}

//Mensagens de erro da API
const ERROR_BAD_REQUEST =   {   status:     false,
                                status_code:    400,
                                message:    'Os dados enviados na requisição não estão corretos.'
                            }
const ERROR_INTERNAL_SERVER_MODEL =   { status:     false,
                                        status_code:    500,
                                        message:    'Não foi possivel processar a requisição por conta de erro na API [ERRO NA MODELAGEM DE DADOS].'
                            }
const ERROR_CONTENT_TYPE =   {  status:     false,
                                status_code:    415,
                                message:    'Formato de requisição não suportado. Utilize application/json.'
                    }
const ERROR_INTERNAL_SERVER_CONTROLLER =   {     status:     false,
                                                status_code:    500,
                                                message:    'Não foi possivel processar a requisição por conta de erro na API [ERRO NA CONTROLLER].'
            }
const ERROR_NOT_FOUND =   {     status:     false,
                                                status_code:    404,
                                                message:    'Não foi encontrado nenhum dado para retorno.'
                                            }




const SUCCESS_CREATED_ITEM_WARNING =    {status: true, status_code: 201, message: 'Os dados principais foram inseridos com sucesso, porém alguns apresentam problemas'}
//Mensagens de Sucesso da API
const SUCCESS_CREATED_ITEM =            {status: true, status_code: 201, message: 'Registro inserido com sucesso!'}
//Retornos para GET
const SUCCESS_RESPONSE     =            {status: true, status_code: 200} 
//Retornos para PUT 200
const SUCCESS_UPDATED_ITEM =            {status: true, status_code: 200, message: 'Registro atualizado com sucesso!'}

const SUCCESS_DELETED_ITEM =            {status: true,status_code: 200,message: 'Item excluído com sucesso.'}

const SUCCESS_CREATED_CLASSIFICACAO =   {status: true,status_code: 201,message: 'Classificação inserida com sucesso!'}
module.exports = {
    DEFAULT_MESSAGE,
    ERROR_BAD_REQUEST,
    SUCCESS_CREATED_ITEM,
    ERROR_INTERNAL_SERVER_MODEL,
    ERROR_CONTENT_TYPE,
    ERROR_INTERNAL_SERVER_CONTROLLER,
    ERROR_NOT_FOUND,
    SUCCESS_RESPONSE,
    SUCCESS_UPDATED_ITEM,
    SUCCESS_DELETED_ITEM,
    SUCCESS_CREATED_CLASSIFICACAO,
    SUCCESS_CREATED_ITEM_WARNING 
}