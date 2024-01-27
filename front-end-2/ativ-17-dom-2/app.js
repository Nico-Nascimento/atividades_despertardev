const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.style.backgroundColor = "#e16e0e";
  card.style.color = "white";
  card.style.border = "0";
});

const tituloCards = document.querySelectorAll(".titulo-card");
tituloCards.forEach((titulo) => {
  titulo.style.color = "#2b385b";
  titulo.style.fontWeight = "bold";
  titulo.textContent = "Meu card";
});

const descricaoCards = document.querySelectorAll(".descricao-card");
descricaoCards.forEach((descricao) => {
  descricao.style.marginTop = "30%";
  descricao.textContent = "Descrição modificada pelo JavaScript";
});

const botoesEditar = document.querySelectorAll(".botao-editar");
botoesEditar.forEach((botao) => {
  botao.style.marginTop = "30%";
  botao.style.border = "0";
  botao.style.borderRadius = "15px";
  botao.style.width = "65px";
  botao.style.height = "35px";
  botao.style.backgroundColor = "green";
  botao.style.color = "white";
  botao.style.cursor = "pointer";
});

const botoesApagar = document.querySelectorAll(".botao-apagar");
botoesApagar.forEach((botao) => {
  botao.style.marginTop = "30%";
  botao.style.border = "0";
  botao.style.borderRadius = "15px";
  botao.style.width = "65px";
  botao.style.height = "35px";
  botao.style.backgroundColor = "red";
  botao.style.color = "white";
  botao.style.cursor = "pointer";
});

const editarCard = () => {
  alert("Clicou em Editar!");
};

botoesEditar.forEach((botao) => {
  botao.setAttribute("onclick", "editarCard()");
});

const apagarCard = () => {
  const confirmacao = confirm("Tem certeza que deseja excluir o card?");
  if (!confirmacao) {
    alert("Cancelou!");
  } else {
    alert("Confirmado!");
  }
};

botoesApagar.forEach((botao) => {
  botao.setAttribute("onclick", "apagarCard()");
});
