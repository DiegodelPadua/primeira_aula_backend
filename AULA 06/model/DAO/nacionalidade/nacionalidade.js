/*****************************************************************************
 * Objetivo: Arquivo responsável pelo CRUD de nacionalidade no Banco de Dados
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
//Função responsável por inserir uma nacionalidade
//*********************************************************************************
const insertNacionalidade = async function(nacionalidade){

    try {

        let sql = `insert into tbl_nacionalidade (
                        nome,
                        sigla
                    ) values (
                        '${nacionalidade.nome}',
                        '${nacionalidade.sigla}'
                    );`

        let result = await knexConex.raw(sql)

        if(result)
            return true
        else
            return false

    } catch(error){

        console.log('ERRO DAO insertNacionalidade:', error)
        return false
    }
}


//*********************************************************************************
//Função responsável por listar todas as nacionalidades
//*********************************************************************************
const selectAllNacionalidade = async function(){

    try {

        let sql = `select * from tbl_nacionalidade order by id desc`

        let result = await knexConex.raw(sql)

        if(Array.isArray(result))
            return result[0]
        else
            return false

    } catch(error){

        console.log('ERRO DAO selectAllNacionalidade:', error)
        return false
    }
}


//*********************************************************************************
//Função responsável por buscar nacionalidade pelo ID
//*********************************************************************************
const selectByIdNacionalidade = async function(id){

    try {

        let sql = `select * from tbl_nacionalidade where id = ${id}`

        let result = await knexConex.raw(sql)

        if(Array.isArray(result))
            return result[0]
        else
            return false

    } catch(error){

        console.log('ERRO DAO selectByIdNacionalidade:', error)
        return false
    }
}


//*********************************************************************************
//Função responsável por atualizar nacionalidade
//*********************************************************************************
const updateNacionalidade = async function(nacionalidade){

    try {

        let sql = `update tbl_nacionalidade set
                        nome = '${nacionalidade.nome}',
                        sigla = '${nacionalidade.sigla}'
                   where id = ${nacionalidade.id};`

        let result = await knexConex.raw(sql)

        if(result)
            return true
        else
            return false

    } catch(error){

        console.log('ERRO DAO updateNacionalidade:', error)
        return false
    }
}


//*********************************************************************************
//Função responsável por excluir nacionalidade
//*********************************************************************************
const deleteNacionalidade = async function(id){

    try {

        let sql = `delete from tbl_nacionalidade where id = ${id};`

        let result = await knexConex.raw(sql)

        if(result)
            return true
        else
            return false

    } catch(error){

        console.log('ERRO DAO deleteNacionalidade:', error)
        return false
    }
}


//Exportando funções
module.exports = {
    insertNacionalidade,
    selectAllNacionalidade,
    selectByIdNacionalidade,
    updateNacionalidade,
    deleteNacionalidade
}