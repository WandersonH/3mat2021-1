/*
Uma classe (class) é uma estrutura que permite controlar a 
criação de objetos de acordo com seus requisitos de utilização.

Uma classe pode ser comparada a uma forma de bolo. se uma forma de bolo
é redonda, com um furo no meio, não importam os igredientes que serão
utilizados na receita, o bolo (ou o pudim, ou o quindim) sairão no formato 
determinado pela forma.

*/

//Por Convenção, nomes de classes iniciam com letras Maiúscila em Javascript
class FormaGeometrica{

    //declaração atibutos privados
#base
#altura
#tipo

    //Quando uma função está dentro de uma classe, ela é denominada MËTODO.
    //constructor() é um método especial que é chamado toda vz que se tenta
    // criar um objeto  partir da classe. Nele, é possivel fazer as validações
    // que permitirão ou não a existencia de um objeto
    // O processo de criação de um Objeto pode ser abortado se contructor()
    //gerar um erro do tipo Error
    constructor(base, altura, tipo){
        //base, altura e tipo são parametros do Construtor

        //base deve ser numérica e maior que zero
        if(isNaN(base) || base <= 0)
            throw new Error('A base deve ser numérica e maior que zero')

        //altura deve ser numérica e maior que zero
        if(isNaN(altura) || altura <= 0)
            throw new Error('A altura deve ser numérica e maior que zero')

        // tipo deve ser Q, T ou E
        //if(tipo! == 'Q'|| tipo!) == 'T'|| tipo! == 'E'){}

        if(!['Q', 'T', 'E'].includes(tipo)){
            throw new Error('O Tipo deve ser Q, T ou E')
        }
// se chegarmos até aqi, as informações estão Corretas e podemos continuar com a criação do Objeto
//A criação é concluida com o armazenamento dos parâmetros do construtor
//dentro do próprio objeto, em variáveis especiais deominados ATRIBUTOS
//Dentro do Objeto, Os Atributos são Referidos com o prefixo this para
// diferenciá-los das variáveis comuns.

// Atribuindo cada parâmetro do construtor a um atributo do objeto
//atributo publico
//this.base =base
//this.altura = altura
//this.tipo = tipo


//Atributo privado
this.#base =base
this.#altura = altura
this.#tipo = tipo

    }

    //getter: Permite acessar atibutos  privado de forma externa a classe,
    //mais no modo SOMENTE - LEITURA

    get base(){
        return this.#base
    }
    get altura(){
        return this.#altura
    }
    get tipo(){
        returnthis.#altura
    }
}


//Criando Objetos a partir da classe
let forma1, forma2, forma3
try{
const forma1 = new FormaGeometrica(5.4, 7.7, 'T') // -> parâmetros do construtor
console.log('Forma1: ', forma1.base, forma1.altura, forma1.tipo)
}
catch(erro){
    console.log('ERRO: ', erro.message)
}
//Tratamento de exceção
try{ //TENTA executar as intruções que estao dentro deste bloco
    //Caso aconteça algum erro dentro deste bloco, ele será interrompido
    // e a execução passará ao bloco catch
const forma2 = new FormaGeometrica(8, 3.5, 'J')
console.log('Forma2: ', forma2.base, forma2.altura, forma2.tipo)
}
//O bloco catch recebe o erro  que aconteceu, e nos dá oportunidade de
//tratá-lo sem abobortar a execução do Programa
catch(erro){
    console.log('Não foi possível criar o obeto. Motivo: '+ erro.message)
}

try{
const forma3 = new FormaGeometrica(4, 3, 'E') // -> parâmetros do construtor
console.log('Forma3: ', forma3.base, forma3.altura, forma3.tipo)
}
catch(erro){
    console.log('ERRO: ', erro.message)
}


//Alterando a propriedade área de forma1 após a criação
forma1.#base = 'batata'
console.log(forma1)

