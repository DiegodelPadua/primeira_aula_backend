/***************************************************************************************************
 *  Objetivo: Desenvolver um sistema que gerencie as médias escolares de uma universidade
 *  Arquivo: Arquivo responsável por tratar os dados
 *  Autor: Diego de Pádua
 *  Data: 27/02/2026
 *  Versão: 1.0
 ***************************************************************************************************/

//tratamento de texto obrigatório
//garante que o valor (não seja NULL ou UNDEFINED, não seja VAZIO e não seja só espaço em branco)
function textoObrigatorio(valor){
    const txt = String(valor ?? "").trim()
    return txt.length > 0 ? txt : null
}
//tratamento para validar e padronizar o sexo 
function normalizarSexo(valor){
    const s = String(valor ?? "").trim(). toUpperCase()
    if(s === "M" || s ==="F") return s
    return null
}
function converterNota(valor){
    //padronização de virgula
    const n = Number(String(valor ?? "").trim().replace(",", "."))
    if(!Number.isFinite(n)) return null
    return n 
}
//verifica se a nota é um valor entre 0 e 100
//Number.isFinite(nota) ele verifica se o valor é um número de verdade, não é infinito não é NaN e não é String
function validarNotaEntre0e100(nota){
    return Number.isFinite(nota) && nota >= 0 && nota <= 100;
}
//base: "alun" -> aluno/aluna; "professor" é especial
function palavraPorSexo(base, sexo){
    if(base === "professor") return sexo === "F" ? "professora" : "professor"
    if(base === "aluno") return sexo === "F" ? "aluna" : "aluno"
    return base;

}

module.exports = {
    textoObrigatorio,
    normalizarSexo,
    converterNota,
    validarNotaEntre0e100,
    palavraPorSexo
}


