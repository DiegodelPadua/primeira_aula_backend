/*****************************************************************************
 * Objetivo: Arquivo responsável pelo CRUD de atividade no Banco de Dados
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
//Função responsável por inserir uma atividade
//*********************************************************************************
const insertAtividade = async function(atividade){

    try {

        let sql = `insert into tbl_atividade (
                        nome
                    ) values (
                        '${atividade.nome}'
                    );`

        let result = await knexConex.raw(sql)

        if(result)
            return true
        else
            return false

    } catch(error){

        console.log('ERRO DAO insertAtividade:', error)
        return false
    }
}


//*********************************************************************************
//Função responsável por listar todas as atividades
//*********************************************************************************
const selectAllAtividade = async function(){

    try {

        let sql = `select * from tbl_atividade order by id desc`

        let result = await knexConex.raw(sql)

        if(Array.isArray(result))
            return result[0]
        else
            return false

    } catch(error){

        console.log('ERRO DAO selectAllAtividade:', error)
        return false
    }
}


//*********************************************************************************
//Função responsável por buscar atividade pelo ID
//*********************************************************************************
const selectByIdAtividade = async function(id){

    try {

        let sql = `select * from tbl_atividade where id = ${id}`

        let result = await knexConex.raw(sql)

        if(Array.isArray(result))
            return result[0]
        else
            return false

    } catch(error){

        console.log('ERRO DAO selectByIdAtividade:', error)
        return false
    }
}


//*********************************************************************************
//Função responsável por atualizar atividade
//*********************************************************************************
const updateAtividade = async function(atividade){

    try {

        let sql = `update tbl_atividade set
                        nome = '${atividade.nome}'
                   where id = ${atividade.id};`

        let result = await knexConex.raw(sql)

        if(result)
            return true
        else
            return false

    } catch(error){

        console.log('ERRO DAO updateAtividade:', error)
        return false
    }
}


//*********************************************************************************
//Função responsável por excluir atividade
//*********************************************************************************
const deleteAtividade = async function(id){

    try {

        let sql = `delete from tbl_atividade where id = ${id};`

        let result = await knexConex.raw(sql)

        if(result)
            return true
        else
            return false

    } catch(error){

        console.log('ERRO DAO deleteAtividade:', error)
        return false
    }
}


//Exportando funções
module.exports = {
    insertAtividade,
    selectAllAtividade,
    selectByIdAtividade,
    updateAtividade,
    deleteAtividade
}