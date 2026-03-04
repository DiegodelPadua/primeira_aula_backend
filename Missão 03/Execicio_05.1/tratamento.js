/***************************************************************************************************
 *  Objetivo: Desenvolver um sistema que gerencie números pares e ímpares
 *  Arquivo: Arquivo responsável por tratar os dados
 *  Autor: Diego de Pádua
 *  Data: 04/03/2026
 *  Versão: 1.1
 ***************************************************************************************************/

// tratamento.js

function textoObrigatorio(valor){
    let texto = String(valor).trim()

    if(texto == ""){
        return null
    }

    return texto
}

function converterInteiro(valor){
    let numero = Number(valor)

    if(isNaN(numero)){
        return null
    }

    if(!Number.isInteger(numero)){
        return null
    }

    return numero
}

function validarIntervalo(n, min, max){
    if(n >= min && n <= max){
        return true
    }

    return false
}

function validarOpcao(opcao){
    if(opcao == 1 || opcao == 2 || opcao == 3){
        return true
    }

    return false
}

module.exports = {
    textoObrigatorio,
    converterInteiro,
    validarIntervalo,
    validarOpcao
}