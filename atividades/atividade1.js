const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log("Valores do array:");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

let soma = 0;
for (let i = 0; i < numbers.length; i++) {
  soma += numbers[i];
}
console.log("Soma dos valores:", soma);

const media = soma / numbers.length;
console.log("Média aritmética:", media);

if (media > 20) {
  console.log("O valor da média aritmética é maior que 20");
} else {
  console.log("O valor da média aritmética é menor ou igual a 20");
}

let maior = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > maior) {
    maior = numbers[i];
  }
}
console.log("Maior valor do array:", maior);

let impares = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    impares++;
  }
}

if (impares > 0) {
  console.log("Quantidade de valores ímpares:", impares);
} else {
  console.log("Nenhum valor ímpar encontrado");
}
