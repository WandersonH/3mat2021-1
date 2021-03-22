/*
 MERGE SORT
 
  No Processo de ordenação, esse algoritimo "desmonta"o vetor original
  contendo N elementos ate obter N vetores de apenas um elemento cada um.
  Em seguida, udando a tecnica de mesclagem (merge), "remonta"o vetor.
  dessa vez com os elementos já em ordem
  
  */




  function mergeSort(vetor){

    function mesclar(vetEsq, vetDir){
        let pEsq = 0, pDir =0
        while(pEsq < vetEsq.length && pDir <vetDir.length){
            if(vetEsq[pEsq]< vetDir[pDir]){
                pEsq++
            }
            else{
                vetRes.push(vetDir[pDir])
            }
        }
        //Falta Processar Sobra
    }
      //Desmontando o vetor
      if(vetor.length > 1){ // Para desmontar, são necessarios pelo menos 2 elementos
          let meio = Math.floor(vetor.length / 2)
          //slice(): fatia um vetor, desde a posição inicial indicada(inclusiva)
          //até a posição final (eexclusice - A ÚLTIMA POSIÇÃO NÃO ENTRA NA FATIA GERADA)
          const vetEsq = vetor.slice(0, meio)
          //quando o segundo parâmetro de slice( é omitido, são incluidos todos elementos
          //até o fim

          const vetDir = vetor.slice(meio)

          console.log({vetEsq, vetDir})


          //chamadas recursivas á própria função para continuar o processo  de desmontagem


          mergeSort(vetEsq)
          mergeSort(vetDir)


      } 
  }


  let nums = [7, 4, 9, 0, 6, 1, 8, 2, 5, 3]

  mergeSort(nums)