// Modifique o algoritmo anterior para que ele imprima um triângulo retângulo com n asteriscos de base.

function fazerTriangulo(n) {
  if (n <= 1) {
    console.log("Valor de n deve ser maior que 1.")
    return
  }

  for (let i = 0; i < n; i++) {
    let asterisco = ''
    for (let j = 0; j < n; j++) {
      asterisco += "*"
    }
    console.log(asterisco)
  }
}
fazerTriangulo(4);