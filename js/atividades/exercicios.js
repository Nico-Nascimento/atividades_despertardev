// // 1. Crie uma função que recebe 3 notas de um aluno por parâmetro e
// // uma letra. Se a letra for A a função deve calcular a média aritmética,
// // se for P, a média ponderada (peso: 5, 3 e 2).
  
// function mediaAluno2(notas, metodo) {
//     const [nota1, nota2, nota3] = notas

//     if (metodo === 'A')
//         return (nota1 + nota2 + nota3) / 3

//     if (metodo === 'P')
//         return (nota1 * 5 + nota2 * 3 + nota3 * 2) / 10

//     else null
// }

// const notas = [6, 8, 9];
// const metodo = "A"

// console.log(mediaAluno2(notas, metodo));


// // 2. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
// // for ímpar ou falso se for par.

// function impar(numero) {
//     return numero % 2 !== 0;
// }

// // Exemplo de uso:
// let numeroExemplo = 7;
// let resultado = impar(numeroExemplo);

// console.log(`O número ${numeroExemplo} é ímpar? ${resultado}`);


// // 3. Crie uma função que recebe por parâmetro um valor inteiro e
// // positivo e retorne verdadeiro se o número for primo ou falso se não
// // for.

// function ehPrimo(numero) {
//     if (numero <= 1) {
//         return false;
//     }

//     for (let i = 2; i * i <= numero; i++) {
//         if (numero % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }

// // Exemplo de uso:
// let numeroExemplo = 17;
// let resultado = ehPrimo(numeroExemplo);

// console.log(`O número ${numeroExemplo} é primo? ${resultado}`);


// // 4. Crie uma função que recebe por parâmetro o tempo de duração de
// // uma fábrica expressa em segundos e retorna esse tempo em horas,
// // minutos e segundos.

// // Ex:
// // Entrada: 3672
// // Saída: 1:1:12

// function converterTempo(segundos) {
//     // Calcula o número de horas, minutos e segundos
//     let horas = Math.floor(segundos / 3600);
//     let minutos = Math.floor((segundos % 3600) / 60);
//     let segundosRestantes = segundos % 60;

//     // Formata a saída
//     let resultado = `${horas}:${minutos}:${segundosRestantes}`;

//     return resultado;
// }

// // Exemplo de uso:
// let tempoEmSegundos = 4853;
// let resultado = converterTempo(tempoEmSegundos);

// console.log(`Entrada: ${tempoEmSegundos}`);
// console.log(`Saída: ${resultado}`);


// 5. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
// é um valor perfeito ou falso se não for. Um valor é dito perfeito
// quando ele é igual a soma dos seus divisores excetuando ele
// próprio.
// Ex: 6 é perfeito, pois 6 = 1 + 2 + 3, que são seus divisores

function numeroPerfeito(numero) {
    if (numero <= 1) 
        return false;

    let somaDivisores = 1; // Inicia com 1, pois todos os números são divisíveis por 1

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            somaDivisores += i;

            // Se i é diferente do número/i, adiciona também o número/i à soma (evita duplicatas)
            if (i !== numero / i) {
                somaDivisores += numero / i;
            }
        }
    }

    // Um número é perfeito se a soma dos seus divisores é igual a ele mesmo
    return somaDivisores === numero;
}

// Exemplo de uso:
let numeroExemplo = 6;
let resultado = numeroPerfeito(numeroExemplo);

console.log(`O número ${numeroExemplo} é perfeito? ${resultado}`);



// 6. Crie uma função chamada acessoAoSite() que não tenha
// parâmetro. Esta função será chamada ao abrir a página e mostrará
// um alerta informando “Bem vindo ao site”.

function acessoAoSite() {
    alert("Bem-vindo ao site");
}

// Chama a função ao abrir a página
acessoAoSite();


// 7. Crie uma função chamada mostrarMensagem() que não tenha
// parâmetro. Esta função será chamada ao abrir a página e mostrará
// uma mensagem no console.log() informando “Acesso à aplicação
// NomeAplicação” e um alerta informando “Bem vindo à aplicação
// NomeApliação”. Sendo que o nome da aplicação deve ser salvo em
// uma variável para mostrar nas mensagens.

function mostrarMensagem() {
    // Nome da aplicação
    let nomeAplicacao = "NomeAplicacao";

    // Mensagem no console.log
    console.log(`Acesso à aplicação ${nomeAplicacao}`);

    // Alerta
    alert(`Bem-vindo à aplicação ${nomeAplicacao}`);
}

// Chama a função ao abrir a página
mostrarMensagem();


// 8. Crie uma função chamada mostrarDobro(num), que recebe um
// parâmetro sendo um número inteiro. Esta função será chamada ao
// abrir a página e mostrará um alerta com o resultado. Exemplo: “O
// dobro do número 5 é 10.”

function mostrarDobro(num) {
    // Calcula o dobro do número
    let dobro = num * 2;

    // Exibe um alerta com o resultado
    alert(`O dobro do número ${num} é ${dobro}.`);
}

// Exemplo de uso: chama a função ao abrir a página com o número 5
mostrarDobro(5);


// 9. Crie uma função chamada calcularMedia(nota1, nota2, nota3,
// nome), que recebe 4 parâmetros sendo três inteiros e um texto
// (String). Esta função será chamada ao abrir a página e mostrará um
// alerta com a média. Exemplo: “João, sua média é 70.” A função
// também deve mostrar no console.log() as notas recebidas. Exemplo
// “Nota 1: 60,Nota 2: 70,Nota 3: 80”.

function calcularMedia(nota1, nota2, nota3, nome) {
    // Calcula a média
    let media = (nota1 + nota2 + nota3) / 3;

    // Exibe um alerta com a média
    alert(`${nome}, sua média é ${media}.`);

    // Exibe no console.log as notas recebidas
    console.log(`Nota 1: ${nota1}, Nota 2: ${nota2}, Nota 3: ${nota3}`);
}

// Exemplo de uso: chama a função ao abrir a página com as notas e o nome
calcularMedia(60, 70, 80, "João");
