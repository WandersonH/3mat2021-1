function buscaSequencial(vetor, fnComp) {
    //percurso com for tradicional
    for (let i = 0; i < vetor.length; i++) {
        //encontrando o valor de busca, retorna-se a posicao onde foi encontrado
        //fnComp representa a chamada a função Externa
        if (fnComp(vetor[i])) return i
    }

    //retorna-se -1 caso o valor de busca não tenha sido encontrado
    return -1
}
//recebe apenas um elemento de nome e retorna true caso a propriedade first_name
//seja idêntica ao valor de busca

/*function comparaNome(objNome, valorBusca){
    return objNome.first_name === valorBusca
}*/

const comparaNome = (objNome, valorBusca) => objNome.first_name === valorBusca

import { objNomes } from './includes/vetor-obj-nomes.mjs'

console.time('buscando Zilmar')
console.log(buscaSequencial(objNomes, obj => obj.first_name === 'ZILMAR'))
console.timeEnd('buscando Zilmar')

console.time('buscando Wanderson')
console.log(buscaSequencial(objNomes, obj => obj.first_name === 'WANDERSON'))
console.timeEnd('buscando Wanderson')

console.time('buscando KATIUCIA')
console.log(buscaSequencial(objNomes, obj => obj.first_name === 'KATIUSCIA'))
console.timeEnd('buscando KATIUCIA')

console.time('buscando ABRAAO')
let posEncontrado = buscaSequencial(objNomes, obj => obj.first_name === 'ABRAAO')
console.timeEnd('buscando ABRAAO')
console.log(objNomes[posEncontrado]) //imprimi todo vetor


console.time('Buscando group_name MARIA')
console.log(buscaSequencial(objNomes, obj => obj.group_name === 'MARIA'))
console.timeEnd('Buscando group_name MARIA')






