/*****************************************************************************
 * Objetivo: Arquivo responsável pelo CRUD de Ator no Banco de Dados
 * Data: 20/05/2026
 * Autor: Diego de Pádua
 * Versão: 1.0
 *****************************************************************************/

//Import da biblioteca knex
const knex = require('knex')

//Import do arquivo de configuração do banco
const knexConfig = require('../../database_config_knex/knexFile.js')

//Criando conexão com banco
const knexConex = knex(knexConfig.development)


//*********************************************************************************
//Função responsável por inserir um ator no banco de dados
//*********************************************************************************
const insertAtor = async function(ator){

    try {

        //Script SQL para inserir um ator
        let sql = `insert into tbl_ator (
                        nome,
                        data_nascimento
                    
                    ) values (
                        '${ator.nome}',
                        '${ator.data_nascimento}'
                    );`

        //Executa o script SQL no banco
        let result = await knexConex.raw(sql)

        //Verifica se houve retorno do banco
        if(result)

            //Retorna o ID do registro inserido
            return result[0].insertId
        else

            //Retorna false caso não insira
            return false

    } catch(error){

        //Mostra o erro no terminal
        console.log('ERRO NO DAO insertAtor:', error)

        //Retorna false caso aconteça erro
        return false
    }
}


//*********************************************************************************
//Função responsável por retornar todos os atores
//*********************************************************************************
const selectAllAtor = async function(){

    try {

        //Script SQL para retornar todos os atores
        let sql = `select * from tbl_ator order by id desc`

        //Executa o script SQL no banco
        let result = await knexConex.raw(sql)

        //Verifica se o retorno é um array
        if(Array.isArray(result))
            return result[0]
        else
            return false

    } catch(error){

        console.log('ERRO NO DAO selectAllAtor:', error)

        return false
    }
}


//*********************************************************************************
//Função responsável por buscar ator pelo ID
//*********************************************************************************
const selectByIdAtor = async function(id){

    try {

        //Script SQL para buscar ator pelo ID
        let sql = `select * from tbl_ator where id = ${id}`

        //Executa o script SQL no banco
        let result = await knexConex.raw(sql)

        //Verifica se o retorno é um array
        if(Array.isArray(result))
            return result[0]
        else
            return false

    } catch(error){

        console.log('ERRO NO DAO selectByIdAtor:', error)

        return false
    }
}


//*********************************************************************************
//Função responsável por atualizar ator
//*********************************************************************************
const updateAtor = async function(ator){

    try {

        //Script SQL para atualizar ator
        let sql = `update tbl_ator set
                        nome = '${ator.nome}',
                        data_nascimento = '${ator.data_nascimento}'
                   where id = ${ator.id};`

        //Executa o script SQL no banco
        let result = await knexConex.raw(sql)

        //Verifica se atualizou
        if(result)
            return true
        else
            return false

    } catch(error){

        console.log('ERRO NO DAO updateAtor:', error)

        return false
    }
}


//*********************************************************************************
//Função responsável por excluir ator
//*********************************************************************************
const deleteAtor = async function(id){

    try {

        //Script SQL para excluir ator
        let sql = `delete from tbl_ator where id = ${id};`

        //Executa o script SQL no banco
        let result = await knexConex.raw(sql)

        //Verifica se excluiu
        if(result)
            return true
        else
            return false

    } catch(error){

        console.log('ERRO NO DAO deleteAtor:', error)

        return false
    }
}


//Exportando funções
module.exports = {
    insertAtor,
    selectAllAtor,
    selectByIdAtor,
    updateAtor,
    deleteAtor
}