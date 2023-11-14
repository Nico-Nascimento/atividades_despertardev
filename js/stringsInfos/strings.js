let umaString = "Um \"texto\""; // modo para fazer as aspas duplas passarem. porem não é recomendado.
console.log(umaString);

// formas de concatenação
console.log(umaString.concat(" em um livro."));
console.log(umaString + " em um livro.");
console.log(`${umaString} em um livro.`);// mais atual e semantica.

//forma de substituir caracteres ou palavras das frases
console.log(umaString.replace(/t/g, "s")); //o "g" faz com que substitua todos da frase.



