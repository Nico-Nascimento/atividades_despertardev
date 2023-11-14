// const produtos = [
//     {nome: 'Smartphone', preco: 1500, categoria:'eletronicos'},
//     {nome: 'notebooks', preco: 5000, categoria: 'eletronicos'},
//     {nome: 't-shirt', preco: 120, categoria: 'roupas'},
//     {nome: 'smartwatch', preco: 800, categoria: 'eletronicos'}
//     ]
    
//     for (let produto of produtos){
//         console.log(`Produto: ${produto.nome}, Preço: ${produto.preco}, Categoria: ${produto.categoria} `)
//     }


const nome = prompt("Digite o nome: ");
const idade = Number(prompt("Digite a idade: "));
const cidade = prompt("Digite a cidade: ");

const pessoa = [
    {nome, idade, cidade}
]

for (let pessoas of pessoa) {
    console.log(`Nome: ${pessoas.nome}, Idade: ${pessoas.idade}, Cidade: ${pessoas.cidade}`);
}