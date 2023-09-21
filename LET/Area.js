//calcule a área de um círculo utilizando a variável const. Você pode pedir ao usuário para inserir o valor do raio e, em seguida, calcular a área utilizando a fórmula A = π * r^2. Lembre-se de utilizar a constante Math.PI para representar o valor de π.


var prompt = require("prompt-sync")(

)

const raio = Number(prompt("Digite a area do circulo: "));
const area = Math.PI * raio * raio;

console.log(area.toFixed(2))