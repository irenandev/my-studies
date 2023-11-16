function parimpar(num) {
  if(num % 2 == 0) {
    return 'Par'
  } else {
    return 'Impar'
  }
}

let res = parimpar(5)

console.log(res)