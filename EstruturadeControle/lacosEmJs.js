/* Os laços são usados em JavaScript para realizar tarefas repetidas com base em uma condição. 
As condições tipicamente retornam true ou false. Um laço continuará em execução até que a condição definida retorne false.*/

/*Laço "FOR" Sintexe*/

/* for (inicialização; condição; expressãoFinal) {
    // instruções a serem executadas repetidamente
  }
*/
/*O laço for consiste em três expressões e uma sequência de instruções:

INICIALIZAÇÃO - esta expressão é executada ANTES da execução do laço, sendo geralmente usada para criar um contador.
A variável criada aqui fica no escopo do laço. Tão logo se encerre, ela é destruída.

CONDIÇÃO - esta expressão é verificada a cada iteração antes da execução do laço. Se ela for true, as instruções ou o código do laço é executado. 
Se ela for false, o laço é interrompido. Se essa expressão for omitida, será sempre true.

EXPRESSÃO FINAL - esta expressão é executada após cada iteração do laço. Ela é usada normalmente para incrementar um contador, mas também pode ser usada para decrementá-lo.

INSTRUÇÕES - o código dentro do bloco a ser repetido no laço. Pode ser uma única ou várias linhas de código.

Qualquer uma das três expressões ou mesmo as próprias instruções – o código dentro do bloco – podem ser omitidas.
Laços for são normalmente usados para repetir instruções/executar código por um número definido de vezes. 
Além disso, é possível usar a instrução break para sair do laço precocemente, antes de a expressão de condição ser false.

EXEMPLOS:*/

/*Iterar por números inteiros de 0 a 8. */

for (let i = 0; i < 9; i++) {
    console.log(i);
};

/*Use break para sair de um laço for antes de a expressão da condição ser false:*/

for (let j = 1; j < 10; j += 2) {
    if (j === 7) {
        break
    }
    console.log(`Número de elefantes ${j}`);
}

/*ARMADILHA COMUM: exceder os limites de um array
Ao iterar por um array, é fácil exceder os limites dele acidentalmente. 
Por exemplo, seu laço pode tentar fazer referência ao 4º elemento de um array que tem apenas 3 elementos:*/

const arr = [1, 2, 3];

for (let a = 0; a <= arr.length; a++) {
    console.log(`Valor ${arr[a]}`);
}
/*Saída
Valor 1
Valor 2
Valor 3
Valor undefined */

/*Há duas maneiras de consertar esse código: definir a expressão de condição como i < arr.length ou i <= arr.length - 1.*/