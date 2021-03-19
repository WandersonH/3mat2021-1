/**
 ALGORITIMO DE ORDENAÇÃO BUBBLE SORT
Percorre o vetor,comparando um elemento com seu sucessor. Caso o sucessor 
seja menor que o valor atual, ocorre a troca entre eles.
Esse processo se repete em cvarias passadas até que, no percurso final, 
nenhuma troca seja feita.
 */

///variaveis de estatistica
let totTrocas, comps, pass


 function bubbleSort(vetor) {
     totTrocas = 0, comps = 0, pass=0
     let trocas
     do{
         trocas = 0 // inicio de uma nova passada
         pass++

         //percurso dovetor do inicio ate o PENÚLTIMO elemento

         for(let i = 0; i <= vetor.length - 2; i++) {
         if(vetor[i] > vetor[i + 1 ]) {
             
             //tradicional
             //let aux = vetor[i]
             // vetor[i] = vetor[i + 1]
             //vetor[i + 1]= aux

             //desestruturaçao elementos
             [vetor[i], vetor[i + 1]] = [vetor[ i + 1], vetor[i]]

             trocas++
            
         }
         comps++
        }
        totTrocas += trocas

     }while(trocas > 0)
 }



 //let nums = [7, 4, 9, 0 , 6 , 1 ,8, 2, 5, 3] trocas 26 comparacoes 63 passadas 7
 //let nums = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0] trocas 45 comparacoes 90 passadas 10
 let nums = [0,1, 2, 3, 4, 5, 6, 7,8,9 ]

 console.log('Antes', nums)
 bubbleSort(nums)
 console.log('Depois:', nums)
 console.log(totTrocas, comps, pass)

 import { empresas } from './includes/15-mil-empresas.mjs'

console.log('Antes', empresas)
console.time('ordenando empresas')
 bubbleSort(empresas)
 console.timeEnd('ordenando empresas')
 console.log('Depois:', empresas)
 console.log(totTrocas, comps, pass)
 