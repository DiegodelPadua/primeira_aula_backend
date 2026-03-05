/**********************************************************************************
 * Objetivo: Manipular dados utilizando Array e JSON
 * Data: 05/03/2026
 * Autor: Diego de Pádua
 * Versão: 1.0
 **********************************************************************************/

/**
    [] -> representa um objeto do tipo ARRAY
    {} -> representa um objeto do tipo JSON

    Array -> É um objeto na memória que permite trabalhar
     com vários valores em um único objeto
    
            índice      0       1       2   
     let nome   =   ['José', 'Maria', 'João']

     Quando é criado um array obrigatóriamente ele cria "INDICES" nesses objetos





     JSON -> É um objeto na memória que permite trabalhar com CHAVE E VALOR

        let nome         = 'José'
        let telefone     = '1233456677'
        let email        = 'jose@gmail.com'



        let cliente    =   {"nome": "José",
                     "telefone": "1233456677", 
                        "email": "jose@gmail.com"}

 */

//Formas de criar um ARRAY
const listaDeNomes = ['José', 'Maria', 'João', 'André', 'Alex']
const listaDeClientes = []
const listaDeFornecedores = []

const exibirDados = function(){
    //Exibe o obejto array e seu conteúdo
    console.log(listaDeNomes)
    //Exibe o array em forma de tabela indicando seus indices
    console.table(listaDeNomes)

    //Exibe o array no indice indicado dentro do vetor
    console.log(listaDeNomes[1])

    //typeof -> indica o tipo de dado que está guadado no objeto
    console.log(typeof(listaDeNomes[2]))


    console.log(`O nome do cliente é: ${listaDeNomes[0]}`)
    console.log(`O nome do cliente é: ${listaDeNomes[1]}`)
    console.log(`O nome do cliente é: ${listaDeNomes[2]}`)
    console.log(`O nome do cliente é: ${listaDeNomes[3]}`)
    console.log(`O nome do cliente é: ${listaDeNomes[4]}`)


    //Estruturas de repetição
    //While

    let cont = 0

    console.log('***********WHILE************')
    while(cont <= 4){
        console.log(`O nome do cliente é: ${listaDeNomes[cont]}`)
        cont+=1
    }


    console.log('***********FOR************')
    //Ao invés de colocar <=4 eu posso usar o "listaDeNomes.length" ele já encaminha com a
    //quantidade de elementros dentro do array
    for(let contador = 0; contador < listaDeNomes.length; contador++){
        console.log(`O nome do cliente é: ${listaDeNomes[contador]}`)
    }

    //Retorna o conteúdo de cada elemento através de uma CALL BACK
    console.log('***********FOR EACH************')
    listaDeNomes.forEach(function(cliente){
        console.log(`O nome do cliente é: ${cliente}`)
    })

    //Retorona o indice do elemento, e será preciso colocar dentro do objeto do array
    //Ex: listaDeNomes[item]
    //Praticamente igual o FOR e WHILE
    console.log('***********FOR IN************')
    for(cont in listaDeNomes){
        console.log(`O nome do cliente é: ${listaDeNomes[cont]}`)
    }

    //Percorre o array e retorna somente o conteúdo de cada índice, sendo muito parecido
    //com FOR EACH
    console.log('***********FOR OF************')
    for(cliente of listaDeNomes){
        console.log(`O nome do cliente é: ${cliente}`)
    }

    console.log(listaDeNomes.length)


}

const manipularDados = function(){
    //Adicionando valores novas no array através de índices
    listaDeClientes[0] = 'José da Silva'
    listaDeClientes[1] = 'Maria da Silva'
    listaDeClientes[2] = 'João da Silva' 

    console.log(listaDeClientes)

    //Permite adicionar novos valores no array sempre no final da lista
    listaDeFornecedores.push('Luiz da Silva')
    listaDeFornecedores.push('Zezinho da Silva')
    listaDeFornecedores.push('Huguinho da Silva')

    console.log(listaDeFornecedores)
}

manipularDados()
//exibirDados()