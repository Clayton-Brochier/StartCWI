// Importações do projeto
//prompt: Isso se refere ao objeto que lida com a entrada do usuário. No contexto de JavaScript em navegadores, o prompt é usado para exibir uma caixa de diálogo na qual o usuário pode inserir dados. No entanto, no seu exemplo, parece que você está usando o Node.js, onde o prompt é usado para obter entrada do usuário no console.
let prompt = require('prompt-sync')();

//Entrada de dados
console.log('Digite o primeiro valor: ');
let valor1 = prompt();
//Uma opção é colocar console.log dentro do prompt
let valor2 = prompt('Digite o segundo valor: ');


//Processamento de dados
//Caso seja realizado somente a variável soma, será concatenado os dois números
//É necessário transformar string em número por meio do 'parseFloat'
let v1 = parseFloat(valor1);
let v2 = parseFloat(valor2);
let soma = v1 + v2;


//Saída de dados
//console.log(`Você digitou o valor ${valor1}`);
console.log(`Resultado da soma entre os dois números é: ${soma}`);

