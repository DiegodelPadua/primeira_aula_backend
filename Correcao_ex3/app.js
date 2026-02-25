/******************************************************************************************
 *  Objetivo: Correção do exercício (Desenvolver uma aplicação para a empresa Cálculos SA) 
 *  Arrquivo: 
 *  Autor: Diego de Pádua
 *  Data: 22/02/2026
 *  Versão: 1.0
 ******************************************************************************************/

//Importa a biblioteca readline
const { error } = require('console');
const readline = require('readline');
//Cria o objeto de entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


const calculosMatematicos = require('./modulo/calcular.js')

let resposta = calculosMatematicos.calcular(10,60, 'somar')
let respostaSoma = calculosMatematicos.somar(50,30)

console.log(resposta)
console.log(respostaSoma)