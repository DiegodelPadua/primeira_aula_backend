// Import da biblioteca para captar entrada de dados via terminal
var readline = require("readline")

//Cria interace para entrada e saída de dados pelo terminal
var entradaDeDados = readline.createInterface({
    input:  process.stdin,
    output: process.stdout
})

entradaDeDados.question("Favor digitar o seu nome: ", function(nomeUsuario){
    console.log("O nome do usuário é: " + nomeUsuario)

    entradaDeDados.question("Favor digitar o primeiro número: ", function(primeiroNumero){
        console.log(`O número informado é: ${primeiroNumero}`)

        entradaDeDados.question("Favor digitar o segundo número: ", function(segundoNumero){
            console.log(`O número informado é: ${segundoNumero}`)

            entradaDeDados.question("Favor digitar o terceiro número: ", function(terceiroNumero){
                console.log(`O número informado é: ${terceiroNumero}`)

                var soma = Number (primeiroNumero) + Number (segundoNumero) + Number (terceiroNumero)
                console.log("O resultado da soma dos três números é: " + soma)


            
            }) 
        })
    })
     
      

})