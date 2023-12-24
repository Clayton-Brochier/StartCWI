/* testa no inicio e depois executa o código */
var c = 1
/*while (c <= 6) {
    console.log("tudo bem");
    c ++
}*/

/*executa o código e depois testa a condição com teste lógico no final*/
do {
    console.log(`Passo ${c}`);
    c++
} while (c <= 6)

/*O laço for consiste em três expressões e uma sequência de instruções:
    1) inicialização - esta expressão é executada antes da execução do primeiro laço, sendo geralmente usada para criar um contador. A variável criada aqui fica no escopo do laço. Tão logo o laço se encerre, ela é destruída.
    2) condição - esta expressão é verificada a cada iteração antes da execução do laço. Se ela for true, as instruções ou o código do laço é executado. Se ela for false, o laço é interrompido. Se essa expressão for omitida, será sempre true.
expressãoFinal - esta expressão é executada após cada iteração do laço. Ela é usada normalmente para incrementar um contador, mas também pode ser usada para decrementá-lo.
    3) instruções - o código dentro do bloco a ser repetido no laço. Pode ser uma única ou várias linhas de código.

    Qualquer uma das três expressões ou mesmo as próprias instruções – o código dentro do bloco – podem ser omitidas.*/

for (let i = 0; i < 9; i++) {
    console.log(i);
    
}

/*Use break para sair de um laço for antes de a expressão da condição ser false:*/

for(let j = 1; j < 10; j += 2) {
    if(j === 7){
        break; //vai parar quando atingir esse valor, sem executar mais nada após isso
    }
    console.log(j);
}

/*Armadilha comum: exceder os limites de um array
Ao iterar por um array, é fácil exceder os limites dele acidentalmente. Por exemplo, 
seu laço pode tentar fazer referência ao 4º elemento de um array que tem apenas 3 elementos:
Isso ocorre porque os índices em uma matriz começam do zero.
Há duas maneiras de consertar esse código: definir a expressão de condição como i < arr.length ou i <= arr.length - 1. */

const arr = [1, 2, 3];
for (let t = 0; t <= arr.length; t++) {
    console.log(arr[t]);
}

/*Laço for...in
O laço for...in itera pelas propriedades de um objeto. Para cada propriedade, as instruções dentro do laço são executadas.*/

const capitais = {
    a: "Atenas",
    b: "Belgrado",
    c: "Cairo"
};

for (let chave in capitais) {
    console.log(chave + ": " + capitais[a]);
}
/*Essencialmente, capitais[chave] significa "pegar o valor associado à chave atual no objeto capitais". Isso é necessário porque a 
chave não é conhecida antecipadamente e está sendo dinamicamente fornecida pela variável chave durante a execução do loop.*/


/*laço for...of
O laço for...of itera pelos valores de muitos tipos de iteráveis, incluindo arrays e tipos especiais de coleções, 
como Set e Map. Para cada valor no objeto iterável, as instruções dentro do laço são executadas.*/

const array = [ "Fred", "Tom", "Bob" ];

for (let x of array) {
  console.log(x);
}

/*Iterar por um Map:*/
const m = new Map();
m.set(1, "preto");
m.set(2, "vermelho");

for (let n of m) {
  console.log(n);
}