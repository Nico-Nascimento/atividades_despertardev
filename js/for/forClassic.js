// console.log("Linha 0");
// console.log("Linha 1");
// console.log("Linha 2");
// console.log("Linha 3");
// console.log("Linha 4");
// console.log("Linha 5");

// i = index
// estrutura de repetição simples

for (let i = 0; i <= 5; i++) { // i++ vai incrementar de um em um, mas se colocar i+= "valor" vai pular perante ao valor que foi setado
    console.log(`Linha ${i}`);
}

// estrutura para identificar cada item utilizando o resto da divisão "%"
for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? "par" : "ímpar";
    console.log(i, par);
}