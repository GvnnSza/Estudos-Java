// EXERCICIO

// Escreva um programa em JavaScript que peça ao usuário para digitar um número e, em seguida, verifique se esse número é maior do que 10. Se for, exiba a mensagem "O número é maior do que 10", caso contrário, exiba a mensagem "O número é menor ou igual a 10".

var prompt = require("prompt-sync")(

)

//  Solicitar ao usuario que insira um numero

const N = parseFloat(prompt("Digite um numero: "));

//  Verificar se o numero é maior do que 10

if (N > 10){
    console.log("O numero digitado é maior do que 10");
}else {
    console.log("O numero digitado é menor do que 10");
}

