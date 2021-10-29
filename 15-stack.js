const texto = "Socorram-me, subi no ônibus em Marrocos"

//usar vetor como uma estrutura de pilha
const pilha = []

// Desmontando o texto e colocando cada letra na pilha
for(let i = 0; i < texto.length; i++){
    //na pilha, a inserção sempre ocorre no fim
    pilha.push(texto.charAt(i))
}

// pilha.unshift('x', 'Y', 'Z') // Insere no inicio ( Operação proibida em uma pilha)
// pilha.splice(14 , 0, 'Ç' , '8' , '2') // insere no meio (também proibido em uma pilha)
// pilha.splice(22, 7,) //exclusão meio da pilha (PROIBIDO!)

console.log(pilha)

let textoRev= ''
while(pilha.length){
    //Na pila, a rotina é sempre feita tambem do fim
    textoRev += pilha.pop()
}

console.log(textoRev)