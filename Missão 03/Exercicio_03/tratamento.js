/***************************************************************************************************
 *  Objetivo: Desenvolver um sistema para gerenciar o cálculo de uma tabuada
 *  Arquivo: Arquivo responsável por tratamento de dados
 *  Autor: Diego de Pádua
 *  Data: 04/03/2026
 *  Versão: 1.0
 ***************************************************************************************************/

//tratamento

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

//Converter um valor recebido para número e verificar se a conversão é válida.
function converterNumero(valor){
    let numero = Number(valor)

    if(isNaN(numero)){
        return null
    }

    return numero
}

//Converter um valor recebido para o tipo número e verificar se essa conversão é válida.
function converterNumero(valor){
    let numero = Number(valor)

    if(isNaN(numero)){
        return null
    }

    return numero
}

//Verificar se o número informado para a tabuada está dentro do intervalo permitido.
function validarTabuada(valor){
    if(valor >= 2 && valor <= 100){
        return true
    }

    return false
}

//Verificar se o valor informado para o contador da tabuada está dentro do intervalo permitido.
function validarContador(valor){
    if(valor >= 1 && valor <= 50){
        return true
    }

    return false
}


module.exports ={
    textoObrigatorio,
    converterNumero,
    validarTabuada,
    validarContador
}