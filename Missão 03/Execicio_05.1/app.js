/***************************************************************************************************
 *  Objetivo: Desenvolver um sistema que gerencie números pares e ímpares
 *  Arquivo: Arquivo responsável pelo recebimento de dados
 *  Autor: Diego de Pádua
 *  Data: 04/03/2026
 *  Versão: 1.1
 ***************************************************************************************************/

// app.js

const readline = require("readline")

const tratamento = require("./tratamento.js")
const calculo = require("./modulo/calculo.js")

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question("Digite o número inicial: ", function(inicialRaw){

    entradaDeDados.question("Digite o número final: ", function(finalRaw){

        entradaDeDados.question(
        "\nEscolha uma opção:\n1 - Pares\n2 - Ímpares\n3 - Ambos\nOpção: ",
        function(opcaoRaw){

            if(tratamento.textoObrigatorio(inicialRaw) == null ||
               tratamento.textoObrigatorio(finalRaw) == null ||
               tratamento.textoObrigatorio(opcaoRaw) == null){

                console.log("ERRO: Nenhuma entrada pode ficar vazia.")
                entradaDeDados.close()
                return
            }

            let inicial = tratamento.converterInteiro(inicialRaw)
            let final = tratamento.converterInteiro(finalRaw)
            let opcao = tratamento.converterInteiro(opcaoRaw)

            if(inicial == null || final == null || opcao == null){
                console.log("ERRO: Digite apenas números válidos.")
                entradaDeDados.close()
                return
            }

            if(!tratamento.validarIntervalo(inicial, 0, 500)){
                console.log("ERRO: Número inicial deve estar entre 0 e 500.")
                entradaDeDados.close()
                return
            }

            if(!tratamento.validarIntervalo(final, 100, 1000)){
                console.log("ERRO: Número final deve estar entre 100 e 1000.")
                entradaDeDados.close()
                return
            }

            if(inicial >= final){
                console.log("ERRO: O número inicial deve ser menor que o final.")
                entradaDeDados.close()
                return
            }

            if(!tratamento.validarOpcao(opcao)){
                console.log("ERRO: Opção inválida.")
                entradaDeDados.close()
                return
            }

            if(opcao == 1 || opcao == 3){

                let pares = calculo.calcularPares(inicial, final)

                console.log("\nLista de números Pares")
                console.log(pares.lista)
                console.log("Qtde de números encontrados:", pares.quantidade)
            }

            if(opcao == 2 || opcao == 3){

                let impares = calculo.calcularImpares(inicial, final)

                console.log("\nLista de números Ímpares")
                console.log(impares.lista)
                console.log("Qtde de números encontrados:", impares.quantidade)
            }

            entradaDeDados.close()

        })

    })

})