/*****************************************************************************
 * Objetivo: Arquivo responsável pelo CRUD de diretor no Banco de Dados
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
//Função responsável por inserir um diretor
//*********************************************************************************
const insertDiretor = async function(diretor){

    try {

        let sql = `insert into tbl_diretor (
                        nome,
                        data_nascimento
                    ) values (
                        '${diretor.nome}',
                        '${diretor.data_nascimento}'
                    );`

        let result = await knexConex.raw(sql)

        if(result)
            return result[0].insertId
        else
            return false

    } catch(error){

        console.log('ERRO DAO insertDiretor:', error)
        return false
    }
}


//*********************************************************************************
//Função responsável por listar todos os diretores
//*********************************************************************************
const selectAllDiretor = async function(){

    try {

        let sql = `select * from tbl_diretor order by id desc`

        let result = await knexConex.raw(sql)

        if(Array.isArray(result))
            return result[0]
        else
            return false

    } catch(error){

        console.log('ERRO DAO selectAllDiretor:', error)
        return false
    }
}


//*********************************************************************************
//Função responsável por buscar diretor pelo ID
//*********************************************************************************
const selectByIdDiretor = async function(id){

    try {

        let sql = `select * from tbl_diretor where id = ${id}`

        let result = await knexConex.raw(sql)

        if(Array.isArray(result))
            return result[0]
        else
            return false

    } catch(error){

        console.log('ERRO DAO selectByIdDiretor:', error)
        return false
    }
}


//*********************************************************************************
//Função responsável por atualizar diretor
//*********************************************************************************
const updateDiretor = async function(diretor){

    try {

        let sql = `update tbl_diretor set
                        nome = '${diretor.nome}',
                        data_nascimento = '${diretor.data_nascimento}'
                   where id = ${diretor.id};`

        let result = await knexConex.raw(sql)

        if(result)
            return true
        else
            return false

    } catch(error){

        console.log('ERRO DAO updateDiretor:', error)
        return false
    }
}


//*********************************************************************************
//Função responsável por excluir diretor
//*********************************************************************************
const deleteDiretor = async function(id){

    try {

        let sql = `delete from tbl_diretor where id = ${id};`

        let result = await knexConex.raw(sql)

        if(result)
            return true
        else
            return false

    } catch(error){

        console.log('ERRO DAO deleteDiretor:', error)
        return false
    }
}


//Exportando funções
module.exports = {
    insertDiretor,
    selectAllDiretor,
    selectByIdDiretor,
    updateDiretor,
    deleteDiretor
}