const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (i = 0; i < numbers.length; i++) {
  console.log(`Posição ${i}: ${numbers[i]}`);
}

const soma = numbers.reduce((total, valorAtual) => total + valorAtual, 0);

console.log(`O valor total é de: ${soma}`);

const media = soma / numbers.length;

if (media > 20) {
  console.log(`A media de valores é maior que 20: ${media}`);
} else {
  console.log(`A media de valores é menor que 20: ${media}`);
}

const maior = Math.max(numbers);
console.log(maior);
