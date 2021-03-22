/*

QUICK SORT

Escolhe um dos elementos do vetor para ser o pivô( na nossa implementação
    o último elemento) e, na primeira, divide o vetor, a partir de sua posição
    final do vetor, em um subvetor á esqueda contendo apenas valores maiores que o pivo.

    em seguida, recursivamente, repete o processo em cada um dos subvetores aque que todo
    o vetor esteja ordenado
*/

let comps, trocas, passadas

function quickSort(vetor, ini = 0, fim = vetor.length -1){
    if(fim > ini){ // deve ter mais de um elemento para ordenar
        passadas++
    let pivot = fim
    let div = ini -1
    //for indo do primeiro elemento ate o pivot
    for(let i = ini; i < fim; i++){
        if(vetor[i] < vetor[pivot]){
            div++
            [vetor[i],vetor[div]] =[vetor[div],vetor[i]]
            trocas++
        }
        comps++
    }
    div++
    // Colocando o Pivô em seu lugar definitivo

    if(vetor[pivot] < vetor[div]){
        [vetor[pivot], vetor[div]]= [vetor[div],vetor[pivot]]
        trocas++

    } 
     comps++

    //QuickSort a Esquerda

    quickSort(vetor, ini, div - 1)

    //QuickSort a direita
    quickSort(vetor, div + 1 , fim)
 }

}

//let nums = [7, 4, 9, 0, 6, 1, 8, 2, 5, 3]
//let nums = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let n
comps = 0, trocas =0 , passadas =0
quickSort(nums)
console.log(nums)
console.log({comps, trocas, passadas})

console.log('------------------ 100 mil nomes')

 import { nomes } from './includes/100-mil-nomes.mjs'

comps = 0, trocas =0 , passadas =0
console.time('ordenando nomes')
quickSort(nomes)
console.timeEnd('ordenando nomes')
let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.log({comps, trocas, passadas, memoria})
console.log('Depois: ', nomes)
