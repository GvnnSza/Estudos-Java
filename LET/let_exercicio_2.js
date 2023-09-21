// Exercicio 2 

const PromptSync = require("prompt-sync");

//calcule a área de um círculo utilizando a variável const. Você pode pedir ao usuário para inserir o valor do raio e, em seguida, calcular a área utilizando a fórmula A = π * r^2. Lembre-se de utilizar a constante Math.PI para representar o valor de π.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o valor do raio do círculo: ', (raio) => {
  const area = Math.PI * raio * raio;
  console.log(`A área do círculo é: ${area.toFixed(2)}`);
  rl.close();
});

//  EXPLICACAO DO EXERCICIO ACIMA

//  ? const readline = require('readline');: Aqui, estamos importando o módulo readline do Node.js. Isso permite que nosso programa utilize a funcionalidade de entrada e saída de texto no terminal.

//  ! const rl = readline.createInterface({ ... });: Estamos criando uma interface de leitura e escrita usando o método createInterface do módulo readline. Esta interface, denotada pela variável rl, nos permitirá interagir com o usuário.

//  ? input: process.stdin: Aqui, definimos process.stdin como a fonte de entrada de nossa interface. process.stdin representa a entrada padrão do terminal, ou seja, o que o usuário digitar no teclado.

//  ! output: process.stdout: Definimos process.stdout como a saída padrão de nossa interface. process.stdout representa a saída padrão do terminal, ou seja, onde as mensagens serão exibidas.

//  ? rl.question('Digite o valor do raio do círculo: ', (raio) => { ... });: Esta linha utiliza o método question da interface rl para fazer uma pergunta ao usuário.

//  ! 'Digite o valor do raio do círculo: ': Este é o texto que será exibido ao usuário, solicitando que ele insira o valor do raio do círculo.

//  ? (raio) => { ... }: Esta é uma função de retorno de chamada (callback) que será executada quando o usuário inserir sua resposta. A resposta do usuário será passada para essa função como o parâmetro raio.

//  ! const area = Math.PI * raio * raio;: Aqui, estamos calculando a área do círculo com base no valor do raio fornecido pelo usuário. Utilizamos a fórmula matemática A = π * raio^2 para isso.

//  ? console.log(A área do círculo é: ${area.toFixed(2)});: Esta linha exibe a área calculada no terminal usando console.log(). Utilizamos toFixed(2) para formatar o valor da área com duas casas decimais, tornando o resultado mais legível.

//  ! rl.close();: Esta linha fecha a interface rl após a pergunta ter sido respondida e a área ter sido exibida. Isso encerra a interação com o usuário.
