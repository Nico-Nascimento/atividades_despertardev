// let - tem escopo de bloco { ......... bloco}.
// var só tem escopo de função, só é definido dentro da função se for chamada fora causará error.
const verdadeiro = true;


function teste() {

    if (verdadeiro) {
        let nome = "Nicolas";
        var sobrenome = "Nascimento";
        console.log(nome); // somente aqui no mesmo escopo ela seria invocada.
    }

    console.log(sobrenome); // como está dentro da função var será invocada, porém se fosse let não seria por já estar fora do escopo onde foi criada.

}
teste();