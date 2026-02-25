/***************************************************************************************************
 *  Objetivo: Correção do exercício (Desenvolver uma aplicação para a empresa Cálculos SA) 
 *  Arrquivo: Arquivo resposável pelas funções de operações: (SOMAR, SUBTRAIR, MULTIPLICAR, DIVIDIR)
 *  Autor: Diego de Pádua
 *  Data: 22/02/2026
 *  Versão: 1.0
 ***************************************************************************************************/
//Modelo de função anônima
//Calcular as quatro operações matemáticas
//toUpperCase() -> Retorna a string em MAIUSCULO
//toLowerCase() -> Retorna a stringo em minúsculo
const calcular = function(numero1, numero2, operador){
    let valor1 = Number(numero1);
    let valor2 = Number(numero2);
    let resultado
    let operadorMatematico = String(operador).toUpperCase();

    switch (operadorMatematico) {
        case 'SOMAR'://if
            resultado = somar(valor1,valor2)
            break;
        case 'SUBTRAIR'://else if
            resultado = subtrair(valor1,valor2)
            break;
        case 'MULTIPLICAR'://else if
            resultado = multiplicar(valor1,valor2)
        case 'DIVIDIR'://else if
            resultado = dividir(valor1,valor2)
            break;
    
        default:
            return false //else
            break;
    }
    return resultado
}

//Exemplo de funções baseada em SETA (Arrow function)
//Funções para realizar as operações matemáticas
//Nesse caso não tem 'return' pq a função é feita em uma linha e a prórpria SETA faz a função do return
const somar = (numero1, numero2) => Number(numero1) + Number(numero2)
const subtrair = (numero1, numero2) => Number(numero1) - Number(numero2)
const multiplicar = (numero1, numero2) => Number(numero1) * Number(numero2)
const dividir = (numero1, numero2) => Number(numero1) / Number(numero2)

module.exports = {
    calcular,
    somar,
    subtrair,
    multiplicar,
    dividir
}

//console.log(calcular(10, 50, 'somar'))

    //Condicionais para validar qual o tipo de operação matemática
    //A ausência da {} na condicional é porque qualquer condicional que tenha apenas uma linha
    //de processamento a {} torna-se opcional
//     if(operadorMatematico == 'SOMAR'){
//         resultado = valor1 + valor2;
//     }else if(operadorMatematico == 'SUBTRAIR'){
//         resultado = valor1 - valor2
//     }else if(operadorMatematico == 'MULTIPLICAR'){
//         resultado = valor1 * valor2
//     }else if(operadorMatematico == 'DIVIDIR'){
//         resultado = valor1 / valor2

//     //Saída  
//     }if (resultado != undefined){
//         return Number(resultado).toFixed(2)
//     }else{
//         return false
//     }
      
// }

// console.log(calcular(10, 50, 'somar'))
