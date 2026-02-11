/**********************************************************
 * Objetivo: Desenvolver uma aplicação para a empresa Viva Moda
 * Data: 04/02/2026
 * Autor: Diego de Pádua
 * Versão: 1.0
************************************************************/
const readline = require("readline")

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout

})
//Requisito do nome do cliente
entradaDeDados.question("Digite o seu nome: ", function (nome){

    let nomeCliente = nome
    //Requisito do nome do produto
    entradaDeDados.question("Digite o nome do produto: ", function (produto){

        let nomeDoProduto = produto 
        //Requisito do valor da comprar
        entradaDeDados.question("Digite o valor da compra: ", function (compra){

             let valorDaCompra = compra
            //Requisito do valor da taxa de juros
             entradaDeDados.question("Insira o valor da taxa de juros: ", function (taxaDeJuros){

             let valorDaTaxaDeJuros = (taxaDeJuros / 100)
                //Requisito do tipo de tempo Meses ou anos
                entradaDeDados.question("Isira o tempo de pagamento será Anos ou Meses? ", function (Pagamento){

                 let tempoDePagamento = Pagamento
                 //Estrutara de decisão, caso não é inserido alguma questão   
                 if(nomeCliente == "" || nomeDoProduto == "" || valorDaCompra == "" || valorDaTaxaDeJuros == "" || tempoDePagamento == ""){

                    console.log("ERRO: é obrigatório o preenchimento de todos os dados !!!")
                //Estrutura de decisão para entrar na função do calculo de ano
                }else if(tempoDePagamento == 'Anos' || tempoDePagamento == 'anos'){

                    entradaDeDados.question("Isira a quantidade em anos: ", function (anos){

                        //conversão do cálculo em anos
                        tempoEmAnos = anos
                        conversaoAnos = tempoEmAnos * 12
                        //calculo em anos
                        let montanteFinal = (Number(valorDaCompra)*(1 + Number(valorDaTaxaDeJuros))**Number(conversaoAnos))
                        let acrescimo = Number(montanteFinal) - Number(valorDaCompra)
                        //Mensage no console em meses
                        console.log (`********************************* Viva Moda **************************************
                            \nMuito obrigado por realizar a sua compra conosco Sr(a): ${nomeCliente}
                            \nA compra do produto ${nomeDoProduto}, tem um valor de: R$ ${valorDaCompra.toFixed(2)}
                            \nA sua compra será parcelada em ${anos} anos e o Sr(a) pagará: R$ ${montanteFinal.toFixed(2)}
                            \nO acréscimo realizado ao valor de: R$ ${valorDaCompra.toFixed(2)} será de R$ ${acrescimo.toFixed(2)}
                            \nMuito obrigado por escolher a Viva Moda.
                            \n*****************************************************************************************`)    


                    })
                 //Estrutura de decisão para entrar no calculo de meses
                 }else if(tempoDePagamento == 'Meses' || tempoDePagamento == 'meses'){
                    entradaDeDados.question("Isira a quantidade em meses: ", function (meses){
                        //conversão do calculo em meses
                        quantidadeEmMeses = meses
                        //calculo em meses
                        let montanteFinal = (Number(valorDaCompra)*(1 + Number(valorDaTaxaDeJuros))**Number(quantidadeEmMeses))
                        let acrescimo = montanteFinal - valorDaCompra
                        //Mensagem no console em meses
                        console.log (`********************************* Viva Moda **************************************
                            \nMuito obrigado por realizar a sua compra conosco Sr(a): ${nomeCliente}
                            \nA compra do produto ${nomeDoProduto}, tem um valor de: R$ ${valorDaCompra.toFixed(2)}
                            \nA sua compra será parcelada em ${quantidadeEmMeses} meses e o Sr(a) pagará: R$ ${montanteFinal.toFixed(2)}
                            \nO acréscimo realizado ao valor de: R$ ${valorDaCompra.toFixed(2)} será de R$ ${acrescimo.toFixed(2)}
                            \nMuito obrigado por escolher a Viva Moda.
                            \n*****************************************************************************************`)
    

                    })


                 }

            
            
                })

            })

        })

    })

})
