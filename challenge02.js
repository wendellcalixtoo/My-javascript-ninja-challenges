// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(a, b) {
  return a + b;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var chamaSoma = soma(5, 3) + 5;

// Qual o valor atualizado dessa variável?
chamaSoma;
13;

// Declare uma nova variável, sem valor.
var newVar;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function addValue() {
  newVar = 15;
  return 'O valor da variável agora é ' + newVar;
}

// Invoque a função criada acima.
addValue();

// Qual o retorno da função? (Use comentários de bloco).
/* 'O valor da variável agora é 15' */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function fun1(a, b, c) {
  if (a === undefined || b === undefined || c === undefined) {
    return 'Preencha todos os valores corretamente!';
  } else {
    return a * b * c + 2;
  }
}

// Invoque a função criada acima, passando só dois números como argumento.
fun1(2, 5);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// return "Preencha todos os valores corretamente!"

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
fun1(2, 3, 5);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
32;

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function func2(a, b, c) {
  if (a !== undefined && b === undefined && c === undefined) {
    return a;
  } else if (a !== undefined && b !== undefined && c === undefined) {
    return a + b;
  } else if (a !== undefined && b !== undefined && c !== undefined) {
    return (a + b) / c;
  } else if (a === undefined && b === undefined && c === undefined) {
    return false;
  } else {
    return null;
  }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
func2()
false
func2(2)
2
func2(2,3)
5
func2(2,3,2)
2.5
