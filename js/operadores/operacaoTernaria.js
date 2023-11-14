// uma operação para substituir o if else em casos simples com ? e :
// (condição) ? "Valor para verdadeiro" : "Valor para falso";

const pontuacaoUsuario = 500;
const nivelUsuario = pontuacaoUsuario >= 1000 ? "Usuário VIP" : "Usuário normal";

const corUsuario = "Pink";
const corPadrao = corUsuario || "Preta";

console.log(nivelUsuario, corPadrao);
