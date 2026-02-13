const { error } = require("node:console");

function calcularNumeros(numero1, numero2, operacao1){

    let numero01 = Number(numero1);
    let numero02 = Number(numero2);
    let operacao01 = String(operacao1);

    if(operacao01 == 'SOMA' || operacao01 == 'Soma' || operacao01 == 'soma'){
        let operacao02 = numero01 + numero02
        return Number(operacao02.toFixed(2))

    }else if(operacao01 == 'SUBTRAÇÃO' || operacao01 == 'Subtração' || operacao01 == 'subtração'){
        let operacao02 = numero01 - numero02
        return Number(operacao02.toFixed(2))

    }else if(operacao01 == 'MULTIPLICAÇÃO' || operacao01 == 'Multiplicação' || operacao01 == 'multiplicação'){
        let operacao02 = numero01*numero02
        return Number(operacao02.toFixed(2))

    }else if(operacao01 == 'DIVISÃO' || operacao01 == 'Divisão' || operacao01 == 'divisão'){
        if(numero02 == 0){
            return false
        }
        let operacao02 = numero01/numero02
        return Number(operacao02.toFixed(2))

    }
       
   
    

    
    
   
    
}
module.exports = {
    calcularNumeros
}