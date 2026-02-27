/***************************************************************************************************
 *  Objetivo: Desenvolver uma aplicação IMC para a empresa Cálculos SA 
 *  Arquivo: Arquivo responsável pela entrada de dados
 *  Autor: Diego de Pádua
 *  Data: 27/02/2026
 *  Versão: 1.0
 ***************************************************************************************************/

//Importa a biblioteca readline
const { error } = require('console');
const readline = require('readline');
//Cria o objeto de entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Importação do arquivo de cálculo
const calculo = require('./modulo/calculo.js')
//Importação do aquivo de tratamento
const tratamento = require('./tratamento.js')

entradaDeDados.question("Digite o peso (kg): ", function(pesoDigitado){

    let peso = tratamento.converterNumero(pesoDigitado) 

    entradaDeDados.question("Digite a altura (m): ", function(alturaDigitada){

        let altura = tratamento.converterNumero(alturaDigitada)

        //conversão
        if(peso== null || altura == null){
            console.log ("Digite apenas números válidos!")
            entradaDeDados.close()
            return;
        }
        //validação
        if(!tratamento.validarDados(peso, altura)){
            entradaDeDados.close()
            return;
        }
        //cálculo
        let imc = calculo.calcularIMC(peso, altura);
        let classificacao = calculo.classificarIMC(imc)

        //saída
        console.log("\n===== RESULTADO =====");
        console.log("IMC:", imc.toFixed(2));
        console.log("Classificação:", classificacao);

        entradaDeDados.close();

    })

})
