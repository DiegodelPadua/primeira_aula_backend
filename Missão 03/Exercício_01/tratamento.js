/***************************************************************************************************
 *  Objetivo: Desenvolver uma aplicação IMC para a empresa Cálculos SA 
 *  Arquivo: Arquivo responsável por tratamento de dados
 *  Autor: Diego de Pádua
 *  Data: 27/02/2026
 *  Versão: 1.0
 ***************************************************************************************************/

// FUNÇÕES DE DADOS (entrada)
function converterNumero(valorDigitado){
    let valor = String(valorDigitado).trim().replace(",", ".");
    let numero = Number(valor);

    if(isNaN(numero)){
        return null;
    }
    return numero;
}

function validarDados(peso, altura){
    if(peso <= 0 || peso > 500){
        console.log("Peso inválido!");
        return false;
    }

    if(altura <= 0 || altura > 3){
        console.log("Altura inválida!");
        return false;
    }

    return true;
}

module.exports = {
    converterNumero,
    validarDados
}


