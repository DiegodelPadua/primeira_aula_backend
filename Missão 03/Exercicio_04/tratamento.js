/***************************************************************************************************
 *  Objetivo: Desenvolver um sistema para Calcular o Fatorial de um número fornecido pelo usuário
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

    if(texto == ""){
        return null
    }

    return texto
}

//Converter um valor recebido para número inteiro e verificar se ele é válido.
//Observação:
//A função aceita valores como "5" (string que representa um número inteiro)
//e rejeita valores como "5.5" (número decimal) ou letras.
function converterInteiro(valor){
    
    let numero = Number(String(valor).trim())

    if(isNaN(numero)){
        return null
    }

    if(!Number.isInteger(numero)){
        return null
    }

    return numero
}

//Validar se um número pode ter o fatorial calculado de acordo com
//as regras definidas no exercício.
function validarFatorial(n){
    
    // regras do enunciado
    if(n === 0) return { ok: false, msg: "Não existe fatorial de 0." }
    if(n === 1) return { ok: false, msg: "Não é possível calcular o fatorial de 1. Digite um número maior do que 1." }
    if(n < 0) return { ok: false, msg: "Não é possível calcular fatorial de número negativo." }

    return { ok: true, msg: "" }
}

module.exports = {
    textoObrigatorio,
    converterInteiro,
    validarFatorial
}