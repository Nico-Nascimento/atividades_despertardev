
const inputs = document.querySelectorAll("input[type=number]");
inputs.forEach(function (input) {
  input.addEventListener("change", function () {
    calcular();
  });
});

function calcular() {
  const valorBase = parseFloat(document.getElementById("valor_base").value);
  const valorTransporte = parseFloat(
    document.getElementById("valor_transporte").value
  );
  const valorAlimentacao = parseFloat(
    document.getElementById("valor_alimentacao").value
  );
  const valorReceita = valorBase + valorTransporte + valorAlimentacao;
  document.getElementById("valor_receita").value = valorReceita.toFixed(2);
  const valorAutomovel = parseFloat(
    document.getElementById("valor_automovel").value
  );
  const faltas = parseFloat(document.getElementById("faltas").value);
  const valorDescontos = valorAutomovel + faltas;
  document.getElementById("valor_descontos").value = valorDescontos.toFixed(2);
  const valorTotal = valorReceita - valorDescontos;
  document.getElementById("valor_total").value = valorTotal.toFixed(2);
}
