let comps, trocas, passadas

function quickSort(vetor, fnComp, ini = 0, fim = vetor.length -1){ // 2 parametros obrigatorios e 2 opcionais
    if(fim > ini){ // deve ter mais de um elemento para ordenar
        passadas++
    let pivot = fim
    let div = ini -1
    //for indo do primeiro elemento ate o pivot
    for(let i = ini; i < fim; i++){
        if(fnComp(vetor[pivot],vetor[i])){  //Parametros Invertidos
            div++
            [vetor[i],vetor[div]] =[vetor[div],vetor[i]]
            trocas++
        }
        comps++
    }
    div++
    // Colocando o Pivô em seu lugar definitivo

    if(fnComp(vetor[div],vetor[pivot])){
        [vetor[pivot], vetor[div]]= [vetor[div],vetor[pivot]]
        trocas++

    } 
     comps++

    //QuickSort a Esquerda

    quickSort(vetor,fnComp, ini, div - 1)

    //QuickSort a direita
    quickSort(vetor,fnComp, div + 1 , fim)
 }

}

//ordenando pelo nome de urna
trocas = 0, comps = 0, passadas = 0

import { candidatos } from './includes/candidatos-2018.mjs'
//ordenacao pelo nome de registro do candidato


console.log('ANTES:' , candidatos)
console.time('ordenando por nome de registro ...')
quickSort(candidatos, (a,b) => a.NM_CANDIDATO > b.NM_CANDIDATO)
console.timeEnd('ordenando por nome de registro ...')
console.log('DEPOIS: ',candidatos)
console.log({ trocas,comps,passadas})

//ordenando pelo nome de urna

console.log('ANTES:' , candidatos)
console.time('ordenando por nome de registro ...')

quickSort(candidatos,(a,b) => {
    if(a.SG_UE === b.SG_UE){
        if(a.DS_CARGO == b.DS_CARGO)return a.NR_CANDIDATO > b.NR_CANDIDATO
        else return a.DS_CARGO > b.DS_CARGO
        }
        else return a.SG_UE > b.SG_UE
})
console.timeEnd('ordenando por nome de registro ...')
console.log('DEPOIS: ',candidatos)
console.log({ trocas,comps,passadas})

