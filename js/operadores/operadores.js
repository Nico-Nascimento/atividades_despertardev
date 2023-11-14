/* Aritiméricos
+ Adição / concatenação
-(subtração) /(divisão) *(multiplicação) **(2 * faz potenciação)
%(resto da divisão)
Incremento = ++
Decremento = --
parseInt (converter uma string em numero inteiro), parseFloat(converter uma string em numeros decimais), number(mais simples e leva ao mesmo resultado).
*/

// Exemplos

let contador = 1;
contador++;
console.log(contador);
contador--;
console.log(contador);

let num1 = 10;
let num2 = 2;
let num3 = 8;
let operacao;
operacao = (num1 * num3 + num2); // assim como na matematica segue as regras de prioridade na operação.
console.log(operacao);

const num4 = 10;
const num5 = Number('2.2');
console.log(num4 + num5);
console.log(typeof num5);
