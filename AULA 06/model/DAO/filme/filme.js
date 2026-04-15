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
                        '${avaliacao}',
                        '${filme.valor}',
                        '${filme.capa}');`


//Executa o ScriptSQL no banco de dados
let result =  await knexConex.raw(sql)
    
}

//Atualiza um filme existente na tabela
const updateFilme = async function(filme) {
    
}

//Retorna todos os dados da tabela de filme
const selectAllFilme = async function() {   
}

//Retorna os dados do filme filtrando pelo ID
const selectByIdFilme = async function(id) {
    
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