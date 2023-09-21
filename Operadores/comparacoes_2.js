// todo Função que compara dois valores usando os operadores "==" e "==="
function compararValores(valor1, valor2) {
    if (valor1 == valor2) {
      if (valor1 === valor2) {
        return "Os valores e os tipos são iguais.";
      } else {
        return "Os valores são iguais, mas os tipos são diferentes.";
      }
    } else {
      return "Os valores e os tipos são diferentes.";
    }
  }
  
  // todo Exemplos de uso da função
  console.log(compararValores(5, "5")); 
  
  // todoSaída esperada: "Os valores são iguais, mas os tipos são diferentes."

//      ?nao so compara os valores mas tambem os tipos de dado (Numero, String)
//      ! (===)

  console.log(compararValores(10, 10)); 
  
  // todo Saída esperada: "Os valores e os tipos são iguais."

//      ?fazer uma comparacao de valor exemplo: const numero = 456; // const numeroString = "456"; , logo sera True
//       ! (==)