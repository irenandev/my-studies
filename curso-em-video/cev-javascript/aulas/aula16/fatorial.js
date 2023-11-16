function fatorial(n) {
  let fat = 1
  let contador = 0
  for(contador = n; contador > 1; contador--) {
    fat *= contador
  }
  return fat
}

console.log(fatorial(5))