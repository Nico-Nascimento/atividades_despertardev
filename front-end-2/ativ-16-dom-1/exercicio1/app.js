function trocarTexto() {
  const colocarNome = prompt("Digite seu nome: ");
  const trocaParagrafo = document.getElementById("texto");
  trocaParagrafo.innerText = `E aí ${colocarNome}! Você está deixando o seu site
  dinâmico.`
}
