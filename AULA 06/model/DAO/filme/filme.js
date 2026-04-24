/*****************************************************************************
 * Objetivo: Arquivo responsável pelo CRUD no Banco de Dados MySQL na tabela
 *           Filme
 * Data: 15/04/2026
 * Autor: Marcel
 * Versão: 1.0
 * instalado o cors e o express
 * Knex é uma biblioteca uma "dependencia do node" para trabalhar com banco de dados
 * podemos usar outras bibliotecas: sequelize, prisma
 *****************************************************************************/

//Import da biblioteca para gerenciar o banco de dados Mysql no node.JS
const knex = require('knex')

//Import do arquivo de configuração para conexão com o BD Mysql
const knexConfig = require('../../database_config_knex/knexFile.js')

//Criar a conexão com o BD MySQL
const knexConex = knex(knexConfig.development)


//Inserir dados na tabela de filme
const insertFilme = async function (filme) {

    try {


            let sql = `insert into tbl_filme (
                                nome,
                                data_lancamento,
                                duracao,
                                sinopse,
                                avaliacao,
                                valor,
                                capa
                                )
                        values ('${filme.nome}',
                                '${filme.data_lancamento}',
                                '${filme.duracao}',
                                '${filme.sinopse}',
                                if('${filme.avaliacao}' = '', null, '${filme.avaliacao}'),
                                '${filme.valor}',
                                '${filme.capa}');`
                                //console.log(sql)


            //Executa o ScriptSQL no banco de dados
            let result =  await knexConex.raw(sql)

            if(result)
                return true
            else
                return false
                

        
        }catch (error) {

        return false
        
    }
}

//Atualiza um filme existente na tabela
const updateFilme = async function(filme) {
    
}

//Retorna todos os dados da tabela de filme
const selectAllFilme = async function() { 
    
    try{
    //Script para retornar todos os filmes
        let sql = `select * from tbl_filme order by id desc`

        //Executa no banco de dados do script SQL para retornar os filmes
        let result = await knexConex.raw(sql)

        //Validação para verificar se o retorno do BD é um Array
        //Se o scriptSQL der erro, o banco não devolve um array
        if(Array.isArray(result)){

            return result[0]
            
        }else{

            return false
        }

    }catch (error){

        return false
    }
}

//Retorna os dados do filme filtrando pelo ID
const selectByIdFilme = async function(id) {

    try {
        let sql = `select * from tbl_filme where id = ${id}`

        let result = await knexConex.raw(sql)

        if(Array.isArray(result)){
            return result[0]
        }else{
            return false
        }
        
    } catch (error) {

        return false
        
    }
    
}

//Exclui um filme pelo ID
const deleteFilme = async function (id){
    
}

module.exports = {
    insertFilme,
    updateFilme,
    selectAllFilme,
    selectByIdFilme,
    deleteFilme
} 