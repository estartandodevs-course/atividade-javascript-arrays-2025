let n = 5;
let altura = n; 
let largura = n;
let asteristico = "*";
let linha = "";
for (let i = 0; i < altura; i += 1) {
  for (let j = 0; j < largura; j += 1) {
    linha += asteristico;
    }
    console.log(linha);
    linha = "";
}
