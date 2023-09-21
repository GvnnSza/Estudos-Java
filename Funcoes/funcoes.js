//let x = "";
//console.log(x);
//x = "oi";

// *DECLARACAO DE FUNCAO*

// todo 1 - Declara a funçao

                        //*string -> //2 -> valor de soma()*
    function imprimeTexto(texto) {
        console.log(texto)
    }

// todo 2 - Executa a funçao (1 ou + vezes)

imprimeTexto(soma());
//imprimeTexto("outro texto")

// *HÁ 3 FORMAS DE ESCREVER FUNCOES*

    // ! 1 - Pode ser feito assim mas o resultado final vai ser Undefined

// function soma() {
//       const resultado = 2 + 2;
//    }

//    console.log(soma());

    // ! 2 - Trocar o const resultado = 2 + 2 POR *return* e o resultado vai dar 4 como esperado 

    //function soma() {
       //return 2 + 2;
    //}

    //console.log(soma());

     // ! 3 - Passar o return da soma para o imprime texto (to do 1 e 2)
        // todo Isso seria chamar uma funçao dentro de outra funçao
            // todo *Tirei o "oi" para imprimeTexto(soma()); no caso seria o to do 2*
                // todo function imprimeTexto(texto) era uma string e virou o valor de soma; no caso seria o to do 1

     function soma() {

        // *O RETURN SEMPR TEM Q SER A ULTIMA LINHA ANTES DE FECHAR O BLOCO  { 
            // * podemos ter outros codigos
            // * podemos ter outros console.log()
       return 2 + 2;
    }

    //console.log(soma());