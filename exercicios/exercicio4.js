/* 4. Desafio dos Asteriscos
Crie um algoritmo que, dado um valor n (sendo n > 1), imprima na tela um quadrado de asteriscos com tamanho n.
Exemplo para n = 5: */

let n = 5;

for (let linha = 0; linha < n; linha++) {
    let asteriscos = "";
    for (let coluna = 0; coluna < n; coluna++) {
        asteriscos += "*";
    } 
    console.log(asteriscos);
}