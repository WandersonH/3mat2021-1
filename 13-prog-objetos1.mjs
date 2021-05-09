const forma1 = {
    base: 12,
    altura: 7.5,
    tipo: 'Q' //Quadrilátero
}
const forma2 = {
    base: 15,
    altura: 9.4,
    tipo: 'T' //Quadrilátero
}
const forma3 = {
    base: 6.2,
    altura: 8.8,
    tipo: 'E' //Elipse
}
const forma4 = {
    base: 16,
    altura: 11,
    tipo: 'S' //Forma Desconhecida
}
const forma5 = {
    base: 'aocrnha',
    altura: 'Melão',
    tipo: 'T' //String
}

const forma6 = {
    base: 5.5,
    altura: 7,
    tipo: 'E' //Forma Desconhecida
}

/*

o Problema dessa abordagem com objetos é que impossivel controlar a criação do objeto
Objetos podem ser criados de forma "Defeituosa", não aderindo aos requisitos necessários
para sua utilização (é o caso da forma4, forma5 e forma6).

*/

function calcularArea(forma){
    switch(forma.tipo){
        case 'Q':
            return forma.base * forma.altura
        case 'T':
            return forma.base * forma.altura / 2 
        case 'E':
            return (forma.base/2) * (forma.altura / 2) * Math.PI
        default:
            return NaN
    }
}

console.log('Área da forma1: ', calcularArea(forma1))
console.log('Área da forma2: ', calcularArea(forma2))
console.log('Área da forma3: ', calcularArea(forma3))
console.log('Área da forma4: ', calcularArea(forma4))
console.log('Área da forma5: ', calcularArea(forma5))
console.log('Área da forma6: ', calcularArea(forma6))