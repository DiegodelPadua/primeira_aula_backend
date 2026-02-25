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
    // entrada da segunda variável
    entradaDeDados.question('Por favor, insira o segundo número para o cálculo matemático: ', function(variavel2){
        let numero2 = variavel2;
        // entrada operador matemático
        entradaDeDados.question('Por favor, insira a operação matemática a ser realizada (SOMA, SUBTRAÇÃO, MULTIPLICAÇÃO ou DIVISÃO): ', function(operacao){
            let operacao1 = operacao;
       //importe dos tratamentos de dados e virgulas
       let tratamento = require('./tratamento.js');
       let respostaTratamento = tratamento.tratamentoDeDados(numero1, numero2, operacao1);
       let respostaTratamento2 = tratamento.tratamentoDeVirgulas(numero1, numero2);

        //Se no tratamento retornar "false" aparecerá a mensagem no console
        if (respostaTratamento == false){
            console.log('ERRO: Somente números! Ou veja se colocou o nome da operação correta!');

        }
 
        //Se no tratamento2 retornar "false" aparecerá a mensagem no console
        if(respostaTratamento2 == false){
            console.log('ERRO: Mais de uma vírgula');
        }

        

        //Se no tratamento houver o retorno "true"
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

