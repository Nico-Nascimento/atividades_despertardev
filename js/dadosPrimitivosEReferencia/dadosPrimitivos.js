// Dados Primitivos são imutaveis - Valores são copiados
// String, number, undefined, null, boolean
const nome = 'Nico'; // string
const nome1 = 'Nico'; // string
const nome2 = 'Nico'; // string
const num1 = 10; // number
const num2 = 10.52; // number
let nomeAluno; // undefined -> não aponta pra local nenhuma na memória
const sobrenomeAluno = null; // Nulo -> não aponta pra local nenhuma na memória
const aprovado = false; // Boolean = true, false (lógico)


let a = 2;
const b = a;
console.log(a, b); // 2, 2

a = 3;
console.log(a, b); // 3, 2

// Dados por Referência (mutável) - Array, Object, function - Valores passados por referência
// apotam para o mesmo valor na memória 

const c = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
const d = a;

d.nome = 'João';
console.log(c);
console.log(d);
