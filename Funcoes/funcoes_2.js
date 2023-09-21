// todo Declare a função 'minhaFunção'
function minhaFuncao(objeto) {
  objeto.marca = "Toyota";
}

/*
 todo Declare a variável 'meucarro';
 todo crie e inicialize um novo Objeto;
 todo atribua referência para 'meucarro'
 */
var meucarro = {
  marca: "Honda",
  modelo: "Accord",
  ano: 1998,
};

// todo Exibe 'Honda'
console.log(meucarro.marca);

//todo Passe a referência do objeto para a função
minhaFuncao(meucarro);


//todo Exibe 'Toyota' como valor para a propriedade 'marca' do objeto, mudado pela função 
console.log(meucarro.marca);
