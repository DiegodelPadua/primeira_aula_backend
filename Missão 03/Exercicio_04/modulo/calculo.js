/***************************************************************************************************
 *  Objetivo: Desenvolver um sistema para Calcular o Fatorial de um número fornecido pelo usuário
 *  Arquivo: Arquivo responsável por calcular os dados
 *  Autor: Diego de Pádua
 *  Data: 04/03/2026
 *  Versão: 1.0
 ***************************************************************************************************/

// calculo.js

/*
Função: calcularFatorial

Objetivo:
Calcular o fatorial de um número informado.

O fatorial de um número é o resultado da multiplicação dele
por todos os números inteiros menores até chegar em 1.

Exemplo:
5! = 5 × 4 × 3 × 2 × 1 = 120

Funcionamento:

1. A função recebe um número como parâmetro (n).

2. É criada a variável "resultado" iniciando com valor 1.
   O valor 1 é usado porque ele não altera a multiplicação.

3. É utilizado um laço for que começa em "n"
   e vai diminuindo até chegar em 1.

4. Em cada repetição do laço, o valor atual de "i"
   é multiplicado pela variável "resultado".

5. O resultado vai sendo acumulado até terminar o laço.

6. Quando o laço termina, a função retorna o valor final
   do fatorial calculado.
*/
function calcularFatorial(n){
    let resultado = 1

    for(let i = n; i >= 1; i--){
        resultado = resultado * i
    }

    return resultado
}

//Montar uma string que representa a expressão do cálculo do fatorial,
//mostrando a sequência de multiplicações.
function montarExpressaoFatorial(n){
    // retorna "5x4x3x2x1"
    let expressao = ""

    for(let i = n; i >= 1; i--){
        expressao += i

        if(i > 1){
            expressao += "x"
        }
    }

    return expressao
}

module.exports = {
    calcularFatorial,
    montarExpressaoFatorial
}