// Crie um algoritmo que, dado um valor n (sendo n > 1), imprima na tela um quadrado de asteriscos com tamanho n.

function fazerQuadrado(n) {
  if (n <= 1) {
    console.log("Valor de n deve ser maior que 1.")
    return
  }

  for (let i = 1; i <= n; i++) {
    let asterisco = ''
    for (let j = 0; j < i; j++) {
        asterisco += '*'
      }
    console.log(asterisco)
  }
}
fazerQuadrado(4);