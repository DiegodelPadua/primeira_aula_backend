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
const listaDeNomes = ['José', 'Maria', 'João', 'André', 'Alex', 'Carlos', 'Ana', 'Bruna', 'Jake']
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

    //Permite adicionar novos valores no array sempre no FINAL da lista
    listaDeFornecedores.push('Luiz da Silva')
    listaDeFornecedores.push('Zezinho da Silva')
    listaDeFornecedores.push('Huguinho da Silva')
    listaDeFornecedores.push('Huguinho da Silva','André da Silva', 'Carlos da Silva')

    //Permite adicionar novos elementos no array sempre no INICIO da lista
    listaDeFornecedores.unshift('Ana Carolina')
    console.log(listaDeFornecedores)

    //Permite remover elementos do FINAL da lista
    listaDeFornecedores.pop()
    console.table(listaDeFornecedores)

    //Permite remover elementos do INICIO da lista
    listaDeFornecedores.shift()
    console.table(listaDeFornecedores)

    //Splice()--> Permite remover um elemento baseado no indice da lista 
        // splice(indice, quantidade de elementos)
    listaDeFornecedores.splice(2,1)
    console.table(listaDeFornecedores)

    //Splice()--> Permite adicionar um novo elemento em um determinado lugar do array(indice)
                            //indice, 0--> siginifica que não será removido ninguém, Novo conteúdo   
    listaDeFornecedores.slice(2,0,'Carlos da Silva')
    console.table(listaDeFornecedores)

    
}

const removerItem = function(nome){

    //Retorna o indice de um elemento fazendo a busca pelo conteúdo
    //Se o indexOf não encontrar o conteúdo ele devolve -1
    let indice = listaDeNomes.indexOf(nome)
    listaDeNomes.splice(indice,1)
    if(indice != -1){
        listaDeNomes.splice(indice,1)
        return true
    }else{
        return false
    }

    //Retorna o indice de um elemento fazendo a busca pelo valor
    //for(indice in listaDeNomes)
        //if(listaDeNomes[indice] == nome){
            //listaDeNomes.splice(indice,1)
        //}

}

const verificarItem = function(nome){
    //verifica a existencia de um conteúdo dentro de uma lista (true/false)
    let resposta = listaDeNomes.includes()

}

const quantidadeItens = function(nome){
    let cont =  0 
    listaDeNomes.forEach(function(item){
        if(String(item).toUpperCase() == String(nome).toLocaleUpperCase())
            cont +=1

    })
}

const criandoDadosJSON = function(){

    let aluno = {'nome': 'José',
                 'ra': 123456,
                 'telefone': '97575752343',
                 'email': 'jose@gmail.com'}


    //exibindo o objeto JSON completo             
    console.log(aluno)
    console.table(aluno)
    
    //exibindo apenas um atributo do JSON
    console.log(aluno.nome)

    //Adiciona um novo atributo no JSON
    aluno.sexo = 'Masculino'
    console.log(aluno)

    //deletar um atributo no JSON
    delete aluno.telefone
    console.log(aluno)

}

const cadastroDeProdutos = function(){

    let cores = [
        {'id': 1, 'cor': 'Branco'},    //indice 0
        {'id': 2, 'cor': 'Preto'},     //indice 1
        {'id': 3, 'cor': 'Azul'},      //indice 2
        {'id': 4, 'cor': 'Rosa'},      //indice 3
        {'id': 5, 'cor': 'Cinza'}      //indice 4
    ]

    let marcas = [
        {'id': 1, 'marca': 'LG',           'telefone': '123456789', 'email': 'lg@lg.com.br'},       //indice 0
        {'id': 2, 'marca': 'DELL',         'telefone': '123456239', 'email': 'dell@dell.com.br'},    //indice 1
        {'id': 3, 'marca': 'LENOVO',       'telefone': '123456569', 'email': 'lenovo@lenovo.com.br'},  //indice 2
        {'id': 4, 'marca': 'APPLE',        'telefone': '123456779', 'email': 'apple@apple.com.br'},   //indice 3
        {'id': 5, 'marca': 'RAYZER',       'telefone': '123456899', 'email': 'rayzer@rayzer.com.br'},  //indice 4
        {'id': 6, 'marca': 'LOGITECH',     'telefone': '123453429', 'email': 'logitech@logitch.com.br'},  //indice 5
        {'id': 7, 'marca': 'MULTILASER',   'telefone': '123456129', 'email': 'multilaser@multilaser.com.br'}   //indice 6
    ]

    let produtos = [

        {   'id': 1,
            'nome': 'Monitor',
            'descricao': '27 polegadas',
            'marca': [marcas[1]],
            'quantidade': 20,
            'cor':[
                cores[4],
                cores[1] 
            ],
            'valor': 800.50
        },
        {
            'id': 2,
            'nome': 'Teclado',
            'descricao': 'Teclado mecânico RGB',
            'marca': [marcas[5]],
            'quantidade': 200,
            'cor': cores,
            'valor': 150
        },
        {
            'id': 3,
            'nome': 'Mouse',
            'descricao': 'Mouse sem fio',
            'marca':[
                marcas[0],
                marcas[1],
                marcas[5]

            ],
            'quantidade': 500,
            'cor':[
                cores[0],
                cores[1],
                cores[4]
            ],
            'valor': 80

        }
    ]

    //Percorre o objeto de produto para trazer os dados de cada produto
    produtos.forEach(function(itemProduto){
        console.log('-----------------------------')
        console.log(`produto: ${itemProduto.nome}`)
        console.log(`Quantidade: ${itemProduto.quantidade}`)
        console.log(`Valor: ${itemProduto.valor}`)
        
        //Percorre o objeto de cor dentro de cada produto, para trazer as cores
        itemProduto.cor.forEach(function(c){
            console.log(`Cor: ${c.cor}`)
            
        })
        //Percorre o objeto de marca dentro de cada produto, para trazer as marcas
        itemProduto.marca.forEach(function(itemMarca){
            console.log(`Marca: ${itemMarca.marca}`)
        })
    })


    //Pesquisando um produto pelo NOME
    console.log('Pesquisando Produtos pelo Nome')
    let nome = 'Teclado'

    produtos.forEach(function(itemProduto){
        if(String(itemProduto.nome).toUpperCase() == String(nome).toUpperCase()){
            console.log(itemProduto)
        }
    })

    //Pesquisando um produto pela COR
    console.log('Pesquisando Produtos pela Cor')
    let cor = 'Azul'
    let status = false

    produtos.forEach(function(itemProduto){
        itemProduto.cor.forEach(function(itemCor){
            if(String(itemCor.cor).toLowerCase() == String(cor).toUpperCase()){
                console.log(itemProduto)
                status = true
            }
        })
    })

    if(!status)
        console.log('Item pesquisado não foi encontrado')







    //console.log(cores)
    //console.table(cores)

    //console.log(cores[2].nome)

    //console.log(produtos)
    //console.log(produtos[0].cor)
    //console.log(produtos[0].cor[1].cor)

    //console.table(produtos)

    //produtos[0].cor.forEach(function(nomeCor){
    //    console.log('A cor do produto é: '+ nomeCor.cor)
    //})
}

//manipularDados()
//exibirDados()
//console.table(listaDeNomes)
//removerItem('Maria')
//console.log(removerItem('Bruna'))
//console.table(listaDeNomes)
//let resposta = removerItem('jsjdjd')
//if(resposta)
    //console.log('Item removido')




//console.log(quantidadeItens('Zé'))
//criandoDadosJSON()
cadastroDeProdutos()