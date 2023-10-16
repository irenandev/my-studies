let main = document.querySelector('main')

let section = document.createElement('section')
section.innerHTML = `<p>Cada vez que você apertar o botão acima, eu penso em um número entre <strong>1</strong> e <strong>100</strong>.</p>`

let btnGerar = document.querySelectorAll('button')[0]
btnGerar.addEventListener('click', gerar)

let btnLimpar = document.querySelectorAll('button')[1]
btnLimpar.addEventListener('click', limpar)


function gerar() {
  let min = 1
  let max = 100
  let num = Math.floor(Math.random() * (max - min + 1) + min)
  section.innerHTML += `<p>Acabei de pensar no número <strong>${num}</strong></p>`
}

function limpar() {
  section.innerHTML = `<p>Cada vez que você apertar o botão acima, eu penso em um número entre <strong>1</strong> e <strong>100</strong>.</p>`
}
main.appendChild(section)