const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (i = 0; i < numbers.length; i++) {
  console.log(`Posição ${i} : ${numbers[i]}`);
}

const soma = numbers.reduce((total, valorAtual) => total + valorAtual, 0);

console.log(`O valor total é de: ${soma}`);
