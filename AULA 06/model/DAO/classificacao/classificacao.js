/*****************************************************************************
 * Objetivo: Arquivo responsável pelo CRUD de classificação
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
//Função responsável por inserir classificação
//*********************************************************************************
const insertClassificacao = async function(classificacao){

    try {

        let sql = `insert into tbl_classificacao (
                        descricao,
                        idade_minima
                    ) values (
                        '${classificacao.descricao}',
                        ${classificacao.idade_minima}
                    );`

        let result = await knexConex.raw(sql)

        if(result)
            return true
        else
            return false

    } catch(error){

        console.log('ERRO DAO insertClassificacao:', error)
        return false
    }
}


//*********************************************************************************
//Função responsável por listar classificações
//*********************************************************************************
const selectAllClassificacao = async function(){

    try {

        let sql = `select * from tbl_classificacao order by id desc`

        let result = await knexConex.raw(sql)

        if(Array.isArray(result))
            return result[0]
        else
            return false

    } catch(error){

        console.log('ERRO DAO selectAllClassificacao:', error)
        return false
    }
}


//*********************************************************************************
//Função responsável por buscar classificação por ID
//*********************************************************************************
const selectByIdClassificacao = async function(id){

    try {

        let sql = `select * from tbl_classificacao where id = ${id}`

        let result = await knexConex.raw(sql)

        if(Array.isArray(result))
            return result[0]
        else
            return false

    } catch(error){

        console.log('ERRO DAO selectByIdClassificacao:', error)
        return false
    }
}


//*********************************************************************************
//Função responsável por atualizar classificação
//*********************************************************************************
const updateClassificacao = async function(classificacao){

    try {

        let sql = `update tbl_classificacao set
                        descricao = '${classificacao.descricao}',
                        idade_minima = ${classificacao.idade_minima}
                   where id = ${classificacao.id};`

        let result = await knexConex.raw(sql)

        if(result)
            return true
        else
            return false

    } catch(error){

        console.log('ERRO DAO updateClassificacao:', error)
        return false
    }
}


//*********************************************************************************
//Função responsável por excluir classificação
//*********************************************************************************
const deleteClassificacao = async function(id){

    try {

        let sql = `delete from tbl_classificacao where id = ${id};`

        let result = await knexConex.raw(sql)

        if(result)
            return true
        else
            return false

    } catch(error){

        console.log('ERRO DAO deleteClassificacao:', error)
        return false
    }
}


//Exportando funções
module.exports = {
    insertClassificacao,
    selectAllClassificacao,
    selectByIdClassificacao,
    updateClassificacao,
    deleteClassificacao
}