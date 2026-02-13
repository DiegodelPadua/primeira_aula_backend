/*************************************************************************************
 *  Objetivo: Desenvolver uma aplicação para a empresa Cálculos SA 
 *  Autor: Diego de Pádua
 *  Data: 13/02/2026
 *  Versão: 1.0
 ************************************************************************************/

//Importa a biblioteca readline
const { error } = require('console');
const readline = require('readline');
//Cria o objeto de entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
// entrada da primeira variável
entradaDeDados.question('Por favor, insira o primeiro número para o cálculo matemático: ', function(variavel1){
    let numero1 = variavel1;
    
    entradaDeDados.question('Por favor, insira o segundo número para o cálculo matemático: ', function(variavel2){
        let numero2 = variavel2;

        entradaDeDados.question('Por favor, insira a operação matemática a ser realizada (SOMA, SUBTRAÇÃO, MULTIPLICAÇÃO ou DIVISÃO): ', function(operacao){
            let operacao1 = operacao;

        let tratamento = require('./tratamento.js');
        let respostaTratamento = tratamento.tratamentoDeDados(numero1, numero2, operacao1);
        let respostaTratamento2 = tratamento.tratamentoDeVirgulas(numero1, numero2);

        console.log(respostaTratamento2)

        if(respostaTratamento2 == null){
            console.log('ERRO: Mais de uma vírgula');
        }

        

    
        if(respostaTratamento == true){
            
        let calcular = require('./modulo/calculo.js');
        let respostaDoCalculo = calcular.calcularNumeros(numero1, numero2, operacao1)

        console.log('O valor calculado é: ' + respostaDoCalculo)

        if(respostaDoCalculo == false){
            console.log('Valor indefinido!')
        }

        }


   

        })   

    })

})

