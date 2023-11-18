const data = [
    {
      nome: 'Roger Medeiros',
      sexo: 'M',
      salario: 3250,
    },
    {
      nome: 'Carolina Silva',
      sexo: 'F',
      salario: 1200,
    },
    {
      nome: 'Cristina Avila',
      sexo: 'F',
      salario: 8100,
    },
    {
      nome: 'Gustavo Hoffman',
      sexo: 'M',
      salario: 5200.35,
    },
    {
      nome: 'Eva Trindade',
      sexo: 'F',
      salario: 2501,
    },
    {
      nome: 'Andre Mathias',
      sexo: 'M',
      salario: 1750,
    },
    {
      nome: 'Joice Castro da Silva',
      sexo: 'F',
      salario: 3350.25,
    },
  ];
  
  // 1. Imprima no console a quantidade de pessoas Total.
  console.log('Quantidade de pessoas total:', data.length);
  
  // 2. Imprima no console a quantidade de pessoas do sexo Feminino.
  const mulheres = data.filter(pessoa => pessoa.sexo === 'F');
  console.log('Quantidade de pessoas do sexo feminino:', mulheres.length);
  
  // 3. Imprima no console a soma do salário de todas as pessoas.
  const somaSalarios = data.reduce((soma, pessoa) => soma + pessoa.salario, 0);
  console.log('Soma do salário de todas as pessoas:', somaSalarios);
  
  // 4. Imprima no console a média do salário de todas as pessoas.
  const mediaSalarios = somaSalarios / data.length;
  console.log('Média do salário de todas as pessoas:', mediaSalarios);
  
  // 5. Imprima no console a soma do salário de todas as pessoas do sexo Masculino.
  const somaSalariosMasculino = data
    .filter(pessoa => pessoa.sexo === 'M')
    .reduce((soma, pessoa) => soma + pessoa.salario, 0);
  console.log('Soma do salário de pessoas do sexo masculino:', somaSalariosMasculino);
  
  // 6. Imprima no console a média do salário de todas as pessoas do sexo Masculino.
  const homens = data.filter(pessoa => pessoa.sexo === 'M');
  const mediaSalariosMasculino = somaSalariosMasculino / homens.length;
  console.log('Média do salário de pessoas do sexo masculino:', mediaSalariosMasculino);
  
  // 7. Utilize a função Some, para descobrir se existe algum salário superior a R$ 7.000.
  const salarioSuperiorSeteMil = data.some(pessoa => pessoa.salario > 7000);
  console.log('Existe salário superior a R$ 7.000?', salarioSuperiorSeteMil);
  
  // 8. Utilize a função findIndex, para descobrir a posição da pessoa de nome 'Eva Trindade'.
  const indiceEvaTrindade = data.findIndex(pessoa => pessoa.nome === 'Eva Trindade');
  console.log('Posição de Eva Trindade:', indiceEvaTrindade);
  
  // 9. Utilize a função filter, para filtrar todas as pessoas que o nome possua o sobrenome "Silva".
  const pessoasSilva = data.filter(pessoa => pessoa.nome.includes('Silva'));
  console.log('Pessoas com o sobrenome Silva:', pessoasSilva);
  
  // 10. Imprima os nomes utilizando o MAP.
  const nomes = data.map(pessoa => pessoa.nome);
  console.log('Nomes:', nomes);
  