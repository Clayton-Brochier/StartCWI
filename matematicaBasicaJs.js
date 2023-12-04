let meuInt = 5;
let meuFloat = 6.667;
console.log(meuInt);
console.log(meuFloat);

console.log(typeof meuInt);//retorna number
console.log(typeof meuFloat);//retorna number

let algo = "Clayton";
console.log(typeof algo);// retorna string

10 + 7;
60 % 3;
console.log(10 + 7); //retorna 17
console.log(60 % 3);// retorna 0 pois é o restante da divisão

var num1 = 10;
var num2 = 50;
var num3 = 9;
console.log(9 * num1);
console.log(num2 / num1);
console.log((num2 % num3) * num1);//primeiro o que está entre parenteses (50/9 = resta 5), logo 5*10 = 50
//precedência de operadores
console.log(num2 + num1 / 8 + 2);//como não foi sinalizado a ordem da operação, será realizado num1/8 + 2 + num2 = 53.25

var num1 = 4;
num1++;
console.log(num1);//retornará 5, pois foi incrementado
--num1;
console.log(num1);//retornará 4, pois foi feito decremento


var num2 = 6;
num2--;
console.log(num2);//retornará 5, pois foi feito decremento

var num3 = 10;
++num3;
console.log(num3);//retornará 11, pois foi feito incremento

var num4 = 5;
--num4
console.log(num4);//retornará 4, pois foi feito decremento

//Em resumo, tanto num++; quanto ++num; aumentam o valor da variável em 1, mas a diferença está em quando o aumento é aplicado 
//em relação à avaliação da expressão. O operador de sufixo (num++) primeiro retorna o valor original e depois incrementa, 
//enquanto o operador de prefixo (++num) incrementa primeiro e depois retorna o valor resultante.

//Operadores de atribuição

let x = 5;
let y = 10;
console.log(x += y);
console.log(x = x + 5);
console.log(x = x * 3);






