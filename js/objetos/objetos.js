// const pessoa1 = {
//     nome: 'Luiz',
//     sobrenome: 'Miranda',
//     idade: 25,

//     fala() {
//         console.log(`A minha idade atual é ${this.idade}.`);
//     },

//     incrementaIdade() {
//         this.idade++;
//     }
// };

// pessoa1.fala();
// pessoa1.incrementaIdade();
// pessoa1.fala();
// pessoa1.incrementaIdade();
// pessoa1.fala();
// pessoa1.incrementaIdade();
// pessoa1.fala();

const aluno = {
    nome: 'Nicolas',
    idade: 25,
    curso: "Medicina"
};

// console.log(aluno.nome);

aluno.curso = "ADS"
aluno.nota = 10;

// console.log(aluno);

// for (let key in aluno) {
//     console.log(key);
// }

const aluno2 = {};

for (let key in aluno) {
    aluno2[key] = aluno[key]
}

console.log(aluno2);