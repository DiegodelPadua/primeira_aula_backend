    // Import da biblioteca para captar entrada de dados via terminal
    var readline = require("readline")

    //Cria inteface para entrada e saída de dados pelo terminal
    var entradaDeDados = readline.createInterface({
    input:  process.stdin,
    output: process.stdout
    })

        //Função para retornar o nome digitado no terminal
        // O método question após a digitação chama a sua função "CALL BACK"
     //para entregar o que foi digitado no terminal, através do argumento
        //nomeUsuario
entradaDeDados.question("Favor digitar o seu nome: ", function(nomeUsuario){
    console.log("O nome do usuário é: " + nomeUsuario)
        //Função para retornar o nome digitado no terminal
        // O método question após a digitação chama a sua função "CALL BACK"
        //para entregar o que foi digitado no terminal, através do argumento
        //primeiroNumero
    entradaDeDados.question("Favor digitar o primeiro número: ", function(primeiroNumero){
        console.log(`O número informado é: ${primeiroNumero}`)
            //Função para retornar o nome digitado no terminal
            // O método question após a digitação chama a sua função "CALL BACK"
            //para entregar o que foi digitado no terminal, através do argumento
            //segundoNumero
        entradaDeDados.question("Favor digitar o segundo número: ", function(segundoNumero){
            console.log(`O número informado é: ${segundoNumero}`)
                //Função para retornar o nome digitado no terminal
                // O método question após a digitação chama a sua função "CALL BACK"
                //para entregar o que foi digitado no terminal, através do argumento
                //terceiroNumero
            entradaDeDados.question("Favor digitar o terceiro número: ", function(terceiroNumero){
                console.log(`O número informado é: ${terceiroNumero}`)
                    //Declaração da variável soma, e a soma das variáveis (primeiroNumero, segundoNumero e terceiroNumero)
                    //Imprime no terminal a soma dos valores.              
                    var soma = Number (primeiroNumero) + Number (segundoNumero) + Number (terceiroNumero)
                        console.log("O resultado da soma dos três números é: " + soma)


            
            }) 
        })
    })
     
      

})