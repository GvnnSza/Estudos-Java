const forma = "quadrado";
const altura = 5;
const comprimento = 7;
let area;

if(forma === "quadrado"){
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area)

// Pra fixar: Caso ocorra que a forma na linha 1 seja quadrado e na linha 6 seja triangulo (EXEMPLO), o if nao vai executar e vai pular para a linha 8 do ELSE (se nao) e irá executar o comando da (area * comprimento) / 2

// EXERCICIO 

// Escreva um programa em JavaScript que calcule a área de um círculo. Utilize a const para declarar o valor de PI como 3.14 e o let para declarar o raio do círculo. Em seguida, utilize a fórmula da área do círculo (A = PI * raio * raio) para calcular e exibir a área.

const f = "circulo";
const pi = 3.14;
let raio = 5;
let areaCirculo;

if( f === "circulo"){
    areaCirculo = pi * raio * raio;
}

console.log("A area do circulo é: ", areaCirculo)