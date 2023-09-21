//  parametros de funcao
            //2       + //2
function soma(numero1, numero2){
    return numero1 + numero2;
}

console.log(soma(2, 2))
console.log(soma(245, 20))
console.log(soma(-500, 60))

// ! ORDEM DOS PARAMETROS 
    // TODO EXEMPLO
        // ? console.log(soma((numero1)245, (numero2)20))

// TODO Exercicio de pratica (1)
    function nomeIdade(nome, idade) {
        return `meu nome é ${nome} e minha idade é ${idade}`;
    }

    console.log(nomeIdade(24, "Giovani")) 
        // ! ERRADO, O "GIOVANI" VEM PRIMEIRO , (IDADE) 24 DEPOIS

// TODO Exercicio de pratica (2)
    function ad(num1, num2) {
        return num1 + num2;
    }
                    // TODO num1 * 1 VEZES(*) num2 * 1 -> eles mesmos
    function multiplica(num1 = 1, num2 = 1) {
        return num1 * num2;
    }
                                
        console.log(multiplica(soma(4, 5), soma(3, 3)))
                                // ? Somou 4+5   // somou 3+3 
                                // ? Logo apos teve a multiplicacao dos 2 numeros, 9 * 6 = 54
                                // ! SE apagar o: soma(3, 3) e deixar o resto, acaba se tornando um *NaN*