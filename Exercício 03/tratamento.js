function tratamentoDeDados(primeiroNumero, segundoNumero, operacaoMatematica){
    let numero1 = primeiroNumero;
    let numero2 = segundoNumero;
    let operacao1 = operacaoMatematica;

    if(numero1 == '' || isNaN(numero1) || numero2 == '' || isNaN(numero2)){
        console.log('ERRO: Somente números!')
        return false
    }else if(operacao1 == '' || !isNaN(operacao1)){
        console.log('ERRO: Digite a palavra correta');
        return false
    }else{
        return true
        

    }
}
function tratamentoDeVirgulas(primeiroNumero, segundoNumero){
    let valor1 = String(primeiroNumero).trim()
    let valor2 = String(segundoNumero).trim()

    const regex = /^\d+([.,]\d+)?$/;

    if (!regex.test(valor1)) {
        return null; // inválido

      }else if(!regex.test(valor2)) {
        return null; // inválido
      }

      valor1 = valor1.replace(",", ".");
      valor2 = valor2.replace(",", ".");

      return Number(valor1) || Number(valor2)

      





}
module.exports = {
    tratamentoDeDados,
    tratamentoDeVirgulas
}

