console.log('---------------numbers-----------------')
let a = 10, b =15, c = 10 // Números
console.log(a > b)
console.log(a < b)
console.log(a == c) // Igual
console.log(a != c) // Diferente

console.log('---------------String------------------')
a  = 'Maria'
b = 'DINAH'
c = 'Maria'
console.log(a > b)
console.log(a < b)
console.log(a == c) // Igual
console.log(a != c) // Diferente

// na comparacao de strings é utilizada a ordem alfabetica valor ask determinado na tabeka 


console.log('---------------Booleans------------------')
a  = true
b = false
c =  true
console.log(a > b)
console.log(a < b)
console.log(a == c) // Igual
console.log(a != c) // Diferente

// true(1) false (0)
//true sempre é maior que false

console.log('---------------Vetores------------------')
a=[ 1, 2, 3,4,5]
b= [ 10, 20, 30, 40, 50]
c= [ 1, 2, 3,4,5]
console.log(a > b)
console.log(a < b)
console.log(a == c) // Igual
console.log(a != c) // Diferente

//na comparacao de vetores, os resultados não são consistentes
//CONCLUSÃO: VETORES NÃO SÃO DIRETAMENTE COMPARAVEIS ENTRE SI

console.log('---------------Objetos-----------------')

a ={ marca: 'Volkswagen', modelo: 'fusca', ano: 1976}
b ={ marca: 'fiat', modelo: 'f147', ano: 1980}
c ={ marca: 'Volkswagen', modelo: 'fusca', ano: 1976}

console.log(a > b)
console.log(a < b)
console.log(a == c) // Igual
console.log(a != c) // Diferente


//Objetos também apresentam inconsistencia se comparados diretamente

//CONCLUSÃO GERAL
//TIPOS DE DAOS QUE SÃO COMPARAVEIS EM JS: NUMBER, STRING, BOOLEANS
