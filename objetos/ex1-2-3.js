// Exercício 1
const carro = {marca: 'Chevrolet', modelo: 'Corsa', ano: '2012'}
console.log(carro)

// Exercício 2
console.log(carro['marca'])

carro.ano = '2021'

console.log(carro)

// Exercício 3

carro.cor = 'preto'

delete carro.modelo

console.log(carro)