let comps =0 , divisoes = 0, juncoes =0

function mergeSort(vetor, fnComp) {

    function mesclar(vetEsq, vetDir) {
        let pEsq = 0, pDir = 0, vetRes = []
        while(pEsq < vetEsq.length && pDir < vetDir.length) {
            if(fnComp(vetDir[pDir], vetEsq[pEsq])) { // parametros invertidos
                vetRes.push(vetEsq[pEsq])
                pEsq++
            }
            else {
                vetRes.push(vetDir[pDir])
                pDir++
            }
            comps++
        }
        // Verificando de qual lado houve sobra
        let sobra
        if(pEsq < pDir) sobra = vetEsq.slice(pEsq)      // Sobra à esquerda
        else sobra = vetDir.slice(pDir)                 // Sobra à direita

        // O vetor retornado será formado pelo vetor resultado + sobra
        return [...vetRes, ...sobra]  // Concatenando os dois vetores
    }

    // Desmontando o vetor
    if(vetor.length > 1) {  // Para desmontar, são necessários pelo menos 2 elementos
        let meio = Math.floor(vetor.length / 2)
        // slice(): fatia um vetor, desde a posição inicial indicada (inclusive)
        // até a posição final (exclusive - A ÚLTIMA POSIÇÃO NÃO ENTRA NA FATIA GERADA)
        let vetEsq = vetor.slice(0, meio)
        // Quando o segundo parâmetro de slice() é omitido, são incluídos todos os elementos
        // até o final
        let vetDir = vetor.slice(meio)
        divisoes++
        
        //console.log({vetEsq, vetDir})

        // Chamadas recursivas à própria função para continuar o processo de desmontagem
        vetEsq = mergeSort(vetEsq,fnComp)
        vetDir = mergeSort(vetDir,fnComp)
        
        let vetFinal = mesclar(vetEsq, vetDir)
        juncoes++

        //console.log({vetFinal})

        return vetFinal

    }
    return vetor // condição sainda : vetor.lengtj ===1
}




import { candidatos } from './includes/candidatos-2018.mjs'


comps=0, divisoes = 0, juncoes = 0
console.time('ordenando por nome de registro ...')
let candidatosOrd = mergeSort(candidatos, (a,b) => a.NM_CANDIDATO > b.NM_CANDIDATO)
console.timeEnd('ordenando por nome de registro ...')
let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.log('DEPOIS: ',candidatosOrd)
console.log({comps, divisoes, juncoes,memoria})