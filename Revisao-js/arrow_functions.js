// a rigor, a funcao abaixo não seria necessaria, pois, usando
//recursos nativos do Js, poderiamos escrever x**2 ou Math.pow(x,2)

//caracteristicas desta funcao
//1) Tem apenas um parâmetro
//2) seu corpo tem apenas uma , linha retornando valor

function quadrado(x){
    return x * x
}
console.log(quadrado(9))

//oformato da funcao acima é perfeito para conversão em arrow function
//que é um modo "abreviado" de escrever uma funcao em JS

//os parenteses em torno do parâmetro foram omitidos
// 2) a palafra "function", que vinha ANTEs do parâmetro, foi substituida
// pelo simbolo => DEPOIS do parâmetro
// 3) as chaves foram omitidas
// 4) a palavra-chave return foi omitida
// 5) uma arrow function é uma funcao anônima. Portanto, caso se deseje
//chama-la posteriormente, é necessário atribui-la a uma variavel 
const quadrado2 = x => x * x
console.log(quadrado2(9))

// Função com mais de um parâmetro

function potencia(b,e){ // b= base, e = expoente
    return b **e
}
console.log(potencia(2,10))

//arrow function equivalente
//Quando temos mais de um parametro, os parenteses retornam
const potencia2 = (b,e) => b ** e
console.log(potencia(2,10))

// Funcao sem parâmetros, que retora um numero aleatorio ente 1 e 60
function megasena(){
    //Math.random() -> retorna um numero aleatorio entre 0 (inclusive) e 1(exclusive)
    // * 60 -> ajusta faixa de valores para o e 5
    // +1 -> ajusta a faixa de valores para 1 e 60
    // Math.ceil() ->  retira as casas decimais de um numero deixando apenas a parte inteira
    return Math.ceil(Math.random()* 60 + 1)
}
console.log(megasena(),megasena(),megasena(), megasena(),megasena(),megasena())


//equivalente Arrow
// parenteses vazios ( Obrigatórios) marcam o lugar dos parâmetros
let megasena2 =() => Math.ceil(Math.random() * 60 + 1)

console.log(megasena2(),megasena2(),megasena2(), megasena2(),megasena2(),megasena2())