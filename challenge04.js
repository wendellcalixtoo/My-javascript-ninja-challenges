/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(x){
    !!x === true ? x = true : x = false;
    return x;
};

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(false);
isTruthy(null);
isTruthy(undefined);
isTruthy(0);
isTruthy(NaN);
isTruthy('');

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(true);
isTruthy(1);
isTruthy('a');
isTruthy([]);
isTruthy({});
isTruthy('wendell');
isTruthy(10.3);
isTruthy('abc');
isTruthy(1);
isTruthy(5);

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = {
    marca: 'Ferrari',
    modelo: 'Spider',
    placa: 'QGB-0408',
    ano: 2019,
    cor: 'vermelho',
    quantasPortas: 2,
    assentos: 5,
    quantidadeDePessoas: 0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function(novaCor){
    return carro.cor = novaCor;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function(){
    return carro.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function(){
    return carro.modelo
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function(){
    return carro.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function(){
    return "Esse carro é um " + carro.marca + " " + carro.modelo + " !"
}

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
carro.addPessoas = function(n){
    var pessoasDentroDoCarro = carro.quantidadeDePessoas + n;
    return "Já temos " + pessoasDentroDoCarro + " pessoas no carro!";
    if (pessoasDentroDoCarro >= carro.assentos){
        return "O carro já esta lotado"
    } else {
        var quantidadePessoasQueCabemDentroCarro = carro.assentos - pessoasDentroDoCarro
        return "Só cabem mais " + quantidadePessoasQueCabemDentroCarro + " pessoas!"
    };
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.obterCor() //preto

// Mude a cor do carro para vermelho.
carro.mudarCor('vermelho') //vermelho

// E agora, qual a cor do carro?
carro.obterCor() //vermelho

// Mude a cor do carro para verde musgo.
carro.mudarCor('verde musgo')

// E agora, qual a cor do carro?
carro.obterCor() //verde musgo

// Qual a marca e modelo do carro?
carro.obterMarca()

// Adicione 2 pessoas no carro.
carro.addPessoas(2)

// Adicione mais 4 pessoas no carro.
carro.addPessoas(4)

// Faça o carro encher.


// Tire 4 pessoas do carro.


// Adicione 10 pessoas no carro.


// Quantas pessoas temos no carro?


//voltar aqui