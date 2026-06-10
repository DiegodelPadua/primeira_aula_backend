const knexConex = require('../../../conexao/knexConexao.js')

// Inserir ator_nacionalidade
const insertAtorNacionalidade = async function(dados){

    try {

        let sql = `insert into tbl_ator_nacionalidade (
                        id_ator,
                        id_nacionalidade
                    ) values (
                        ${dados.id_ator},
                        ${dados.id_nacionalidade}
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

// Listar todos
const selectAllAtorNacionalidade = async function(){

    try {

        let sql = `select * from tbl_ator_nacionalidade;`

        let result = await knexConex.raw(sql)

        return result[0]

    } catch(error){
        console.log('ERRO NO DAO selectAllAtorNacionalidade:', error)
        return false
    }
}

// Buscar pelo ID
const selectByIdAtorNacionalidade = async function(id){

    try {

        let sql = `select * from tbl_ator_nacionalidade where id = ${id};`

        let result = await knexConex.raw(sql)

        return result[0]

    } catch(error){
        console.log('ERRO NO DAO selectByIdAtorNacionalidade:', error)
        return false
    }
}

// Atualizar
const updateAtorNacionalidade = async function(dados){

    try {

        let sql = `update tbl_ator_nacionalidade set
                        id_ator = ${dados.id_ator},
                        id_nacionalidade = ${dados.id_nacionalidade}
                   where id = ${dados.id};`

        let result = await knexConex.raw(sql)

        if(result)
            return true
        else
            return false

    } catch(error){
        console.log('ERRO NO DAO updateAtorNacionalidade:', error)
        return false
    }
}

// Deletar
const deleteAtorNacionalidade = async function(id){

    try {

        let sql = `delete from tbl_ator_nacionalidade where id = ${id};`

        let result = await knexConex.raw(sql)

        if(result)
            return true
        else
            return false

    } catch(error){
        console.log('ERRO NO DAO deleteAtorNacionalidade:', error)
        return false
    }
}

module.exports = {
    insertAtorNacionalidade,
    selectAllAtorNacionalidade,
    selectByIdAtorNacionalidade,
    updateAtorNacionalidade,
    deleteAtorNacionalidade
}