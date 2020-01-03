/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var lista = ['arroz', 'feijao', 'macarrao', 'bife', 'salada']
console.log(lista)

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function getArray(arg){
    return arg;
};

console.log(getArray(lista))

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(getArray(lista[1]))

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myfunction1(x,y){
    return x[y]
};
console.log(myfunction1(['brasil','peru','venezuela'],2))
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var array1 = ['wendell', 29, true, undefined, null]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(getArray(array1))

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nomeLivro){
    var obj = {
        cronicasDeNarnia: {
            quantidadePaginas : 100,
            autor : 'Joao',
            editora : 'Abril'
        },
        harryPotter: {
            quantidadePaginas : 200,
            autor : 'Maria',
            editora : 'Maio'
        },
        senhorDosAneis : {
            quantidadePaginas : 300,
            autor : 'Fulano',
            editora : 'Junho'
        }
    }

    return !nomeLivro ? obj : obj.nomeLivro;
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book())
console.log(book().cronicasDeNarnia.autor)

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log("O livro Harry Potter tem " + book().harryPotter.quantidadePaginas + " páginas!")

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro Harry Potter é "+ book().harryPotter.autor +".")

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro Harry Potter foi publicado pela editora " + book().harryPotter.editora + ".")