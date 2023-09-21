var prompt = require("prompt-sync")(
    
)

// Passo 1: Solicitar ao usuário que insira o valor do raio
const raio = parseFloat(prompt("Digite o valor do raio do círculo:"));

// Passo 2: Calcular a área do círculo usando a fórmula A = π * raio^2
const area = Math.PI * raio * raio;

// Passo 3: Exibir a área calculada
console.log("A área do círculo é:", area.toFixed(2));