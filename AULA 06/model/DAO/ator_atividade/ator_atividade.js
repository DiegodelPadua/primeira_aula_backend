/***********************************************************************
 * Objetivo: DAO responsável pelo CRUD da tabela tbl_ator_atividade
 ***********************************************************************/

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const insertAtorAtividade = async function(dados){

    try {

        let sql = `insert into tbl_ator_atividade (
                        id_ator,
                        id_atividade
                    ) values (
                        ${dados.id_ator},
                        ${dados.id_atividade}
                    );`

        let result = await prisma.$executeRawUnsafe(sql)

        if(result)
            return true
        else
            return false

    } catch(error){
        console.log('ERRO NO DAO insertAtorAtividade:', error)
        return false
    }
}

module.exports = {
    insertAtorAtividade
}