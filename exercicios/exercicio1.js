const numbers = [6, 12, 8, 20, 70, 8, 100, 2, 32, 2];

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

const maxNumber = Math.max(...numbers);
console.log(`O maior numero é: ${maxNumber} `);

let countNumbersOdd = 0;

for (i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    countNumbersOdd++;
  }
}

if (countNumbersOdd > 0) {
  console.log(`A quantidade de numeros impares é: ${countNumbersOdd}`);
} else {
  console.log("Nenhum valor impar encontrado");
}
