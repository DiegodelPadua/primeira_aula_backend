/***************************************************************************************************
 *  Objetivo: Desenvolver uma aplicação IMC para a empresa Cálculos SA  
 *  Arrquivo: Arquivo responsável por calcular e classificar os dados
 *  Autor: Diego de Pádua
 *  Data: 22/02/2026
 *  Versão: 1.0
 ***************************************************************************************************/

function calcularIMC(peso, altura){
    return peso / (altura * altura)
}

function classificarIMC(imc){

    if(imc <18.5){
        return "Abaixo do peso"
    } else if(imc <= 24.9){
        return "Peso normal";
    }
    else if(imc <= 29.9){
        return "Sobrepeso";
    }
    else if(imc <= 34.9){
        return "Obesidade I";
    }
    else if(imc <= 39.9){
        return "Obesidade II";
    }
    else{
        return "Obesidade III";
    }
}

//exportando as funções
module.exports = {
    calcularIMC,
    classificarIMC
}