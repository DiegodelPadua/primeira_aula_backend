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
                    }else if(nota1 <0 || nota2 <0 || nota3 <0 || nota4 <0 ){
                        console.log("ERRO: Não pode ter notas menores que '0'")

                    }else if(nota1 >100 || nota2 >100 || nota3 >100 || nota4 >100){
                        console.log("ERRO: Não pode ter notas maiores que '100'")

                    
                    }else{
                        const media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4))/4

                        
                    }
                     if(media <= 50){
                        console.log("Aluno REPROVADO!" + media)
                       
                    }else{
                        console.log("Aluno APROVADO!" + media)
                    }
                   
            
                 })
        
             })
    
         })

     })


})