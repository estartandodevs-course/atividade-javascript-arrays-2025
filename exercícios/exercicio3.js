// Utilize um loop for para inverter uma palavra. Por exemplo, a palavra "banana" deve virar "ananab".
// let word = "tryber";
// let palavraInvertida = "";

// for (let i = word.length - 1; i >= 0; i--) {
//   palavraInvertida += word[i];
// }

// console.log(palavraInvertida);




let word = "tryber";
// Dica: pesquise os métodos split(), reverse() e join().

let palavraInvertida = word.split('').reverse().join('');
console.log(palavraInvertida)

