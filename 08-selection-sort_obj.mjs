let trocas, pass, comps
function selectionSort(vetor,fnComp){

    trocas= 0, pass = 0 , comps = 0

    function encontraMenor(inicio){
        let menor = inicio 
        for(let j = inicio + 1; j < vetor.length; j++ ){
            //if(fnComp(vetor[j] < vetor[menor]) menor = j
            if(fnComp(vetor[menor], vetor[j])) menor = j
            comps++
        }
        return menor //encontra menor numero do vetor
    }


// o vetor será percorrido da primeira ate a penultima posicao

for(let i = 0; i <=vetor.length - 2; i++){
    pass++
    let menor = encontraMenor(i+1)
    if(fnComp( vetor[i], vetor[menor])){
    [vetor[menor], vetor[i]]=[vetor[i],vetor[menor]]
    trocas++
    }  
    comps++
}
}

import { candidatos } from './includes/candidatos-2018.mjs'
//ordenacao pelo nome de registro do candidato


console.log('ANTES:' , candidatos)
console.time('ordenando por nome de registro ...')
selectionSort(candidatos, (a,b) => a.NM_CANDIDATO > b.NM_CANDIDATO)
console.timeEnd('ordenando por nome de registro ...')
console.log('DEPOIS: ',candidatos)
console.log({ trocas,comps,pass})

//ordenando pelo nome de urna

console.log('ANTES:' , candidatos)
console.time('ordenando por nome de registro ...')
selectionSort(candidatos, (a,b) => a.NM_URNA_CANDIDATO > b.NM_URNA_CANDIDATO)
console.timeEnd('ordenando por nome de registro ...')
console.log('DEPOIS: ',candidatos)
console.log({ trocas,comps,pass})