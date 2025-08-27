const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//[ PRIMEIRO PONTO - Percorra o array e imprima todos os valores usando console.log(). ]

// const imprimaValores = (numbers) => {
//   for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
//   }
//   return;
// };

// imprimaValores(numbers);

numbers.forEach(number => {console.log(number)});

//[ SEGUNDO PONTO - Some todos os valores do array e imprima o resultado. ]

const somaDosValores = numbers.reduce((valorAcumulado, valor) => valorAcumulado + valor, 0);
console.log(`Soma de todos os valores do array: ${somaDosValores}`);

//[ TERCEIRO PONTO - Calcule e imprima a média aritmética dos valores do array.]

const mediaAritmetica = somaDosValores / numbers.length;
console.log(`A média aritmética é ${mediaAritmetica.toFixed(2)}`);

//[QUARTO PONTO - Caso a média seja maior que 20, imprima]

const seMaiorQueVinte = mediaAritmetica > 20 ? `O valor da média aritmética é maior que vinte.` : `O valor da média aritmética é menor ou igual a 20`;
console.log(seMaiorQueVinte);

//[QUINTO PONTO - Descubre o maior valor do array e imprima-o]

const maiorNumero = numbers.reduce((maior, atual) => atual > maior ? atual : maior, numbers[0]);
console.log(`O maior valor do array é ${maiorNumero}.`);


//[SEXTO PONTO - Conte quandos valores ímpares existem no array e imprima o resultado]

const numerosImpares = numbers.filter((number) => number % 2 > 0 || number % 2 < 0 );

numerosImpares.length === 0 ? console.log(`Nenhum número ímpar encontrado`) : console.log(`Numeros ímpares: ${numerosImpares}`);