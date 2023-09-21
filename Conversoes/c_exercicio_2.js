//EXERCICIO

//recebe um número como parâmetro e retorna uma string informando se o número é par ou ímpar. Você pode utilizar a conversão implícita para verificar se o número é divisível por 2. Se for, retorne a string "par", caso contrário, retorne a string "ímpar". Lembre-se de testar a função com diferentes números para garantir que está funcionando corretamente.

//  que permite receber entrada do usuário diretamente no terminal.

const prompt = require("prompt-sync")(

)

// Funcao que verifica se o numero é par ou impar
    function verificarParOuImpar(numero){
        if(numero % 2 === 0){
            return "par";
        } else {
            return  "impar";
        }
    }

    //  Solicitar ao usuario que insira um numero
    const numero = parseFloat(prompt("Digite um numero"));

    //  Chamar a funcao e exibir o resultado
    const resultado = verificarParOuImpar(numero);
    
    console.log(`O número é ${resultado}.`);
    