/*
primeiro exercicio utilizando as aspas dentro do texto e separando as strings dos numeros literais.
*/
console.log('Meu nome é "Nicolas". Estou aprendendo JavaScript às', 10, 'horas da manhã.');

// Não podemos criar variáveis com palavras reservadas.
// Variáveis precisam ter nomes significativos.
// Não pode começar o nome de uma variável com um número.
// Não pode conter espaços ou traços.
// Utilizar sempre camelCase (separação de palavras com a letra maiúscula).
// Case-sensitive (nomes sensíveis a letras maiúsculas).
// Não podemos redeclarar variáveis com let.
// Não utilizar VAR, sempre usar LET.

let nomeAutor = "Nicolas";
console.log(nomeAutor);

// Cálculo de IMC
/* Nicolas Nascimento tem 25 anos, pesa 72 kg
tem 1.8 m de altura e seu IMC é de ...
Nicolas Nascimento nasceu em 1997
*/

const nome = "Nicolas";
const sobrenome = "Nascimento";
const idade = 25;
const peso = 72;
const alturaEmMetros = 1.8;
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;

// Calculos
indiceMassaCorporal = peso / (alturaEmMetros * alturaEmMetros);
anoNascimento = 2022 - idade;

// template strings (envolver a frase entre crases)
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg.`);
console.log(`Possuí ${alturaEmMetros} m de altura e seu IMC é de ${indiceMassaCorporal}.`)
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`)