/***************************************************************************************************
 *  Objetivo: Desenvolver um sistema que gerencie números pares e ímpares
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
entradaDeDados.question("Digite o número inicial: ", function(inicialN){
    if(tratamento.textoObrigatorio(inicialN)==null) encerrarComErro("ERRO: As duas entradas são obrigatórias.")

        entradaDeDados.question("Digite o número final: ", function(finalN){
            if(tratamento.textoObrigatorio(finalN)==null) encerrarComErro("ERRO: As duas entradas são obrigatórias.")

                let inicial = tratamento.converterInteiro(inicialN)
                if(tratamento.converterInteiro(inicialN) == null) encerrarComErro("ERRO: Digite apenas números inteiros válidos")
                let final = tratamento.converterInteiro(finalN)
                if(tratamento.converterInteiro(finalN) == null) encerrarComErro("ERRO: Digite apenas números inteiros válidos")
                
                //regra dos intervalos
                if(!tratamento.validarIntervalo(inicial, 0, 500)) encerrarComErro("ERRO: O número inicial deve estar entre 0 e 500. ")
                if(!tratamento.validarIntervalo(final, 100, 1000)) encerrarComErro("ERRO: O número inicial deve estar entre 100 e 1000. ") 
                    
                if(inicial > final){
                    encerrarComErro("ERRO: O número inicial não pode ser maior que o número final.")
                }
                if(inicial == final){
                    encerrarComErro("ERRO: Os números não podem ser iguais.")
                }
                let resultado = calculo.separarParesImpares(inicial, final)

                console.log("\nLista de números Pares")
                console.log(resultado.pares)
                console.log("Qtde de números encontrados:", resultado.qtdePares)

                console.log("\nLista de números Impares")
                console.log(resultado.impares)
                console.log("Qtde de números encontrados:", resultado.qtdeImpares)

        })
})
