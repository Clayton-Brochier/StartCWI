//lê do arquivo entrada.txt as informações para resolução.
let input = require('fs').readFileSync('entrada.txt', 'utf8');
//split('\n'): O método split('\n') divide a string em partes sempre que encontra um caractere de nova linha ('\n').
let lines = input.split('\n')
//entrada de dados

let numero1 = lines.shift();
let numero2 = lines.shift();

let n1 = parseInt(numero1);
let n2 = parseInt(numero2);

let soma = n1 + n2;

console.log(`X = ${soma}`);
