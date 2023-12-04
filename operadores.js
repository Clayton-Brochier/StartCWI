//Operadores e operações//

//variável tipo inteiro
let n1 = 10;
let n2 = 2;
//variável tipo string
let n3 = "2";

document.write(`N1 ${n1} <br>`);
document.write(`N2 ${n2} <br>`);
document.write(`N3 ${n3} <br>`);

console.log(n1 + n2);//adição
console.log(n1 - n2);//subtração
console.log(n1 * n2);//multiplicação
console.log(n1 / n2);//divisão
console.log(n1 % n2);//resto ou módulo

console.log(n2 == n3);//igual a 
console.log(n2 === n3);//identico a
//Este é um teste condicional que compara duas variáveis, n2 e n3, usando o operador !=. 
//O operador != significa "não igual". Portanto, n2 != n3 retorna true 
console.log(n2 != n3);//diferente de nao=
//Este é um operador de comparação estrita em JavaScript. Ele verifica se os valores são diferentes e também se os tipos dos valores são diferentes.
//!== retorna true se os valores são diferentes ou se os tipos são diferentes, e retorna false se os valores são iguais e os tipos também são iguais.
console.log(n2 !== n3);//não identico

let a = true;
let b = false;

console.log(a && b);//e and
console.log(a || b);//ou or
console.log(!a);//negação not
console.log(!b);

console.log(n1 > n2);
console.log(n1 < n2);  
console.log(n1 >= n2);
console.log(n1 <= n2);
console.log(n1 > n2 && n3);
console.log(n1 < n2 || n3);

