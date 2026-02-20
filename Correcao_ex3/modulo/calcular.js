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
            resultado = valor1 + valor2
            break;
        case 'SUBTRAIR'://else if
            resultado = valor1 - valor2
            break;
        case 'MULTIPLICAR'://else if
            resultado = valor1 * valor2
        case 'DIVIDIR'://else if
            resultado = valor1 / valor2
            break;
    
        default:
            return false //else
            break;
    }
    return resultado
}
    console.log(calcular(10, 50, 'somar'))

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
