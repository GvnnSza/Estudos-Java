const nome = "Giovani";
const idade = 2023 - 1999;
const cidadeDeNascimento = "Brasilia";

// ! STRING FEITO COM CONCATENAÇAO (+) NAO RECOMENDADO;

//  const apresentacao = "meu nome é " + nome + " minha idade é " + idade + " e nasci na cidade de " + cidadeDeNascimento;

// ! TEMPLATE STRING FEITO COM ${EXEMPLO DAS CONST ATRIBUIDAS A = NOME / IDADE / CIDADE DE NASCIMENTO} E TROCAR "" para `` ($ SO FUNCIONA COM `` JUNTAMENTE COM {chaves});

const apresentacao = `meu nome é ${nome}, minha idade é ${idade}, e nasci na cidade de ${cidadeDeNascimento}`;

console.log(apresentacao)