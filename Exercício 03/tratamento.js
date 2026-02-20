function tratamentoDeVirgulas(primeiroNumero, segundoNumero){

    let valor1 = String(primeiroNumero).trim().replace(",", ".");
    let valor2 = String(segundoNumero).trim().replace(",", ".");

    const regex = /^\d+([.,]\d+)?$/;

    if (!regex.test(valor1)) {
        return null; // inválido

      }else if(!regex.test(valor2)) {
        return null; // inválido
      }

      return [Number(valor1), Number(valor2)]


}

function tratamentoDeDados(primeiroNumero, segundoNumero, operacaoMatematica){
    let numero1 = primeiroNumero;
    let numero2 = segundoNumero;
    let operacao1 = operacaoMatematica;

    if(numero1 == '' || isNaN(numero1) || numero2 == '' || isNaN(numero2) || operacao1 == '' || !isNaN(operacao1)){
        return false
    }else{
        return true   

    }
}

module.exports = {
    tratamentoDeDados,
    tratamentoDeVirgulas
}

