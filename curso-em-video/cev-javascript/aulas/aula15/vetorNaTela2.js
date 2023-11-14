let num = [2, 8, 5, 1, 7]

// Só funciona para Arrays e objetos
// Para cada posição DENTRO de num

for(let pos in num) {
  console.log(`A posição ${pos} tem o número: ${num[pos]}`)
}