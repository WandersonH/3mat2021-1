//o java script teve uma restruturacao em 2015
//Criar Objeto Vazio

let vazio1 = {} // forma "Moderna"
let vazio2 = new Object() //forma "tradicional"

// criacão de objetos com dados
let pessoa = {
    nome: 'Okurtison da Silva',
    dataNasc: '2009-01-29',
    sexo: 'M',
    ocupacao: 'Estudante',
    // nomes de propriedade podem ter espacos ou e acentos
    //mas, nesse caso, precisam vir entre aspas
    'cidade de origem': 'franca'

}

// pode ser construido em uma linha apenas
let pessoa2 ={nome:'Wanderson Honorio Roberto',dataNasc: '1991-11-20', sexo: 'M',ocupacao: 'Publicitario'}


//acessando uma propriedade do objeto
console.log(pessoa.nome)
console.log(pessoa2.nome)

// quando o nome da propriedade tem espacos ou acento, não é possivel
//acessa-la pela sintaxe do ponto. Deve-se usar a sintaxe dos colchetes
console.log(pessoa['cidade de origem'])

//a sintaxe dos colchetes SEMPRE funciona
//o nome da propriedade vem entre aspas
console.log(pessoa.dataNasc)  //sintaxe do ponto
console.log(pessoa2['dataNasc']) // sintaxe dos colchetes

// a sintaxe dos colchetes é importante tambem quando o nome da propriedade 
// esta armazenado em uma variavel
let prop = 'nome'
console.log(pessoa[prop])
prop = 'sexo'
console.log(pessoa[prop])
prop = 'cidade de origem'
console.log(pessoa[prop])

//formas de exibicao de um objeto inteiro
console.log(pessoa)
console.table(pessoa) // mais organizado visualmente (nao é possivel editar o nome das colunas)



// insercao de dados objetos

let veiculo = {} // O objeto inicia-se vazio
//foi criada a propriedade marca e colocado o valor 'volkswagen'dentro dela
veiculo.marca = 'Volkswagen'
veiculo.modelo = 'Variant'
veiculo.ano = 1974

// propriedade com acento --> sintaxe dos colchetes
veiculo['Combustível'] = 'Gasolina'
veiculo.cor = 'Azul'

console.log(veiculo)
console.table(veiculo)


//listando as propriedades de um objeto( util para quando você nao criou o objeto)
//for ..in -> lista todas propriedades de um objeto
//prop -> a variavel que ira conter o nome de cada uma das propriedades
//do objeto (pode ser qualquer nome valido de variavel)
//pessoa -> o objeto do qual queremos listar as propriedades

for (let prop in pessoa){
    console.log(prop)
}

console.log('---------------------------------------------')

for(let x in veiculo){
    console.log(x)
}


//listar propriedades e valores desconhecidos 
for(let atrib in veiculo){
    console.log(atrib + '->'+ veiculo[atrib])
}

//apagar a propriedade de um objeto
//objeto antes da exclusao da propriedade
console.table(veiculo)

//apagar a propriedade de um objeto: delete
delete veiculo.ano

//objeto veiculo apos a exclusao da propriedade
console.table(veiculo)




