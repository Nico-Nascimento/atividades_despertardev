let contador = 0;

function incrementarContador() {
  contador++;
  const trocaParagrafo = document.getElementById("contadorP");
  trocaParagrafo.innerText = `O contador está com ${contador} cliques!`;
}

function zerarContador() {
  contador = 0;
  const trocaParagrafo = document.getElementById("contadorP");
  trocaParagrafo.innerText = `O contador está com ${contador} cliques!`;
}
