//Nome da função o mais descritivo possível, para quem ler possa saber o que ela faz (calculaQuadradoDeUmNumero)
//Argumentos vão dentro dos () e se receberem mais de um, são separados por vírgula.
//Declaração JS que define a função dentro {}.

function calculaQuadradoDeUmNumero(numero) {
    return numero * numero;
}

//Chamar a função com o argumento que nesse caso é o número 10. O resultado será 100
console.log(`Resultado é: ${calculaQuadradoDeUmNumero(10)}`);

var quadrado = function (numero){
    return numero * numero;
};

//Caso deseje mostrar o resultado, tilizar console.log
console.log(`O resultado é: ${quadrado(4)}`);

//Caso deseje apenas armazenar o resultado em uma variável para ser utilizado em outro momento
var resultado = quadrado(4);
