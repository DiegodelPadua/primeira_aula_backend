/***************************************************************************************************
 *  Objetivo: Desenvolver um sistema que gerencie números pares e ímpares
 *  Arquivo: Arquivo responsável por tratamento de dados
 *  Autor: Diego de Pádua
 *  Data: 04/03/2026
 *  Versão: 1.0
 ***************************************************************************************************/


// tratamento.js

//Garantir que um texto informado pelo usuário não esteja vazio.
//Se o valor estiver vazio ou apenas com espaços, a função retorna null.
//Caso contrário, retorna o texto tratado.
function textoObrigatorio(valor){
    let texto = String(valor).trim()
    if(texto == "") return null
    return texto
}

//Converter um valor recebido para número inteiro e validar se ele é realmente
//um inteiro válido.
function converterInteiro(valor){
    let n = Number(String(valor).trim())
    if(isNaN(n)) return null
    if(!Number.isInteger(n)) return null
    return n
}


/*
Função: validarIntervalo

Objetivo:
Verificar se um número está dentro de um intervalo permitido.

Parâmetros:
- n   → número que será verificado
- min → valor mínimo permitido
- max → valor máximo permitido

Funcionamento:

1. A função recebe três valores: o número a ser validado (n),
   o valor mínimo (min) e o valor máximo (max).

2. Ela verifica se o número "n" é maior ou igual ao valor mínimo
   e menor ou igual ao valor máximo.

3. Se o número estiver dentro desse intervalo, a função retorna true,
   indicando que o valor é válido.

4. Caso o número esteja fora do intervalo, a função retorna false,
   indicando que o valor é inválido.
*/
function validarIntervalo(n, min, max){
    if(n >= min && n <= max) return true
    return false
}

//exportar arquivos 
module.exports = {
    textoObrigatorio,
    converterInteiro,
    validarIntervalo
}