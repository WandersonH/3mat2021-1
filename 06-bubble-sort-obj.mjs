///variaveis de estatistica
let totTrocas, comps, pass


 function bubbleSort(vetor,fnComp) {
     totTrocas = 0, comps = 0, pass=0
     let trocas
     do{
         trocas = 0 // inicio de uma nova passada
         pass++

         //percurso dovetor do inicio ate o PENÚLTIMO elemento

         for(let i = 0; i <= vetor.length - 2; i++) {

         if(fnComp(vetor[i],vetor[i + 1 ])) {
             
            
             [vetor[i], vetor[i + 1]] = [vetor[ i + 1], vetor[i]]

             trocas++
            
         }
         comps++
        }
        totTrocas += trocas

     }while(trocas > 0)
 }

// A função de comparação precisa retornar:
// true -> se o primeiro objeto for maior do que o segundo
// False -> caso contrário

import { candidatos } from './includes/candidatos-2018.mjs'
//ordenacao pelo nome de registro do candidato


console.log('ANTES:' , candidatos)
console.time('ordenando por nome de registro ...')
bubbleSort(candidatos, (a,b) => a.NM_CANDIDATO > b.NM_CANDIDATO)
console.timeEnd('ordenando por nome de registro ...')
console.log('DEPOIS: ',candidatos)
console.log({ totTrocas,comps,pass})

//ordenando pelo nome de urna

console.log('ANTES:' , candidatos)
console.time('ordenando por nome de registro ...')
bubbleSort(candidatos, (a,b) => a.NM_URNA_CANDIDATO > b.NM_URNA_CANDIDATO)
console.timeEnd('ordenando por nome de registro ...')
console.log('DEPOIS: ',candidatos)
console.log({ totTrocas,comps,pass})
