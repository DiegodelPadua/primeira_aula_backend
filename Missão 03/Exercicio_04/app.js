/***************************************************************************************************
 *  Objetivo: Desenvolver um sistema para Calcular o Fatorial de um número fornecido pelo usuário
 *  Arquivo: Arquivo responsável pela entrada de dados
 *  Autor: Diego de Pádua
 *  Data: 04/03/2026
 *  Versão: 1.0
 ***************************************************************************************************/
const { error } = require('console');
const readline = require('readline');

//Cria o objeto de entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Importa os arquivos de tramento de dados e calculo
const tratamento = require("./tratamento.js")
const calculo = require("./modulo/calculo.js")

/**
 * Finaliza o programa exibindo uma mensagem de erro.
 * Encerra a interface de leitura e interrompe a execução
 * para evitar que o sistema continue após uma entrada inválida.
 */
function encerrarComErro(msg) {
    console.log("ERRO:", msg);
    entradaDeDados.close();
}

//entrada de dados do usuário
entradaDeDados.question("Diegite um número para calcular o fatorial: ", function(valorDigitado){
    if(tratamento.textoObrigatorio(valorDigitado) == null) encerrarComErro("ERRO: A entrada não pode ficar vazia.")

        //tratamento de conversão dos números
        let numero = tratamento.converterInteiro(valorDigitado)
        //se o a variável "número"== null, reporta erro
        if(numero==null){
            console.log("ERRO: Digite apenas um numero inteiro válido. ")
            entradaDeDados.close()
            return
        }

        //tratamento para validar o fatorial
        let validacao = tratamento.validarFatorial(numero)
        //se a variavel "validação" for falsa, reporta erro
        if(validacao.ok == false){
            console.log("ERRO:", validacao.msg)
            entradaDeDados.close()
            return
        }

        //Exibição dos valores calculados para o usuário
        let expressao = calculo.montarExpressaoFatorial(numero)
        let resultado = calculo.calcularFatorial(numero)

        console.log(`Fatorial de ${numero} é ${expressao} = ${resultado}`)

        entradaDeDados.close()

})