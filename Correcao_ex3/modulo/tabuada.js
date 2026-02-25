/************************************************************************************
 * Objetivo: Arquivo responsável por gerar a tabuada de um número
 * Data: 25/02/2026
 * Autor: Diego de Pádua
 * Versão: 1.0
 * 
 * 
 ************************************************************************************/

//Import da biblioteca de calculos matemáticos
const calculosMatematicos = require('./calcular.js')


//Função para imprimir a tabuada usando While
//Sempre pensar onde ela começa e onde ela termina
const gerarTabuada = function(tabuada){

    //Recebe a tabuada a ser gerada
    let tab = Number(tabuada)
    let cont = 0

    //Laço de repetição para gerar a tabuada até 10
    while(cont <= 10){
    //Chama a função de multiplicar para realizar a operação    
    let resultado = calculosMatematicos.multiplicar(tab, cont)
    //console.log(tab + 'x' + cont + '=' + resultado)
    console.log(`${tab} x ${cont} = ${resultado}`)

    //cont = cont + 1
    //cont++
    cont +=1



    }
}


const gerarTabuadaFor = function(tabuada){

    //Recebe a tabuada a ser gerada
    let tab = Number(tabuada)
    //let cont

    //Laço de repetição para gerar a tabuada até 10
    for(let cont = 0; cont <=10; cont +=1.2){
    //Chama a função de multiplicar para realizar a operação    
    let resultado = calculosMatematicos.multiplicar(tab, cont)
    //console.log(tab + 'x' + cont + '=' + resultado)
    console.log(`${tab} x ${cont} = ${resultado}`)

    //cont = cont + 1
    //cont++
    //cont +=1



    }
}

gerarTabuadaFor(4)