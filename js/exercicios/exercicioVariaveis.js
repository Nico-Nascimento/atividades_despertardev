let varA = "A"; // varA precisa ter o valor de varB
let varB = "B"; // varB precisa ter o valor de varC
let varC = "C"; // varC precisa ter o valor de varA

// é possível criar uma variavel temporaria para a varA
const varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp;

console.log(varA, varB, varC);

// tbm pode-se fazer utilizando um array
[varA, varB, varC] = [varB, varC, varA],

    console.log(varA, varB, varC);

