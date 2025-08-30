/* 3. Desafio de Inverter Palavra
Utilize um loop for para inverter uma palavra. Por exemplo, a palavra "banana" deve virar "ananab".
Use a string abaixo como exemplo:

let word = "tryber"; */

let word = "tryber"
let palavraInvertida = "";


for (let i = word.length - 1; i >= 0; i--){
    palavraInvertida += word[i];
}
console.log(palavraInvertida);