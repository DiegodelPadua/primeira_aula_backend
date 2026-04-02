/**********************************************************************************
 * Objetivo: Manipular Array e JSON
 * Data: 18/03/2026
 * Autor: Diego de Pádua
 * Versão: 1.0
 **********************************************************************************/


// Importa o objeto do outro arquivo.
// Aqui usamos desestruturação porque o arquivo estados_cidades.js
// exporta um objeto com a chave "listaDeEstados".
const { listaDeEstados } = require('./estados_cidades.js')

// Função que retorna a lista de siglas dos estados
function getListaDeEstados() {

    // Cria um array vazio para armazenar as siglas (UF)
    let listaUF = []

     // Percorre o array de estados usando forEach
    // Cada item do array é um objeto "estado"
    listaDeEstados.estados.forEach((estado) => {

        // Para cada estado, pegamos a sigla (ex: SP, RJ, MG)
        // e adicionamos no array listaUF
        listaUF.push(estado.sigla)
    })

    // Retorna um objeto com:
    // - o array de siglas
    // - a quantidade total de estados
    return {
        uf: listaUF,
        quantidade: listaUF.length
    }
}


// Função que retorna os dados de um estado pela sigla
function getDadosEstado(sigla){

    let estadoEncontrado = null

    // variável para guardar o estado encontrado
    listaDeEstados.estados.forEach((estado) => {

        // percorre todos os estados
        if(estado.sigla.toUpperCase() === sigla.toUpperCase()){

            // compara a sigla recebida com a sigla do estado
            estadoEncontrado = estado
        }
    })

    // se não encontrar, retorna null
    if (estadoEncontrado === null){
        return false
    }

    return{

        //Retorna dados percorridos no array solicitado
        uf: estadoEncontrado.sigla,
        descricao: estadoEncontrado.nome,
        capital: estadoEncontrado.capital,
        regiao: estadoEncontrado.regiao
    }
}

// Função que retorna os dados da capital de um estado
function getCapitalEstado(sigla){

    // variável para armazenar o estado encontrado
    let estadoEncontrado = null

    // percorre todos os estados
    listaDeEstados.estados.forEach((estado) => {

        // compara a sigla (ignorando maiúscula/minúscula
        if (estado.sigla.toUpperCase() === sigla.toUpperCase()){

            // guarda o estado encontrado
            estadoEncontrado = estado
        }
    })

    // se não encontrar o estado
    if (estadoEncontrado === null){
        return false
    }

    // retorna os dados desejados
    return{

        uf: estadoEncontrado.sigla,
        descricao: estadoEncontrado.nome,
        capital: estadoEncontrado.capital

    }
}

// Função que retorna os estados de uma determinada região
function getEstadosRegiao(regiao){

    // array para armazenar os estados encontrados
    let listaEstados = []

    // percorre todos os estados
    listaDeEstados.estados.forEach((estado) => {

        // compara a região (ignorando maiúscula/minúscula)
        if (estado.regiao.toUpperCase() === regiao.toUpperCase()){

            // adiciona no array somente os dados pedidos
            listaEstados.push({
                uf: estado.sigla,
                descricao: estado.nome
            })
        }
    })

    // se não encontrar nenhum estado
    if (listaEstados.length === 0){
        return false
    }

    // retorna os dados desejados
    return {
        regiao: regiao.toUpperCase(),
        estados: listaEstados
    }
}

function getCapitalPais() {

    let listaCapitais = []

    // percorre todos os estados
    listaDeEstados.estados.forEach((estado) => {

        // verifica se existe a propriedade capital_pais
        if (estado.capital_pais) {

            listaCapitais.push({

                capital_atual: estado.capital_pais.capital,

                uf: estado.sigla,
                descricao: estado.nome,
                capital: estado.capital,
                regiao: estado.regiao,

                capital_pais_ano_inicio: estado.capital_pais.ano_inicio,
                capital_pais_ano_termino: estado.capital_pais.ano_fim
            })
        }
    })

    return {
        capitais: listaCapitais
    }
}

function getCidades(sigla) {

    // variável para guardar o estado encontrado
    let estadoEncontrado = null

    // array para guardar os nomes das cidades
    let listaCidades = []

    // percorre todos os estados
    listaDeEstados.estados.forEach((estado) => {

        // compara a sigla informada com a sigla do estado
        if (estado.sigla.toUpperCase() === sigla.toUpperCase()) {
            estadoEncontrado = estado
        }
    })

    // se não encontrar o estado, retorna null
    if (estadoEncontrado === null) {
        return false
    }

    // percorre as cidades do estado encontrado
    estadoEncontrado.cidades.forEach((cidade) => {
        listaCidades.push(cidade.nome)
    })

    // retorna no formato pedido
    return {
        uf: estadoEncontrado.sigla,
        descricao: estadoEncontrado.nome,
        quantidade_cidades: listaCidades.length,
        cidades: listaCidades
    }
}






// Exibe o resultado no console para teste
//console.log(getListaDeEstados())
//Exibe o resultado no console para teste
//console.log(getDadosEstado('SC'))
// Exibe o resultado no console para teste
//console.log(getCapitalEstado('SP'))
// Exibe o resultado no console para teste
//console.log(getEstadosRegiao('Sudeste'))
// Exibe o resultado no console para teste
//console.log(getCapitalPais())
// Exibe o resultado no console para teste
//console.log(getCidades('SP'))



// Exporta a função para poder usar em outros arquivos
module.exports = {
    getListaDeEstados,
    getDadosEstado,
    getCapitalEstado,
    getEstadosRegiao,
    getCapitalPais,
    getCidades


}


