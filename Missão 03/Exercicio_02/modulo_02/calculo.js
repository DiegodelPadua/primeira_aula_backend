/***************************************************************************************************
 *  Objetivo: Desenvolver um sistema que gerencie as médias escolares de uma universidade
 *  Arquivo: Arquivo responsável por calcular os dados
 *  Autor: Diego de Pádua
 *  Data: 27/02/2026
 *  Versão: 1.0
 ***************************************************************************************************/

//média simples 
function calcularMedia(n1,n2,n3,n4){
    return (n1 + n2 + n3 + n4) / 4
}
//Verifica situação inicial
function verificarSituacao(media){

    if(media > 70){
        return "APROVADO"
    }else if(media < 50){
        return "REPROVADO"
    }else{
        return "EXAME"
    }
}
//média após exame
function calcularMediaExame(mediaAnterior, notaExame){
    return (mediaAnterior + notaExame) / 2
}
//verificar situação após exame
function verificarExame(mediaExame){
    if (mediaExame >= 60){
        return "APROVADO_NO_EXAME"
    }else{
        return "REPROVADO NO EXAME"
    }
}

module.exports = {
    calcularMedia,
    verificarSituacao,
    calcularMediaExame,
    verificarExame
}