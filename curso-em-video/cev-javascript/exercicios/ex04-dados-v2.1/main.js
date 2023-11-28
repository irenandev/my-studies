const app = document.querySelector('#app')

const title = document.createElement('h1')
title.textContent = 'Trabalhando com dados v2.1'
app.appendChild(title)

function sButton() {
  const btn = document.createElement('button')
  btn.textContent = 'Clique para iniciar'
  btn.addEventListener('click', iniciar)
  return btn
}

function iniciar() {
  const name = prompt('Qual é seu nome?')
  msg.innerHTML = `Olá, <strong>${name}!</strong> É um grande prazer em te conhecer!`
  return msg
}

app.appendChild(sButton())
const msg = document.createElement('p')
app.appendChild(msg)
