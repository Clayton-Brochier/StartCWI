//As estruturas de controle são fundamentais para direcionar o comportamento dos programas, 
//permitindo que tomemos decisões, executemos ações repetidas vezes e lidemos com exceções.

//Estrutura if/else
//A estrutura if/else é usada para realizar decisões.
//O bloco if/else permite que o programa execute um conjunto de instruções se a condição especificada for verdadeira (true). 
//Ou seja, caso a condição seja falsa (false), o programa pode executar um conjunto alternativo de instruções no bloco else.

let idade = 20;

if (idade >= 18) {
    console.log("Você é maior de idade");
} else {
    console.log("Você é menorde idade.");
}

//Estrutura switch

//O bloco switch é uma alternativa ao if/else quando queremos avaliar uma variável em várias condições diferentes. 
//Enfim, ele verifica o valor de uma expressão e executa o bloco de código associado ao caso correspondente.

let diaSemana = 3;
let mensagem;

switch (diaSemana) {
    case 1:
        mensagem = "Hoje é segunda-feira.";
        break;

    case 2:
        mensagem = "Hoje é terça-feira.";
        break;

    case 3:
        mensagem = "Hoje é quarta-feira.";
        break;

    case 4:
        mensagem = "Hoje é quinta-feira.";
        break;

    case 5:
        mensagem = "Hoje é sexta-feira.";
        break;

    default:
        mensagem = "Fim de semana!";
}

console.log(mensagem);

//Operadores Condicionais Ternários

//Além do if/else e switch, podemos utilizar o operador condicional ternário ? para criar estruturas de decisão simples em uma única linha.

let idade1 = 15;
let resultado = idade1 >= 18 ? "Maior de idade" : "Menor de idade";

console.log(resultado);

//Utilização de Loops – while, do/while e for em JavaScript

//Loop while
//O loop while executa um bloco de código enquanto a condição especificada for verdadeira (true).
//Antes de cada iteração, o sistema avalia a condição e, se ela for verdadeira, executa o bloco.

let contador = 1;

while (contador <= 5) {
    console.log(`Contador: ${contador}`);
    contador++;
}

//Loop do/while
//O loop do/while é semelhante ao while, mas a condição é verificada após a primeira execução do bloco. 
//Isso garante que o sistema execute o bloco pelo menos uma vez, mesmo que a condição seja falsa.

let contador1 = 6;
do {
    console.log(`Contagem: ${contador1}`);
    contador1++
} while (contador1 <= 5)


//Loop for
//O loop for é uma estrutura de repetição mais compacta, que inclui a inicialização de uma variável, 
//a condição de continuação e o incremento em uma única linha.

for (var i = 1; i <= 3; i++) {
    console.log(`Contagem: ${i}`);
}

//Controle de Loops
//Dentro de loops, podemos usar as palavras-chave break e continue para controlar o fluxo de execução.
//Exemplo break: Interrompe imediatamente o loop e sai do bloco.

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;//O loop é interrompido quando i é igual a 5
    }
    console.log(i);
}

//Exemplo continue: Pula a iteração atual e avança para a próxima iteração.

for (var i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; // A iteração é pulada quando i é igual a 3
    }
    console.log(i);
}

//Utilização de Estruturas de Controle Avançadas em JavaScript – break, continue e try/catch

//Break
//A instrução break é utilizada dentro de loops (for, while, do...while) e switch para interromper imediatamente a execução do loop ou do switch.

for (var i = 0; i < 10; i++) {
    if (i === 5) {
        break; // O loop é interrompido quando i é igual a 5
    }
    console.log(i);
}

//Continue
//A instrução continue é utilizada dentro de loops para pular a iteração atual e avançar para a próxima iteração. 
//Enfim, isso possibilita que ignoremos certas condições dentro do loop, sem interrompê-lo por completo.

for (var i = 0; i < 10; i++) {
    if (i === 5) {
        continue; // A iteração é pulada quando i é igual a 5
    }
    console.log(i);
}

//Try/Catch
//A estrutura try/catch é usada para lidar com exceções (erros) que podem ocorrer durante a execução do código. Colocamos o código que pode gerar uma exceção no bloco try, 
//e caso uma exceção seja lançada, ela será capturada e tratada no bloco catch.


try {
    var numero = parseInt(prompt("Digite um número:" + numero));
    if (isNaN(numero)) {
        throw "Você não digitou um número válido."; // Lança uma exceção personalizada
    }
    console.log(prompt("O número digitado é: " + numero));
} catch (erro) {
    console.log(prompt("Ocorreu um erro: " + erro));
}

