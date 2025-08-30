# Desafios de JavaScript

Este repositório contém uma série de exercícios práticos para treinar **JavaScript**, com foco em **arrays, loops, manipulação de strings e lógica de programação**.

O objetivo é que você pratique desde operações básicas até cálculos mais avançados, seguindo a sequência dos exercícios abaixo.  
Ao final, você deve **enviar sua solução através de um Pull Request**.

---

## 📌 Passo a passo

1. **Clone este repositório:**
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```
2. **Acesse a pasta do projeto:**
   ```bash
   cd nome-do-repositorio
   ```
3. **Crie uma nova branch com seu nome:**
   ```bash
   git checkout -b minha-solucao
   ```
4. **Resolva os exercícios na pasta `exercicios/`.**
   - Crie um arquivo para cada exercício (ex: `exercicio1.js`, `exercicio2.js`, etc).
   - Utilize o **console.log** para exibir os resultados.
   - Recomendamos rodar o código com a extensão **Code Runner** no VS Code.
5. **Adicione suas alterações:**
   ```bash
   git add .
   ```
6. **Faça o commit com uma mensagem descritiva:**
   ```bash
   git commit -m "utilize commit semântico"
   ```
7. **Envie para o repositório remoto:**
   ```bash
   git push -u origin minha-solucao
   ```
8. **Abra um Pull Request (PR)** no GitHub para que sua solução seja revisada.

---

## Exercícios

### 1. Array e loop `for`

Considere o seguinte array para os exercícios abaixo:

```javascript
const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
```

- Percorra o array e imprima todos os valores usando `console.log()`.
- Some todos os valores do array e imprima o resultado.
- Calcule e imprima a **média aritmética** dos valores do array.
  - A média é a soma de todos os elementos dividida pelo número total de elementos.
- Caso a média seja maior que 20, imprima:
  > "O valor da média aritmética é maior que 20"  
  > Caso contrário, imprima:  
  > "O valor da média aritmética é menor ou igual a 20"
- Descubra o **maior valor** do array e imprima-o.
- Conte quantos valores **ímpares** existem no array e imprima o resultado.
  - Caso não exista nenhum, imprima:
    > "Nenhum valor ímpar encontrado"

### 2. Desafio Fatorial

O fatorial de um número natural é a multiplicação dele por todos os seus antecessores, exceto o zero.  
Exemplo:

```
4! = 4 x 3 x 2 x 1 = 24
```

Crie um algoritmo que imprima na tela o **fatorial de 10**.

### 3. Desafio de Inverter Palavra

Utilize um loop `for` para inverter uma palavra. Por exemplo, a palavra `"banana"` deve virar `"ananab"`.  
Use a string abaixo como exemplo:

```javascript
let word = "tryber";
```

> Dica: pesquise os métodos `split()`, `reverse()` e `join()`.

### 4. Desafio dos Asteriscos

Crie um algoritmo que, dado um valor `n` (sendo `n > 1`), imprima na tela um **quadrado de asteriscos** com tamanho `n`.  
Exemplo para `n = 5`:

```
*****
*****
*****
*****
*****
```

### 5. Desafio da Pirâmide de Asteriscos (extra)

Modifique o algoritmo anterior para que ele imprima um **triângulo retângulo** com `n` asteriscos de base.  
Exemplo para `n = 5`:

```
*
**
***
****
*****
```

---

💡 **Objetivo:**  
Estes exercícios são voltados para reforçar conceitos de **lógica de programação, loops, arrays, manipulação de strings e padrões** em JavaScript.  
Pratique e teste cada exercício no console.
