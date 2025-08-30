/* 1. Array e loop `for`

Considere o seguinte array para os exercícios abaixo:

```javascript
const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
```

- Percorra o array e imprima todos os valores usando `console.log()`.
- Some todos os valores do array e imprima o resultado.
- Calcule e imprima a **média aritmética** dos valores do array.
  - A média é a soma de todos os elementos dividida pelo número total de elementos.
- Caso a média seja maior que 20, imprima:
  > "O valor da média aritmética é maior que 20"  
  > Caso contrário, imprima:  
  > "O valor da média aritmética é menor ou igual a 20"
- Descubra o **maior valor** do array e imprima-o.
- Conte quantos valores **ímpares** existem no array e imprima o resultado.
  - Caso não exista nenhum, imprima:
    > "Nenhum valor ímpar encontrado"*/

const numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let posicao = 0; posicao < numeros.length; posicao++) {
    console.log(numeros[posicao]);
}

let soma = 0;
for (let posicao = 0; posicao < numeros.length; posicao++) {
    soma += numeros[posicao];
}

console.log("A soma dos valores é: " + soma);

let media = soma / numeros.length;
console.log("A média aritmética é: " + media);

if(media > 20) {
  console.log("O valor da média aritmética é maior que 20")
} else {
  console.log("O valor da média aritmética é menor ou igual a 20")
}

let maiorValor = numeros[0];
for (let posicao = 1; posicao < numeros.length; posicao++) {
    if(numeros[posicao] > maiorValor) {
      maiorValor = numeros[posicao];
    }
} 
console.log("O maior valor é: " + maiorValor);

let quantidadeImpares = 0;
for (let posicao = 0; posicao < numeros.length; posicao++) {
    if(numeros[posicao] % 2 !== 0) {
      quantidadeImpares += 1;
    }
}

if(quantidadeImpares === 0) {
  console.log("Nenhum valor ímpar encontrado");
} else {
  console.log("A quantidade de valores ímpares é: " + quantidadeImpares);
}