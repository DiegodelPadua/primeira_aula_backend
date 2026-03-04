/***************************************************************************************************
 *  Objetivo: Desenvolver um sistema que gerencie números pares e ímpares
 *  Arquivo: Arquivo responsável por calcular os dados
 *  Autor: Diego de Pádua
 *  Data: 04/03/2026
 *  Versão: 1.0
 ***************************************************************************************************/

// calculo.js


/*
Função: ehPar

Objetivo:
Verificar se um número é par.

Funcionamento:

1. A função recebe um número como parâmetro (n).

2. O operador % (módulo) calcula o resto da divisão de n por 2.

3. Se o resto da divisão for igual a 0, significa que o número é par.

4. A função retorna true quando o número é par e false quando o número é ímpar.

Exemplos:
ehPar(4) → true
ehPar(7) → false
*/
function ehPar(n){
    return n % 2 == 0
}

//Percorrer um intervalo de números e separar quais são pares e quais são ímpares,
//além de contar quantos existem de cada tipo.
function separarParesImpares(inicial, final){

    let listaPares = ""
    let listaImpares = ""

    let qtdePares = 0
    let qtdeImpares = 0

    // percorre todos os números do intervalo,
    //começando em "inicial" e terminando em "final".
    //Para cada número do intervalo, a função ehPar(i) é chamada
    //para verificar se o número é par.
    for(let i = inicial; i <= final; i++){

        if(ehPar(i)){
            listaPares += i + "\n"
            qtdePares++
        }else{
            listaImpares += i + "\n"
            qtdeImpares++
        }

    }

    // a função retorna um objeto contendo
    return {
        pares: listaPares,
        impares: listaImpares,
        qtdePares: qtdePares,
        qtdeImpares: qtdeImpares
    }

}

module.exports = {
    separarParesImpares
}
