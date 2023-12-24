const app = document.querySelector('#app')
const section = document.createElement('section')

const title = createElement('h1', 'Super Tabuada')
const desc = createElement('p', 'Escreva um número na caixa a seguir e te mostrarei a tabuada dele.')

function createElement(type, text) {
  const element = document.createElement(type)
  element.textContent = text
  return element
}

function createLabel() {
  const label = document.createElement('label')
  label.setAttribute('for', 'num')
  label.textContent = 'Número: '
  return label
}

function createInput() {
  const input = document.createElement('input')
  input.setAttribute('type', 'number')
  input.setAttribute('id', 'num')
  return input
}

function createButton() {
  const button = document.createElement('button')
  button.textContent = 'Tabuada'
  button.addEventListener('click', tabuada)
  return button
}

function tabuada() {
  const num = parseInt(document.querySelector('#num').value)

  section.innerHTML = `<h2>Tabuada do <strong>${num}</strong></h2>`

  for(let i = 0; i <= 10; i++) {
    section.innerHTML += `<p>${num} x ${i} = <strong>${num * i}</strong></p>`
  }
  return app.appendChild(section)
}

app.appendChild(title)
app.appendChild(desc)
app.appendChild(createLabel())
app.appendChild(createInput())
app.appendChild(createButton())