// alert("Seja bem-vindo(a) ao meu site!")
const app = document.querySelector('#app')
const title = document.createElement('h1')
title.textContent = "Trabalhando com números"

let msg = document.createElement('p')
msg.textContent = 'O resultado vem aqui...'


function button() {
  const button = document.createElement('button')
  button.textContent = 'Clique para calcular'
  button.addEventListener('click', inicio)
  return button
}


function dobro(n) {
  return n * 2
}

function metade(n) {
  return n / 2
}

function inicio() {
  const num = prompt('Digite um número!')
  const m = document.querySelector('p')
  m.innerHTML = `O dobro de <strong>${num}</strong> é <strong>${dobro(num)}</strong> e a metade é <strong>${metade(num)}</strong>`
  return m
}

app.appendChild(title)
app.appendChild(button())
app.appendChild(msg)