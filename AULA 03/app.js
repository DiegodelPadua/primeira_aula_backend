/***************************************************************************************
 *  Objetivo: Criar um sistema que permite o calculo de juros 
 * ultilizando boas práticas com funções.
 * 
 *  Autor: Diego de Pádua
 *  Data: 11/02/2026
 *  Versão: 1.0
 ***************************************************************************************/

//Importa a biblioteca readline
const readline = require('readline');
//Cria o objeto de entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
//Entrada do nome do cliente
entradaDeDados.question('Digite o nome do Cliente: ', function(nome){
    let nomeCliente = nome;
    //Entrada do nome do produto
    entradaDeDados.question('Digite o nome do produto: ', function(produto){
        let nomeProduto = produto;
        //Entrada do nome da compra
        entradaDeDados.question('Digite o valor da compra: ', function(capital){
            let capitalProduto = capital;
            //Entrada da taxa de juros
            entradaDeDados.question('Digite a taxa de juros a ser aplicada na compra: ', function(taxa){
                let taxaCompra = taxa;
                //Entrada do tempo de pagamento
                entradaDeDados.question('Digite o tempo para realizar o pagamento: ', function(tempo){
                    let tempoPagamento = tempo;
                    //Import da biblioteca que realiza cálculos financeiros
                    let calculos = require('./modulo/calculos.js');

                    let montante = calculos.calcularJurosCompostos(capitalProduto, taxaCompra, tempoPagamento)

                    if(montante){
                        console.log ('O montante final é: ' + Number(montante.toFixed(2)));
                    }else{
                        console.log('ERRO: Devido a problemas no cálulo de juros, o programa encerrou.');
                        entradaDeDados.close();

                    }
                  
                 
                })
            })
        })
    })
})


