/*
SELECTION SORT

Trata-se de uma otimiza'ão do bubble sort, diminuindo drasticamente
o numero de tocas necessarias para fazer a ordenação.
Isola um dos valores o vetor e procura pelo menor valor entre os restantes, 
promovendo a troca caso o primeiro valor seja maior que o segundo
*/
let trocas, pass, comps
function selectionSort(vetor){

    trocas= 0, pass = 0 , comps = 0
    function encontraMenor(inicio){
        let menor = inicio 
        for(let j = inicio + 1; j < vetor.length; j++ ){
            if(vetor[j] < vetor[menor]) menor = j
            comps++
        }
        return menor //encontra menor numero do vetor
    }


// o vetor será percorrido da primeira ate a penultima posicao

for(let i = 0; i <=vetor.length - 2; i++){
    pass++
    let menor = encontraMenor(i+1)
    if(vetor[menor] < vetor[i]){
    [vetor[menor], vetor[i]]=[vetor[i],vetor[menor]]
    trocas++
    }  
    comps++
}
}


//let nums = [7, 4, 9, 0, 6, 1, 8, 2, 5, 3] // 8 trocas 45 comparacoes 9 passadas
let nums = [9, 8, 7, 6, 5, 4, 3,2, 1, 0] //pior caso bubble sort 5 trocas 45 comparcoes 9 passadas 


console.log('antes: ', nums )
selectionSort(nums)
console.log('DEPOIS: ', nums)
console.log({trocas, comps, pass})

 import { nomes } from './includes/100-mil-nomes.mjs'

console.log('Antes', nomes)
console.time('ordenando nomes')
selectionSort(nomes)
console.timeEnd('ordenando nomes')
console.log('Depois:', nomes)
console.log({trocas, comps, pass})
let memoria = process.memoryUsage().heapUsed / 1024 / 1024
