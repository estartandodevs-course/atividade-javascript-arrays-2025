// [Crie um algoritmo que imprima na tela o fatorial de 10.]

const dezFatorial = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

const resultado = dezFatorial.reduce((valorAcumulado, valor) => valorAcumulado * valor);
console.log(resultado);