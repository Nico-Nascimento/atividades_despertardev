// function bemVindo(nome, idade) {
//     console.log(`Olá, ${nome}! ${idade}`);
// }

// bemVindo("Nicolas", 26);

// // parametros
// function somar(numero1, numero2) {
//     return numero1 + numero2;
// }

// const numero1 = 2;
// const numero2 = 5;

// // argumentos
// console.log(somar(numero1, numero2));


// function calcularIdade(nascimento, atual) {
//     return atual - nascimento
// }

// console.log(calcularIdade(1997, 2023));



// // calcular a média de duas notas
// function calcularMedia(nota1, nota2) {
//     media = (nota1 + nota2) / 2
//     return media
// }

// console.log(calcularMedia(6, 9));

// // calcular area de um circulo

// function calcularArea(raio) {
//     const pi = 3.14
//     const area = pi * raio * raio

//     return area
// }

// const raioCirculo = 5
// const areaCalculada = calcularArea(raioCirculo)

// console.log(areaCalculada);


// // criar uma função que multiplica um número por dois.

// function multiplicaPorDois(numero) {
//     return numero * 2;
// }

// let resultado = multiplicaPorDois(5);
// console.log(resultado);  // Isso irá imprimir 10


// // criar uma função para incrementar um contador.

// let contador = 0;

// function incrementaContador() {
//     contador++;
//     return contador;
// }

// incrementaContador();
// console.log(contador);  // Isso irá imprimir 1

// // Desenvolver uma função em JavaScript que receba um array de notas, calcule a média das notas e determine se o aluno foi aprovado ou reprovado, com base em uma média mínima de 7.

// function calculaMediaAprovacao(notas) {
//     let soma = 0;
//     for(let nota of notas) {
//         soma += notas;
//     }
//     let media = soma / notas.length;

//     if(media >= 7) {
//         return 'Aprovado';
//     } else {
//         return 'Reprovado';
//     }
// }

// let notas = [7, 8, 6, 9];
// let resultado2 = calculaMediaAprovacao(notas);
// console.log(resultado2);  // Isso irá imprimir 'Aprovado' ou 'Reprovado'


// // forEach - percorre cada elemento do array e executa a função desejada.

// const numeros = [1, 2, 3, 4, 5];

// numeros.forEach(function(numero, indice, array) {
//     console.log(numero * 2);
//     console.log(indice);
// });

// // 1. Utilizando forEach para exibir os nomes:
// // 2. Usando findIndex para encontrar índice do primeiro homem:
// // 3. Utilizando find para encontrar a primeira mulher:
// // 4. Usando filter para encontrar pessoas com salário maior que 2500:

// const pessoas = [
//     { nome: "João", sexo: "M", salario: 2500 },
//     { nome: "Maria", sexo: "F", salario: 3200 },
//     { nome: "Pedro", sexo: "M", salario: 2000 },
//     { nome: "Ana", sexo: "F", salario: 2800 },
//     { nome: "Carlos", sexo: "M", salario: 3500 }
// ]

// // 1
// pessoas.forEach(function(nomes) {
//     console.log(nomes.nome);
// })

// // 2
// let iPrimeiroHomem = pessoas.findIndex(function(primeiroHomem) {
//     return primeiroHomem.sexo === "M"
// })
// console.log(iPrimeiroHomem);

// // 3
// let iPrimeiraMulher = pessoas.find(function(primeiraMulher) {
//     return primeiraMulher.sexo === "F"
// })
// console.log(iPrimeiraMulher);

// // 4
// let salarioMaior2500 = pessoas.filter(function(salariosMaior2500) {
//     return salariosMaior2500.salario > 2500
// })
// console.log(salarioMaior2500);

// // arrow function
// const functionName = (param1, param2) => {
//     return result
// }

// // arrow funcion em uma linha com mais de um parametro
// const sum = (numero1 = 2, numero2 = 4) => numero1 + numero2

// // arrow funcion em uma linha com um parametro
// const multiply = num => num * num

// // filtragem de array com arrow function
// const ages = [15, 18, 20, 30, 40];
// const filteredAges = ages.filter(age => age >= 18)
// console.log(filteredAges);

// const numberList = [1, 3, 5, 4, 7, 9, 10, 11];
// const pares = numberList.findIndex(par => par % 2 === 0);
// console.log(pares);

// // forEach nao tem retorno, apenas executa a função determinada para cada elemento;
// const numbers = [2, 4, 6];
// numbers.forEach(sum => console.log(sum * 2));

// //metodo splice, usado para alterar o conteúdo do array original
// const colors = ["Blue", "Red", "Green"];
// const removedColors = colors.splice(3, 0, "Black");
// console.log(colors);

// // como fazer a copia correta do array, preservando o array original - SPREAD
// const newArray = [... colors]

// // metodo SOME verifica se pelo menos um elemento satisfaz a condição e retorna boolean;
// const temps = [25, 15, 40, 2]
// const temAltasTemps = temps.some(temp => temp >= 10);
// console.log(temAltasTemps);

// // 5. Utilizando Map
// // É uma função em JavaScript que permite você fazer algo para cada item em uma lista (array) e criar uma nova lista com os resultados.

// const numberListNew = [1, 2, 3, 4, 5, 6]

// // Criando Arrow Function que utiliza o Math.pow para elevar cada número do array ao quadrado (2)
// const resultMap = numberListNew.map(num => Math.pow(num, 2))

// console.log(`Result Map: ${resultMap}`);

// 6. REDUCE
// Reduz o array para um valor, acumulando o total em uma variavel (ela se chama 'acumulator' neste caso)
// a segunda é o momento que ele está no array, o atual ('currentValue' neste caso)

// const numberList = [1, 2, 3, 4, 5, 6];

// const sum = numberListNew.reduce((acumulator, currentValue) => acumulator + currentValue)

// console.log(sum);
// // Mostrando passo a passo como funciona
// // acumulator + currentValue

// // >0 + 1
// // >1 + 2
// // >3 + 3
// // >6 + 4
// // >10 + 5
// // >15 + 6

// // Final log:
// // >21

// // Caso deseje, pode definir um valor inicial para o acumulador (neste caso 1), a operação segue a mesma forma da anterior
// const sum2 = numberListNew.reduce((acumulator, currentValue) => acumulator + currentValue, 1)
// console.log(sum2);