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


