// Metódos de instância e estáticos

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;

    }
    // Metódo de Instância
    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }

    //Metódo Estático
    static trocaPilha() {
        console.log("Pilha trocada!")
    }
}

const controle = new ControleRemoto("TCL");
controle.aumentarVolume();
controle.aumentarVolume();

ControleRemoto.trocaPilha();

// O metódo estático deve ser chamado apenas com o nome da classe e do metódo. Não é necessário criar parametros como
// no metódo de instância