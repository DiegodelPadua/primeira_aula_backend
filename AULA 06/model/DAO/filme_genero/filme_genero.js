/*****************************************************************************
 * Objetivo: Arquivo responsável pelo CRUD de relação filme e genero no Banco de Dados
 * Data: 22/05/2026
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
const insertFilmeGenero = async function(filmeGenero){

    try {

        let sql = `insert into tbl_filme_genero (
                    id_filme,
                    id_genero
                    )   
                    values (
                            '${filmeGenero.id_filme}',
                            '${filmeGenero.id_genero}'
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
const selectAllFilmeGenero = async function(){

    try {

        let sql = `select * from tbl_filme_genero order by id desc`

        let result = await knexConex.raw(sql)

        if(Array.isArray(result))
            return result[0]
        else
            return false

    } catch(error){

        console.log('ERRO DAO selectAllfilme_enero:', error)
        return false
    }
}


//*********************************************************************************
//Função responsável por buscar gênero pelo ID
//*********************************************************************************
const selectByIdFilmeGenero = async function(id){

    try {

        let sql = `select * from tbl_filme_genero where id = ${id}`

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

//Função para retornar os dados dos generos filtrando pelo ID do Genero
const selectFilmesByIdGenero = async function(idGenero){

    try {

        let sql = `select tbl_filme.*
                    from tbl_filme
                        inner join tbl_filme_genero 
                            on tbl_filme.id = tbl_filme_genero.id_filme
                        inner join tbl_genero
                            on tbl_genero.id = tbl_filme_genero.id_genero
                   where tbl_genero.id = ${idGenero}`

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
//Função para retornar os dados dos generos filtrando pelo ID do Filme
const selectGenerosByIdFilme = async function(idFilme){

    try {

        let sql = `select tbl_genero.*
                    from tbl_filme
                        inner join tbl_filme_genero 
                            on tbl_filme.id = tbl_filme_genero.id_filme
                        inner join tbl_genero
                            on tbl_genero.id = tbl_filme_genero.id_genero
                   where tbl_filme.id = ${idFilme}`

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
const updateFilmeGenero = async function(genero){

    try {

        let sql = `update tbl_filme_genero set
                        id_filme = ${filmeGenero.ide_filme},
                        id_filme = ${filmeGenero.ide_genero}

                   where id = ${filmeGenero.id};`

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
const deleteFilmeGenero = async function(idFilme){

    try {

        let sql = `delete from tbl_filme_genero where id_filme = ${idFilme};`

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

//*********************************************************************************
//Função responsável por excluir gênero filtrando pelo ID do filme
//Essa função será utilizada no Update do filme, pois precisa apagar
//todos os generos relacionados com o filme para inserir as novas relações
//*********************************************************************************
const deleteGenerosByIdFilme = async function(idFilme){

    try {

        let sql = `delete from tbl_filme_genero where id_filme=${idFilme};`

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
    insertFilmeGenero,
    selectAllFilmeGenero,
    selectByIdFilmeGenero,
    updateFilmeGenero,
    deleteFilmeGenero,
    selectFilmesByIdGenero,
    selectGenerosByIdFilme,
    deleteGenerosByIdFilme 

}