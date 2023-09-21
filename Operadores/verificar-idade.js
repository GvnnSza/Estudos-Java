//Escreva uma função em JavaScript chamada "verificarIdade" que recebe como parâmetro a idade de um cliente. A função deve utilizar o operador ternário para verificar se o cliente tem idade suficiente para consumir bebidas alcoólicas. Se a idade for maior ou igual à idade mínima (por exemplo, 18 anos), a função deve retornar a mensagem "Pode consumir bebidas alcoólicas". Caso contrário, a função deve retornar a mensagem "Não pode consumir bebidas alcoólicas".

// todo Função que verifica se um cliente pode consumir bebidas alcoólicas com base na idade

const prompt = require("prompt-sync")(

    )

    // TODO Função que verifica se um cliente pode consumir bebidas alcoólicas com base na idade

    // todo Definimos uma função chamada "verificarIdade" que recebe a idade do cliente como parâmetro.

    // todo Usamos o operador ternário ? para verificar se a idade é maior ou igual a 18. Se for, a mensagem será "Pode consumir bebidas alcoólicas"; caso contrário, será "Não pode consumir bebidas alcoólicas".

        function verificarIdade(idade){
            if(idade >= 18) {
                return "Pode beber Bebida Alcoolica";
            } else {
                return "Nao pode Beber bebida alcoolica, vá comprar um suco ou refrigerante!"
            }
        }

        // todo Solicitar ao usuario que insira a idade

        const idadeCliente = parseInt(prompt("Digite a idade do cliente: "));

        // todo Chamar a funcao e exibir o resultado

        const resultado = verificarIdade(idadeCliente);
        console.log(resultado);