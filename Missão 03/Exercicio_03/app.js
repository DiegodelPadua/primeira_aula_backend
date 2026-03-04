/***************************************************************************************************
 *  Objetivo: Desenvolver um sistema para gerenciar o cálculo de uma tabuada
 *  Arquivo: Arquivo responsável pela entrada de dados
 *  Autor: Diego de Pádua
 *  Data: 04/03/2026
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
entradaDeDados.question("Digite a tabuada inicial: ", function(tabIni){
    if(tratamento.textoObrigatorio(tabIni) == null) encerrarComErro("ERRO: Nenhum campo pode ficar vazio")

        entradaDeDados.question("Digite a tabuada final: ", function(tabFim){
            if(tratamento.textoObrigatorio(tabFim) == null) encerrarComErro("ERRO: Nenhum campo pode ficar vazio")

                entradaDeDados.question("Digite o contador inicial: ", function(contIni){
                    if(tratamento.textoObrigatorio(contIni) == null) encerrarComErro("ERRO: Nenhum campo pode ficar vazio")

                        entradaDeDados.question("Digite o contador final: ", function(contFim){
                            if(tratamento.textoObrigatorio(contFim) == null) encerrarComErro("ERRO: Nenhum campo pode ficar vazio")

                                //tratamento para conversão dos números "tanIni" e "tabFim"
                                let tabuadaInicial = tratamento.converterNumero(tabIni)
                                let tabuadaFinal = tratamento.converterNumero(tabFim)
                                // tratamento para conversão dos números "contIni" e "contFim"
                                let contadorInicial = tratamento.converterNumero(contIni)
                                let contadorFinal = tratamento.converterNumero(contFim)

                                //Se o tratamento de validação da "tabuadaInicial" e "tabuadaFinal for diferente do que programado, reporta erro"
                                if(!tratamento.validarTabuada(tabuadaInicial) || !tratamento.validarTabuada(tabuadaFinal)){
                                    console.log("ERRO: Tabuada deve ser entre 2 e 100")
                                    entradaDeDados.close()
                                    return
                                }
                                
                                //Se o tratamento de validação da "contadorInicial" e "contadorFinal" for diferente do que programado, reporta erro"
                                if(!tratamento.validarContador(contadorInicial) || !tratamento.validarContador(contadorFinal)){
                                    console.log("ERRO: Contador deve ser entre 1 e 50")
                                    entradaDeDados.close()
                                    return
                                }

                                //exibe o resultado calculado para o usuário
                                calculo.calcularTabuada(
                                    tabuadaInicial,
                                    tabuadaFinal,
                                    contadorInicial,
                                    contadorFinal
                                )

                                entradaDeDados.close()



                        })

                })
        })        
})


