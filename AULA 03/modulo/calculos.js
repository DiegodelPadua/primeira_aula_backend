/**
 *  Objetivo: Arquivo responsável pelas funções de cálculos para este projeto
 *  Autor: Diego de Pádua
 *  Data: 12/02/2026
 *  
 */





//Criando uma função para calcular o valor da compra parcelada
//Metodo tradicional de criar uma função
//Toda função tem uma entrada de argumento 
// Function nome(entrada de Argumentos)
//{"Return --->Saída"}
//Qualquer função que for criada, obrigatoriamente tem que ter uma saída
function calcularJurosCompostos(valorCompra, taxaJuros, tempoPagto){
    //Recebe os argumentos da função em variáveis locais
    //As variáveis (valor, taxa e tempo são numéricas por conta da conversão).
    //Mas os argumentos (valorCompra, taxaJuros, tempoPagto ainda serão Strings).
    let valor =  Number(valorCompra);
    let taxa = Number(taxaJuros);
    let tempo = Number(tempoPagto);

    //Validação para entradas vazias ou caracteres inválidos
    if(valorCompra == '' || isNaN(valorCompra) || tempoPagto == '' || isNaN(tempoPagto)){
        console.log ('ERRO: Valoes de compra ou tempo de pagamento estão incorretos')
        return false
    }else{
    
        //Chama a função para converter o número em percentual
        let percentual = calcularPercentural(taxa);

        //Validação para o erro do percentual na função calcularPercentual()
        if(percentual){

            let montante = valor * ((1+Number(percentual))**tempo);
            return Number(montante.toFixed(2));
        }else{

            console.log('ERRO: Valor da taxa está incorreto.')
            return false;
        }
    }
}
function calcularPercentural(numero){
    let numeroPercentual = Number(numero);
    
    //Validação para verificar se é um número válido
    if(numero == '' || numero <= 0 || isNaN(numero)){
        return false; //Não pode processar
    }else{
        //Processamento do cálculo do percentual
        let percentual = numeroPercentual/100;
        return Number(percentual.toFixed(2));
    }

}

//Tornando as duas funções públicas para este projeto
module.exports = {
    calcularJurosCompostos,
    calcularPercentural
}