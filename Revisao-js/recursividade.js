//Função Calculo Fatorial


//o fatorial de um numero é igual a ele proprio multiplicado por todos os seus antecessores ate o 1


//5! = 5 * 4 * 3 * 2 * 1(120)
//4! = 4* 3 * 2 * 1 (24)


//Função de calculo do fatorial, pelo método INTERATIVO

function fatorial1(n) {
    let res = 1
    for(let i = n; i > 1; i--) res *= i //res = res * 1
    return res
}

console.log(fatorial1(5))
console.log(fatorial1(4))


//5! = 5 * 4 * 3 * 2 * 1(120)
//4! = 4* 3 * 2 * 1 (24)
//5! = 5 *(4!)
//5! = 5 *((5-1)!)
//n! = n! = n ˜*((n-1)!)

//1! = 1
//0! = 1


// Função de cálculo do fatorial, pelo metodo recursivo

function fatorial2 (n) {
    console.log({n})
    if(n <= 1) return 1 //condição parada
    else return n * fatorial2(n-1)
}

console.log(fatorial2(5))
console.log(fatorial2(4))
