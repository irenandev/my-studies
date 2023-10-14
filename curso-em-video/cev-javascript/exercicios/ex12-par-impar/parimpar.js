let main = document.querySelector('main')
let button = document.querySelector('button')

let res = document.createElement('section')
res.setAttribute('class', 'res')
res.innerHTML = `<p>O resultado vai aparecer aqui...</p>`
main.appendChild(res)

button.addEventListener('click', iniciar)

function iniciar() {
  let num = Number(prompt('Digite um número:'))
  let par_impar = num % 2

  let tipo = par_impar != 0 ? 'impar' : 'par' 

  res.innerHTML = `<p>O número <strong>${num}</strong> é <strong>${tipo}</strong></p>`
}
