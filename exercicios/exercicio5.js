/* Desafio da Pirâmide de Asteriscos (extra)
Modifique o algoritmo anterior para que ele imprima um triângulo retângulo com n asteriscos de base.
Exemplo para n = 5: */

let n = 5;

for (let linha = 1; linha <= n; linha++) {
    let asteriscos = "";
    for (let coluna = 1; coluna <= linha; coluna++) {
        asteriscos += "*";
    }
    console.log(asteriscos);
}