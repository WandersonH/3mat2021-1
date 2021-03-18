let comps = 0

 function buscaBinaria(vetor, fnComp){
     comps = 0
     let ini = 0
     let fim = vetor.length -1
     let meio
     while(fim >= ini){
         meio = Math.floor((fim + ini) /2) //Math.floor()  arredonda o valor para parte inteira
         // console.log({ini, fim, meio, valorBusca})
         if (fnComp(vetor[meio]) === 0){
             comps++
         return meio //achou
         } 
         else if (fnComp(vetor[meio]) < 0){
            comps += 2 
            fim = meio -1
         }

         else {
             comps += 2 
             ini = meio +1
         }
     }

     return -1 //valor de busca não existe no vetor
 }


 //rerorno da arrow function parta a busca binaria
 //0: igualdade
 //-1: o valor de busca é MENOR que o valor do objeto comparado
 //1: o valor comparado é Maior que o valor do objeto comparado

 const comparaNomeBin = obj => {
     if (obj.first_name === 'FAUSTO') return 0
     else if ('FAUSTO' < obj.first_name) return -1
     else return 1
 }

 import { objNomes } from './includes/vetor-obj-nomes.mjs'

console.time('buscando Zilmar')
console.log(buscaBinaria(objNomes, obj => {
     const valorBusca = 'ZILMAR'
     if(obj.first_name === valorBusca) return 0
     else if (valorBusca < obj.first_name) return -1
     else return 1
}), {comps})
console.timeEnd('buscando Zilmar')

console.time('buscando Wanderson')
console.log(buscaBinaria(objNomes, obj =>{
     const valorBusca = 'WANDERSON'
     if(obj.first_name === valorBusca) return 0
     else if (valorBusca < obj.first_name) return -1
     else return 1
}), {comps})
console.timeEnd('buscando Wanderson')

console.time('buscando KATIUCIA')
console.log(buscaBinaria(objNomes, obj => {
    const valorBusca = 'KATIUCIA'
     if(obj.first_name === valorBusca) return 0
     else if (valorBusca < obj.first_name) return -1
     else return 1
}), {comps})
console.timeEnd('buscando KATIUCIA')

console.time('buscando ABRAAO')
console.log(buscaBinaria(objNomes, obj => {
    const valorBusca = 'ABRAAO'
     if(obj.first_name === valorBusca) return 0
     else if (valorBusca < obj.first_name) return -1
     else return 1
}), {comps})
console.timeEnd('buscando ABRAAO')



console.time('Buscando MARIA')
console.log(buscaBinaria(objNomes, obj => {
 const valorBusca = 'MARIA'
     if(obj.group_name === valorBusca) return 0
     else if (valorBusca < obj.group_name) return -1
     else return 1
}), {comps})
console.timeEnd('Buscando MARIA')