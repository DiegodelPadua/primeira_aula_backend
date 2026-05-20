/*****************************************************************************
 * Objetivo: Arquivo responsável pelo CRUD de gênero no Banco de Dados
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
//Função responsável por inserir um gênero
//*********************************************************************************
const insertGenero = async function(genero){

    try {

        let sql = `insert into tbl_genero (
                        nome
                    ) values (
                        '${genero.nome}'
                    );`

        let result = await knexConex.raw(sql)

        if(result)
            return true
        else
            return false

    } catch(error){

        console.log('ERRO DAO insertGenero:', error)
        return false
    }
}


//*********************************************************************************
//Função responsável por listar todos os gêneros
//*********************************************************************************
const selectAllGenero = async function(){

    try {

        let sql = `select * from tbl_genero order by id desc`

        let result = await knexConex.raw(sql)

        if(Array.isArray(result))
            return result[0]
        else
            return false

    } catch(error){

        console.log('ERRO DAO selectAllGenero:', error)
        return false
    }
}


//*********************************************************************************
//Função responsável por buscar gênero pelo ID
//*********************************************************************************
const selectByIdGenero = async function(id){

    try {

        let sql = `select * from tbl_genero where id = ${id}`

        let result = await knexConex.raw(sql)

        if(Array.isArray(result))
            return result[0]
        else
            return false

    } catch(error){

        console.log('ERRO DAO selectByIdGenero:', error)
        return false
    }
}


//*********************************************************************************
//Função responsável por atualizar gênero
//*********************************************************************************
const updateGenero = async function(genero){

    try {

        let sql = `update tbl_genero set
                        nome = '${genero.nome}'
                   where id = ${genero.id};`

        let result = await knexConex.raw(sql)

        if(result)
            return true
        else
            return false

    } catch(error){

        console.log('ERRO DAO updateGenero:', error)
        return false
    }
}


//*********************************************************************************
//Função responsável por excluir gênero
//*********************************************************************************
const deleteGenero = async function(id){

    try {

        let sql = `delete from tbl_genero where id = ${id};`

        let result = await knexConex.raw(sql)

        if(result)
            return true
        else
            return false

    } catch(error){

        console.log('ERRO DAO deleteGenero:', error)
        return false
    }
}


//Exportando funções
module.exports = {
    insertGenero,
    selectAllGenero,
    selectByIdGenero,
    updateGenero,
    deleteGenero
}