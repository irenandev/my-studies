let num = [4, 2, 9, 8, 1]
num.sort() //coloca o vetor em ordem crescente
num.push(3) // vai add no final do vetor
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

console.log(num)

let pos = num.indexOf(5) // vai procurar o valor e indicar a posição que está
console.log(pos) // se retorna -1 não tem o valor indicado no vetor