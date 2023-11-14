let num1 = 1; //Number
let num2 = 4; //Number

console.log(num1.toString() + num2); //Nesse modo o num1 vira uma string temporaria somente nessa linha de codigo.
num1 = num1.toString(); //Dessa forma alteramos permanentemente o num1 para string.
console.log(typeof num1); //com typeof é possível ver o tipo do dado.
console.log(num1.toString(2)); //colocando o 2 dentro do parenteses ele transforma o numero normal para binario.
console.log(num1.toFixed(2)); //eliminar as demais casas decimais de um numero mto grande, dentro do () vai as casas que serão exibidas.

