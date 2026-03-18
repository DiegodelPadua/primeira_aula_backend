/**********************************************************************************
 * Objetivo: Manipular Array e JSON
 * Data: 18/03/2026
 * Autor: Diego de Pádua
 * Versão: 1.0
 **********************************************************************************/

const { listaDeEstados } = require('./estados_cidades.js')

function getListaDeEstados() {
    let listaUF = []

    listaDeEstados.estados.forEach((estado) => {
        listaUF.push(estado.sigla)
    })

    return {
        uf: listaUF,
        quantidade: listaUF.length
    }
}

console.log(getListaDeEstados())

module.exports = {
    getListaDeEstados
}


