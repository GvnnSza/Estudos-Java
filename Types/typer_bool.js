// True > iguais (exemplo 5 = 5, logo verdadeiro, iguais)
// False > diferentes (exemplo 10 ≠ 5, logo falso, nao igual)


const primeiroNumero = 5;
const segundoNumero = 5;

let cadastroAtivado = true;

console.log(primeiroNumero === segundoNumero);

// Exercicio Verificar Senha

//1- Solicitar a senha do usuario

var SenhaDigitada = prompt("Digite Sua senha:");

//2- Verificar se a senha é igual a "123456"

var senhaCorreta = "123456";
var acessoPermitido = SenhaDigitada === senhaCorreta;

//3- Exibir o Resultado

if (acessoPermitido)    {
    console.log("Acesso Permitido, seja bem vindo!");
    } else {
        console.log("Acesso Negado!");
}
