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

/*Há duas maneiras de consertar esse código: definir a expressão de condição como i < arr.length ou i <= arr.length - 1.

Exercícios de Laços e Loops em JavaScript

Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido. */

let nota;

for (;;) {
  nota = parseFloat(prompt(`Digite uma nota entre zero e dez: `));
  if (!isNaN(nota) && nota >= 0 && nota <= 10) {
    alert(`Você digitou a nota ${nota}.`);
    break;
  } else {
    alert("Nota inválida! A nota  deve estar entre zero e dez.");
  }
}

/*
for (;;) { ... }: Um loop for sem condição de parada explícita, tornando-o infinito. Isso significa que o código dentro do loop será executado repetidamente até que seja interrompido pelo comando break.

nota = parseFloat(prompt("Digite uma nota entre zero e dez:"));: Solicita ao usuário que insira uma nota por meio do prompt. A função parseFloat é usada para converter a entrada do usuário em um número decimal e armazenar na variável nota.

if (!isNaN(nota) && nota >= 0 && nota <= 10) { ... }: Verifica se a nota é um número (!isNaN(nota)) e se está dentro do intervalo desejado (entre 0 e 10).

alert("Você digitou a nota " + nota + ".");: Se a nota for válida, exibe uma mensagem com a nota e encerra o loop usando break.

else { ... }: Se a nota não for válida, exibe uma mensagem de valor inválido e continua o loop, solicitando uma nova entrada do usuário.*/

