/**********************************************************
 * Objetivo: Calcular médias escolares
 * Data: 29/01/2026
 * Autor: Diego de Pádua
 * Versão: 1.0
************************************************************/

/*
    Existem 3 formas de criação de variáveis

        var -> Permite a criação de um espaço
             na memória do tipo variável. (Foi utilizado
            em prjetos antigos).
             Recomendação: Caso queria utilizar, recomenda-se na criação
            de variáveis globais (inicio do código).

         let -> Permite a criação de um espaço na memória
            do tipo variável. A utilização desse padrão
            é para a criação dentro de blocos de programação    
            {}.Essa variável nasce e morre dentro do bloco.
            Não é recomendado a sua utilização em escopo global

        const -> Permite a criação de um espaço na memória 
            onde não sofrerá alteração durante o código.
            A const pode ser utilizada dentro e fora de blocos {}.
            Dica: Caso queira diferenciar uma const, um var, ou um let
            A const pode criar com letras MAIUSCULAS
*/


const readline = require("readline")

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout

})

entradaDeDados.question("Digite o nome do aluno: ", function (nome){
   //Recebe o nome do aluno que foi digitado
    let nomeAluno = nome

    if(!isNaN(nome)){
        console.log("Esse campo não pode conter NÚMEROS")
    }
    else{

    entradaDeDados.question("Digite a nota 1: ", function(valor1){ 
        //Entrada nota 1
        let nota1 = valor1

     entradaDeDados.question("Digite a nota 2: ", function(valor2){ 
        //Entrada nota 2
        let nota2 = valor2
    
             entradaDeDados.question("Digite a nota 3: ", function(valor3){ 
                //Entrada nota 3
                let nota3 = valor3
        
                entradaDeDados.question("Digite a nota 4: ", function(valor4){ 
                    //Entrada nota 4
                    let nota4 = valor4

                    /*
                      == -> Permite comparar a igualdade de duas variáveis
                      <  -> Permite comparar valores menores
                      >  -> Permite comparar valores maiores
                      >= -> Permite comparar valores maiores ou iguais
                      <= -> Permite comparar valores menores ou iguais
                      != -> Permite comparar a diferença entre conteúdos
                      === -> Permite comparar a igualdade de conteúdos e a 
                             igualdade de tipagem
                      !== -> Permite comparar a diferença de conteúdos e a 
                            igualdade de tipos de dados
                      ==! -> Permite comparar a igualdade de conteúdos e a 
                            diferença de tipos de dados
                      =!= -> Permite comparar a diferença de conteúdos e a 
                            diferença de tipos de dados

                            Operadores Lógicos

                            E -> AND -> &&
                            OU -> OR -> ||
                            NÃO -> NOT -> !

                     */


                    //Validação de entrada Vazia
                    if(nomeAluno == "" || nota1 == "" || nota2 == "" || nota3 == "" || nota4 == ""){
                        console.log("ERRO: é obrigatório o preenchimento de todos os dados !!!")

                        //Validação de números entre 0 e 100
                    }else if(nota1 <0 || nota2 <0 || nota3 <0 || nota4 <0 ){
                        console.log("ERRO: Não pode ter notas menores que '0'")
                    }else if(nota1 >100 || nota2 >100 || nota3 >100 || nota4 >100){
                        console.log("ERRO: Não pode ter notas maiores que '100'")
                    //Validação para a entrada de letras nas notas
                    //isNaN() -> permite validar se o conteúdo da variável tem algum caracter ao invés de número    
                    }else if(isNaN(nota1)  || isNaN(nota2)  || isNaN(nota3)  || isNaN(nota4)){
                        console.log("ERRO: Não é possivel fazer o calculo da Média com a entrada de letras nas notas dos Alunos!")
                    }
                    /*------------------------------------------------------------------------------------------------------*/
                   
                    /**
                     *  Conversões de tipos de dados
                     *  parseInt()   -> Permite converter uma String para um número INTEIRO
                     *  parseFloat() -> Permite converter uma String para um número DECIMAL
                     *  Number()     -> Permite converter uma String para NÚMERO (INTEIRO OU DECIMAL)
                     *  String()     -> Permite converter um conteúdo para STRING
                     *  Boolean()    -> Permite converter um conteúdo para BOOLEANO
                     *  typeof()     -> Permite verificar o tipo de dados de uma variável
                     * toFixed()     -> Permite fixar a quantidade de casas decimais
                     */
                     //Calculo da médida das 4 notas
                    else{
                        let statusAluno
                        const media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4))/4

                        /**
                         * [] -> ARRAY
                         * {} -> JSON
                         * Para o Javascript ele trata esses dois como Objeto.
                         */

                        //Estrutura de decisão para saber se o aluno está aprovado, reprovado ou em recuperação.
                        if(media < 50){
                            statusAluno = "Aprovado!"
                           
                        }else if(media >=50 && media <70){
                           statusAluno = "Recuperação!"
                        }
                        else{
                            statusAluno = "Reprovado!"
                        } 
                        //Saída boletim aluno 
                        console.log(`O aluno(a): ${nomeAluno} \nMédia Final: ${media.toFixed(2)}\nStatus do aluno: ${statusAluno}`)

                    }
                   
                   
            
                 })
        
             })
    
         })

     })


    }
})