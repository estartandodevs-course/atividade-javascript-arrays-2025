/* 2. Desafio Fatorial
O fatorial de um número natural é a multiplicação dele por todos os seus antecessores, exceto o zero.
Exemplo:

4! = 4 x 3 x 2 x 1 = 24
Crie um algoritmo que imprima na tela o fatorial de 10. */

let numero = 10;
let fatorial = 1;

for (let i = 1; i <= numero; i++) {
    fatorial *= i
}
console.log("O fatorial de " + numero + " é: " + fatorial);