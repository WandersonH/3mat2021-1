// Vetores em javaScript
let frutas = [ 'laranja', 'maca', 'banana', 'pera', 'uva', 'mamão']

//exibir o vetor
console.log(frutas)

//retirar o ultimo elemento do vetor
let ultimaFruta = frutas.pop()

console.log(frutas)
console.log(ultimaFruta)

//retirar primeiro elemento do vetor 

let primeiraFruta = frutas.shift()

console.log(frutas)
console.log(primeiraFruta)

//retirar elementos de posicoes intermediarias do vetor
//splice
//1 paramentro: posicão que será removida(embre-se que a contagem comeca no 0)
// 2 parâmetro: Quantidade de elementos que serao removidos
let terceiraFruta = frutas.splice(2,1)

console.log(frutas)
console.log(terceiraFruta) //splice sempre retorna um vetor


// ------------------------------------------------------------
//todos os metodos de insercao permitem insercao multipla
//inserir elementos vetor "Última posicao"

frutas.push('Jabuticaba')

console.log(frutas)

frutas.push('Manga','limao')

console.log(frutas)


//inserir elemento no "inicio do vetor"
frutas.unshift('Amora')

console.log(frutas)

frutas.unshift('Acerola','Melancia')

console.log(frutas)


//insertindo em "posicao intermediaria"
//splice() para insercão
//Primeiro Parametro: a posicao onde ocorrera a insercão
//Segundo Parametro: quantos elementos serao excluidos (0)
//parametros seguintes elementos a serem inseridos


frutas.splice(3,0,'Pessego')

console.log(frutas)


//inserindo duas frutas na 5 posicao
frutas.splice(5,0,'Jaca','Caqui')

console.log(frutas)

//splice realizando remocao item anterior e insercao de novo
frutas.splice(5,1,'Mamao')
console.log(frutas)



/***************************************
 * percursos de vetores
 */

 // 1 ) percorrer via for tradicional 
 // é o mais flexivel, permitindo o percurso parcial (pode comecar
 // em um elemento que nao seja o primeiro e terminar em um elemento
 //que não seja o ultimo)


for (let i=0; i < frutas.length; i++){
    console.log(i, frutas[i])
}
console.log("---------------------------------------------------")
//percurso arte do vetor iniciando no item 3

for (let i=3; i<frutas.length; i++){
    console.log(i, frutas[i])
}
console.log("---------------------------------------------------")
//2) percurso via for tradicional, em ordem inversa

for(let i = frutas.length -1; i >= 0; i--){
    console.log(i,frutas[i])
}
console.log("---------------------------------------------------")
//3) percurso usando for of
//percorre totalmente um vetor, sem a necessidade de manter uma variavel contadora
//variaveus:
//fruta -> nome da variavel que recebera cada elemento(pode ser qualquer nome valido de variavel)
//frutas-> o nome do vetor que esta sendo percorrido

for(let fruta of frutas){
    console.log(fruta)
}

console.log(" forEach()---------------------------------------------------")

//4) percurso utilizando forEach()
//forEach() recebe como argumento uma funcao cujo o argumento
//é cada um dos elementos do vetor percorrido
//nome do parametro da funcão passada pode ser qualquer nome valido de indentificador
frutas.forEach(function(elemento){
    console.log(elemento)
})

console.log("forEach() com Arrow---------------------------------------------------")

// forEach() utilizando arrow funcion como p[arametro
frutas.forEach(elemento => console.log(elemento))
 