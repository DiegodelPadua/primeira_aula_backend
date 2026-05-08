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
                        filme.id = result
                        message.DEFAULT_MESSAGE.status = message.SUCCESS_CREATED_ITEM.status
                        message.DEFAULT_MESSAGE.status_code = message.SUCCESS_CREATED_ITEM.status_code
                        message.DEFAULT_MESSAGE.message = message.SUCCESS_CREATED_ITEM.message
                        message.DEFAULT_MESSAGE.response = filme
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
const atualizarFilme = async function(filme, id, contentType) {

    //Criando um clone do objeto JSON para manipular a sua estrutura local sem 
    //modificar a estrutura original
    let message = JSON.parse(JSON.stringify(config_message))

    try {
        //Validação do Contenty tyoe oara receber apenas JSON
        if(String(contentType).toUpperCase() == 'APPLICATION/JSON'){

            //Validação para o ID incorreto
            let resultBuscarID = await buscarFilme(id)
            
            //Se a função buscar encontrar o filme o atributo status do JSON será verdadeiro
            //Isso significa que o filme existe na base, caso não retorne TRUE, então 
            //o retorno da função poderá ser 400, 404 ou até mesmo o 500
            if(resultBuscarID.status){
                let validar = await validarDados(filme)

                //Validação de campos obrigatórios para atualização (Body)
                if(!validar){

                    //Adiciono o atributo ID do filme no JSON para ser
                    //enviado ao DAO
                    filme.id = id
                    //Chama a função do DAO para atualizar o filme (dados e o id)
                    let result = await filmeDAO.updateFilme(filme)

                    if(result){
                        message.DEFAULT_MESSAGE.status = message.SUCCESS_UPDATED_ITEM.status
                        message.DEFAULT_MESSAGE.status_code = message.SUCCESS_UPDATED_ITEM.status_code
                        message.DEFAULT_MESSAGE.message = message.SUCCESS_UPDATED_ITEM.message

                        return message.DEFAULT_MESSAGE //200 (Atualizado)

                    }else{
                        return message.ERROR_INTERNAL_SERVER_MODEL //500
                    }

                }else{

                    return validar //400
                }

            }else{
                return resultBuscarID //400 ou 404 ou 500
            }

        }else{
            return message.ERROR_CONTENT_TYPE // 415

        }
        
    } catch (error) {
        console.log('ERRO NO CONTROLLER atualizarFilme:', error)
        return message.ERROR_INTERNAL_SERVER_CONTROLLER //500 (controller)
    }

    
}

//Função para retornar todos os filmes
const listarFilme = async function() {

    //Criando um clone do objeto JSON para manipular a sua estrutura local sem 
    //modificar a estrutura original
    let message = JSON.parse(JSON.stringify(config_message))

    try {
        
        //Chama a função do DAO para retornar a lista de todos os filmes
        let result = await filmeDAO.selectAllFilme()

        //Valida se o DAO conseguiu processar os dados
        if(result){

            //Validação para verificar se existe conteúdo no array
            if(result.length > 0){

                message.DEFAULT_MESSAGE. status = message.SUCCESS_RESPONSE.status
                message.DEFAULT_MESSAGE. status_code = message.SUCCESS_RESPONSE.status_code
                message.DEFAULT_MESSAGE.response.count = result.length
                message.DEFAULT_MESSAGE.response.filme = result

                return message.DEFAULT_MESSAGE //200 (Dados do Filme)

            }else{

                return message.ERROR_NOT_FOUND //404 (NOT_FOUND)
            }

        }else{
            
            return message.ERROR_INTERNAL_SERVER_MODEL //500 (model)
        }

    } catch (error) {

        return message.ERROR_INTERNAL_SERVER_CONTROLLER //500 (controller)
    }
    
}

//Função para buscar um filme pelo ID
const buscarFilme = async function(id) {

     //Criando um clone do objeto JSON para manipular a sua estrutura local sem 
    //modificar a estrutura original
    let message = JSON.parse(JSON.stringify(config_message))

    try {
        
        //Validação para garantir que o ID seja válido
        if(id == '' || id == null || id == undefined || isNaN(id)){
            message.ERROR_BAD_REQUEST.field = '[ID] INVÁLIDO'
            return message.ERROR_BAD_REQUEST //400
        }else{
            let result = await filmeDAO.selectByIdFilme(id)

            if(result){
                if(result.length > 0){
                    message.DEFAULT_MESSAGE.status = message.SUCCESS_RESPONSE.status
                    message.DEFAULT_MESSAGE.status_code = message.SUCCESS_RESPONSE.status_code
                    message.DEFAULT_MESSAGE.response.filme = result

                    return message.DEFAULT_MESSAGE //200
                }else{
                    return message.ERROR_NOT_FOUND //404
                }
            }else{
                return message.ERROR_INTERNAL_SERVER_MODEL //500
            }
        }
    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER //500 (controler)
        
    }
    
}

//Função para excluir um filme pelo ID
const excluirFilme = async function(id) {

    //Criamos uma cópia do arquivo de mensagens padrão.
    //Isso evita alterar o objeto original config_message.
    let message = JSON.parse(JSON.stringify(config_message))

    try {

        //Antes de excluir, precisamos verificar se o ID é válido
        //e se o filme realmente existe no banco de dados.
        //Para isso, reutilizamos a função buscarFilme(id).
        let resultBuscarID = await buscarFilme(id)

        //Se resultBuscarID.status for true, significa que:
        //1. O ID é válido
        //2. O filme foi encontrado no banco
        if(resultBuscarID.status){

            //Agora que sabemos que o filme existe,
            //chamamos o DAO para executar o DELETE no banco.
            let result = await filmeDAO.deleteFilme(id)

            //Se o DAO retornar true, significa que a exclusão funcionou.
            if(result){

                //Montamos a mensagem de sucesso usando o padrão do configMessages.
                message.DEFAULT_MESSAGE.status = message.SUCCESS_DELETED_ITEM.status
                message.DEFAULT_MESSAGE.status_code = message.SUCCESS_DELETED_ITEM.status_code
                message.DEFAULT_MESSAGE.message = message.SUCCESS_DELETED_ITEM.message

                //Retorna a resposta final para o app.js/Postman.
                return message.DEFAULT_MESSAGE

            }else{

                //Se o DAO retornar false, significa erro na modelagem/banco.
                return message.ERROR_INTERNAL_SERVER_MODEL //500
            }

        }else{

            //Se buscarFilme(id) retornar erro, devolvemos esse erro diretamente.
            //Pode ser:
            //400 - ID inválido
            //404 - filme não encontrado
            //500 - erro interno
            return resultBuscarID
        }

    } catch (error) {

        //Esse console ajuda a descobrir erros internos no controller.
        console.log('ERRO NO CONTROLLER excluirFilme:', error)

        //Retorna erro 500 específico do controller.
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
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

                let result = await filmeDAO.insertClassificacao(dados)

                if(result)
                    return message.SUCCESS_CREATED_CLASSIFICACAO
                else
                    return message.ERROR_INTERNAL_SERVER_MODEL
            }

        }else{
            return message.ERROR_CONTENT_TYPE
        }

    } catch(error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLER
    }
}

module.exports = {
    inserirNovoFilme,
    validarDados,
    listarFilme,
    buscarFilme,
    atualizarFilme,
    excluirFilme,
    inserirNovaClassificacao

}