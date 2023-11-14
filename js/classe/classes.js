// classes são a mesma coisa que a function. porém podem receber mais parametros especificos
// necessario colocar o metodo 'constructor()' dentro da classe
// utilizando class os metodos prototype ja são automaticamente linkados 

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando`)
    }

    comer() {
        console.log(`${this.nome} está comendo`)
    }
}

const p1 = new Pessoa("Nicolas", "Nascimento");
const p2 = new Pessoa("Sara", "Keller");

console.log(p1, p2);


