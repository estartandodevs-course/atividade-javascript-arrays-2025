const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

console.log(`Números dos arrays ${numbers.join(", ")}`)

let soma = 0;
for(let i= 0; i < numbers.length; i++)
{
    soma += numbers[i];
}
console.log(`A soma dos números é ${soma}`)

let media = soma / numbers.length;
 if(media > 20)
{
    console.log("O valor da média aritmética é maior que 20")

}
else
{
    console.log("O valor da média aritmética é menor ou igual a 20")
}

let maior = numbers[0];
for(let i = 1; i < numbers.length; i++)
{
    if(numbers[i] > maior)
    {
        maior = numbers[i];
    }
}
console.log("O maior número é: " + maior);

let contadorImpares = 0;

for(let i = 0; i < numbers.length; i++)
{
    if(numbers[i] % 2 !== 0)
    {
        contadorImpares++;
    }
}
if(contadorImpares > 0)
{
    console.log(`A quantidade de números ímpares é: ${contadorImpares}`)
}
else
{
    console.log("Nenhum valor ímpar encontrado")
}
