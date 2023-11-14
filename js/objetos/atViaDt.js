// Atribuição via Desestruturação

const pessoa = {
    nome: "Nicolas",
    sobrenome: "Nascimento",
    idade: 25,
    endereco: {
        rua: "Arlindo Spindler",
        numero: 120
    }
};

// o endereço deve ser chamado assim por ter mais dois valores atribuidos dentro dele, caso fosse invocado de forma simples iria aparecer as "{}" junto.

const { nome, sobrenome, idade, endereco: { rua, numero } } = pessoa;
console.log(nome, sobrenome, idade, rua, numero);
