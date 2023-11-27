const app = document.querySelector('#app')
const title = document.createElement('h1')

title.textContent = 'Trabalhando com dados v2.0'
app.appendChild(title)

function sButton() {
  const btn = document.createElement('button')
  btn.textContent = 'Clique para iniciar'
  btn.addEventListener('click', iniciar)
  return btn
}

function iniciar() {
  const name = prompt('Qual é seu nome?')
  return alert(`Olá, ${name}! Prazer em te conhecer.`)
}

app.appendChild(sButton())