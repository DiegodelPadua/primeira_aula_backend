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
                                capa,
                                id_classificacao
                                )
                        values ('${filme.nome}',
                                '${filme.data_lancamento}',
                                '${filme.duracao}',
                                '${filme.sinopse}',
                                if('${filme.avaliacao}' = '', null, '${filme.avaliacao}'),
                                '${filme.valor}',
                                '${filme.capa}',
                                '${filme.id_classificacao}'
                                )
                                `
                                // console.log(sql)


            //Executa o ScriptSQL no banco de dados
            let result =  await knexConex.raw(sql)
            // console.log(result)
            if(result)
                return result[0].insertId
            else
                return false
                

        
        }catch (error) {

            

        return false
        
    }
}

//Atualiza um filme existente na tabela
const updateFilme = async function(filme) {

    try{
            //Script para atualizar os dados BD
        let sql = `update tbl_filme set 
                        nome =              '${filme.nome}',
                        data_lancamento =   '${filme.data_lancamento}',
                        duracao =           '${filme.duracao}',
                        sinopse =           '${filme.sinopse}',
                        avaliacao =         if('${filme.avaliacao}' = '', null, '${filme.avaliacao}'),
                        valor =             '${filme.valor}',
                        capa =              '${filme.capa}',
                        id_classificacao =   ${filme.id_classificacao}
                    where id =               ${filme.id};`


        //Executa o script SQL no BD
        let result = await knexConex.raw(sql)

        if(result)
            return true
        else
            return false
    }catch (error){
        console.log('ERRO NO DAO updateFilme:', error)
        return false
    }

    
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
//Função responsável por excluir um filme no banco de dados
const deleteFilme = async function(id) {

    try {

        //Criamos o comando SQL de exclusão.
        //Ele remove da tabela tbl_filme o registro que tiver o ID informado.
        let sql = `delete from tbl_filme where id = ${id};`

        //Executa o script SQL no BD
        let result = await knexConex.raw(sql)

        //Se o banco executar o comando, retornamos true para o controller.
        if(result)
            return true
        else
            return false

    } catch (erro) {

        //Mostra o erro real no terminal caso o DELETE falhe.
        console.log('ERRO NO DAO deleteFilme:', erro)

        //Retorna false para o controller saber que houve erro.
        return false
    }
}








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

            //Retorna true caso funcione
         if(result)
            return result[0].insertId
        else
            return false

    } catch(error){

        //Mostra o erro no terminal
        console.log('ERRO NO DAO insertAtor:', error)

        //Retorna false caso aconteça erro
        return false
    }
}



//*********************************************************************************
//Função responsável por inserir um diretor no banco de dados
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
        console.log('ERRO NO DAO insertDiretor:', error)
        return false
    }
}


//*********************************************************************************
//Função responsável por inserir uma nacionalidade no banco de dados
//*********************************************************************************
const insertNacionalidade = async function(nacionalidade){

    try {

        //Script SQL para inserir uma nacionalidade
        let sql = `insert into tbl_nacionalidade (
                        nome,
                        sigla
                    ) values (
                        '${nacionalidade.nome}',
                        '${nacionalidade.sigla}'
                    );`

        //Executa o script SQL no banco de dados
        let result = await knexConex.raw(sql)

        //Valida se houve retorno do banco
        if(result)
            return true
        else
            return false

    } catch(error){

        //Mostra o erro no terminal
        console.log('ERRO NO DAO insertNacionalidade:', error)

        //Retorna false em caso de erro
        return false
    }
}

//*********************************************************************************
//Função responsável por inserir uma atividade no banco de dados
//*********************************************************************************
const insertAtividade = async function(atividade){

    try {

        //Script SQL para inserir uma atividade
        let sql = `insert into tbl_atividade (
                        nome
                    ) values (
                        '${atividade.nome}'
                    );`

        //Executa o script SQL no banco de dados
        let result = await knexConex.raw(sql)

        //Valida se houve retorno do banco
        if(result)
            return true
        else
            return false

    } catch(error){

        //Mostra o erro no terminal
        console.log('ERRO NO DAO insertAtividade:', error)

        //Retorna false em caso de erro
        return false
    }
}

const insertAtorNacionalidade = async function(relacao){

    try {

        let sql = `insert into tbl_ator_nacionalidade (
                        id_ator,
                        id_nacionalidade
                    ) values (
                        ${relacao.id_ator},
                        ${relacao.id_nacionalidade}
                    );`

        let result = await knexConex.raw(sql)

        if(result)
            return true
        else
            return false

    } catch(error){
        console.log('ERRO NO DAO insertAtorNacionalidade:', error)
        return false
    }
}

const insertAtorAtividade = async function(relacao){

    try {

        let sql = `insert into tbl_ator_atividade (
                        id_ator,
                        id_atividade
                    ) values (
                        ${relacao.id_ator},
                        ${relacao.id_atividade}
                    );`

        let result = await knexConex.raw(sql)

        if(result)
            return true
        else
            return false

    } catch(error){
        console.log('ERRO NO DAO insertAtorAtividade:', error)
        return false
    }
}

const insertDiretorNacionalidade = async function(relacao){

    try {

        let sql = `insert into tbl_diretor_nacionalidade (
                        id_diretor,
                        id_nacionalidade
                    ) values (
                        ${relacao.id_diretor},
                        ${relacao.id_nacionalidade}
                    );`

        let result = await knexConex.raw(sql)

        if(result)
            return true
        else
            return false

    } catch(error){
        console.log('ERRO NO DAO insertDiretorNacionalidade:', error)
        return false
    }
}

const insertDiretorAtividade = async function(relacao){

    try {

        let sql = `insert into tbl_diretor_atividade (
                        id_diretor,
                        id_atividade
                    ) values (
                        ${relacao.id_diretor},
                        ${relacao.id_atividade}
                    );`

        let result = await knexConex.raw(sql)

        if(result)
            return true
        else
            return false

    } catch(error){
        console.log('ERRO NO DAO insertDiretorAtividade:', error)
        return false
    }
}

module.exports = {
    insertFilme,
    updateFilme,
    selectAllFilme,
    selectByIdFilme,
    deleteFilme,

    insertAtor,
    insertDiretor,
    insertNacionalidade,
    insertAtividade,
    insertAtorNacionalidade,
    insertAtorAtividade,
    insertDiretorNacionalidade,
    insertDiretorAtividade
} 