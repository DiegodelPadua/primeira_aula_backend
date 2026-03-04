/***************************************************************************************************
 *  Objetivo: Desenvolver um sistema que gerencie números pares e ímpares
 *  Arquivo: Arquivo responsável por calcular os dados
 *  Autor: Diego de Pádua
 *  Data: 04/03/2026
 *  Versão: 1.1
 ***************************************************************************************************/

// calculo.js

function ehPar(n){
    return n % 2 == 0
}

function calcularPares(inicial, final){

    let lista = ""
    let quantidade = 0

    for(let i = inicial; i <= final; i++){

        if(ehPar(i)){
            lista += i + "\n"
            quantidade++
        }
    }

    return {
        lista: lista,
        quantidade: quantidade
    }
}

function calcularImpares(inicial, final){

    let lista = ""
    let quantidade = 0

    for(let i = inicial; i <= final; i++){

        if(!ehPar(i)){
            lista += i + "\n"
            quantidade++
        }
    }

    return {
        lista: lista,
        quantidade: quantidade
    }
}

module.exports = {
    calcularPares,
    calcularImpares
}