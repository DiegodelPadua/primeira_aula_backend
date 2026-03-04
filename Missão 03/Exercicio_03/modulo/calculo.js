/***************************************************************************************************
 *  Objetivo: Desenvolver um sistema para gerenciar o cálculo de uma tabuada
 *  Arquivo: Arquivo responsável por calcular os dados
 *  Autor: Diego de Pádua
 *  Data: 04/03/2026
 *  Versão: 1.0
 ***************************************************************************************************/

//calculo
//Calcular e exibir várias tabuadas dentro de um intervalo definido,
//utilizando também um intervalo de contadores para cada tabuada.
function calcularTabuada(tabuadaInicial, tabuadaFinal, contadorInicial, contadorFinal){

    //O primeiro laço "for" percorre as tabuadas.
   //Ele começa em tabuadaInicial e vai até tabuadaFinal.
    for(let t = tabuadaInicial; t <= tabuadaFinal; t++){

        console.log("\nTabuada do [" + t + "]")

        //O segundo laço "for" controla o contador da multiplicação.
        //Ele começa em contadorInicial e vai até contadorFinal.
        for(let c = contadorInicial; c <= contadorFinal; c++){

            let resultado = t * c

            console.log(t + " x " + c + " = " + resultado)

        }

    }

}

module.exports = {
    calcularTabuada
}