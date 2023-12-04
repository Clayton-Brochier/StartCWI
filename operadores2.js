//Atribuição 
//Representado pelo símbolo (=), serve para atribuir ao operando do lado esquerdo, 
//um determinado valor definido pelo operando do lado direito.

let a = "a";
console.log(a);

let arr = []
console.log(arr)

let obj = {}
console.log(obj)

let func = function(){
    return "Funciona também com funções"
}
//Comparação e Igualdade
//Existem dois tipos de comparação: a abstrata, representado pelo símbolo (==) 
//e a estrita, representada pelo símbolo (===).

//Comparação abstrata
//Nessa comparação, o JavaScript tenta converter os valores 
//para o mesmo tipo antes de fazer a comparação.
console.log (1 == '1') //imprime true, pois converte 1(numeral) para string

console.log(0 == null) //imprime false
//Na comparação abstrata, se um dos operandos for um número e o outro for null, 
//o null será tratado como 0 apenas se o operador de comparação for ==. No entanto, null não é considerado igual a zero, então a expressão resulta em false.

//Na comparação abstrata, os valores null e undefined são tratados como iguais quando você utiliza 
//o operador de igualdade ==.
console.log(null == undefined) //imprime true

//Quando se trata de objetos, o JavaScript vai comparar endereços de memória, 
//que serão os mesmos quando se trata do mesmo objeto. Comparações entre dois objetos diferentes geram resultados falsos
let objeto1 = {'chave': 'valor'}
let objeto2 = {'chave': 'valor'}
console.log(objeto1 == objeto2) //imprime false pois compara as referências de objetos, não os conteúdos.

//Comparação Estrita
//A comparação estrita é realizada sem conversão de tipos.
//Também conhecida como identidade, diferente da abstrata, não faz a conversão de tipo antes da comparação. Ou seja, 
//os operandos só vão retornar true caso sejam estritamente iguais.

console.log(1 === '1') //imprime false
console.log(null === undefined) //imprime false
console.log(0 === null) //imprime false

let objeto3 = {'chave': 'valor'}
let objeto4 = {'chave': 'valor'}
console.log(objeto3 === objeto4) //imprime false pois são duas referências de memória diferentes

//Desigualdade
//A desigualdade é realizada com o operador != e !==.
//O operador de desigualdade (!=) retorna true se os operandos não forem iguais.    

console.log(1 != 2) //imprime true
console.log(1 != '1') //imprime false
console.log(0 != null) //imprime true

let objeto5 = {'chave': 'valor'}
let objeto6 = {'chave': 'valor'}
console.log(objeto5 != objeto6) //imprime true pois de fato são duas referências de memória diferentes

//Destructuring
//O Destructuring é um recurso do ES6 que permite extrair   
//valores de um array ou de um objeto e atribuí-los a variáveis.

let obj1 = { nome: 'Maria', sobrenome: 'das Dores', idade:  35};
//Este é um exemplo de desestruturação de objeto em JavaScript. 
//Ele está extraindo a propriedade sobrenome do objeto obj1 e atribuindo seu valor à variável sobrenome.
let {sobrenome} = obj1;
console.log(sobrenome);

//Ao tentar acessar uma propriedade que não existe, ele retorna undefined:
const obj2 = { nome: 'Maria', sobrenome: 'das Dores', idade:  35}

const { peso } = obj2

console.log(peso)//imprime undefined

let x, y
x=2
y=3
console.log(x + y);

console.log(1 + 1);
console.log(1 + "1");
console.log(true + 1);//true é interpretado como 1
console.log(false + 1);//false é interpretado como 0

//Porém, ao tentar fazer uma soma de String e Boolean, o resultado é uma concatenação:
console.log("true" + true) //imprime truetrue


//Operadores Relacionais
//A depender da relação entre dois operadores, os operadores relacionais retornarão verdadeiro (true) ou falso (false).

console.log(3 > 2) //imprime true
console.log(3 < 2) //imprime false
console.log(3 >= 2) //imprime true
console.log(3 <= 2) //imprime false

//Operadores Lógicos


//“E” lógico (&&)
//O “e” lógico vai retornar o valor booleano true quando ambas as proposições ambas forem verdadeiras. 
//Se pelo menos uma delas for falsa, o resultado é false.
console.log(2 < 3 && 3 > 2) //imprime true
console.log(2 < 3 && 3 < 2) //imprime false
console.log( 2 < 3 && 3 > 2 && 10 <= 100)//usando mais de duas proposições - imprime true

//“Ou” lógico ( || )
//no “ou” lógico, basta uma das proposições estar verdadeira que o resultado impresso é true.
console.log(2 < 3 || 3 > 2) //imprime true
console.log(2 < 3 || 3 < 2) // imprime true
console.log( 2 < 3 || 3 > 2 || 10 <= 100)//imprime true

//Negação Lógica ( ! )
//A negação vai simplesmente inverter o valor booleano da proposição. Ou seja, 
//se a proposição tem o valor true, a negação vai inverter para false, e vice-versa.
//ATENCAO
//O uso de dupla negação (!!) volta a proposição para o seu valor booleano de origem.
console.log(2 < 3) //imprime true
console.log(!(2 < 3)) //negação da afirmativa - imprime false
console.log(!!(2 < 3)) //negação da negação, retorna para o valor original - imprime true

//Operadores Unários
//Os operadores unários podem ter duas formas: prefixada, quando são usados antes do operando; 
//e pós-fixada, quando são usados depois do operando.
//nós temos o incremento (++) e o decremento (–). O (-) pode ser usado também antes de números para inverter o seu valor.
num1 = 1
num2 = 2
num3 = 3

num1++ //forma pós-fixada
console.log(num1) //imprime 2 - sofreu incremento de uma unidade

--num2 //forma pré-fixada
console.log(num2) //imprime 1 - sofreu decremento de uma unidade

console.log(-num3) //imprime -3 - o número negativo equivalente

//Operadores Ternários

//uncionam como simplificações de comparações if/else. 
//Resume a mesma comparação a somente uma linha, tendo a seguinte interpretação:
//A afirmação é verdadeira ? se sim, retorne a primeira opção : se falso, retorne a segunda
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado';
console.log(resultado(7.1));
console.log(resultado(6.7));

//Esse operador ternário também pode ser entendido da seguinte forma:
function resultado (nota){
    if (nota >= 7) {
        return 'Aprovado'
    } else {
        return 'Reprovado'
    }
}








