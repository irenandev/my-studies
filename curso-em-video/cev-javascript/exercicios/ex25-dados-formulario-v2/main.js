const app = document.querySelector('#app')
const section = document.createElement('section')

app.appendChild(createElement('h1', 'Contando de 0 até um número positivo qualquer'))
app.appendChild(createLabel())
app.appendChild(createInput())
app.appendChild(createButton())
app.appendChild(createElement('p', 'Preencha os dados acima e aperte o botão.'))

function createElement(type, text) {
  const element = document.createElement(type)
  element.textContent = text
  return element
}

function createLabel() {
  const label = document.createElement('label')
  label.setAttribute('for', 'num')
  label.textContent = 'Valor final: '
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
  button.textContent = 'Contar'
  button.addEventListener('click', contar)
  return button
}

function contar() {
  const num = document.querySelector('#num').value
  const contador = 0

  const msg = `<h2>Contando de <strong>${contador}</strong> até <strong>${num}</strong></h2>`
  section.innerHTML = msg

  if (num < 0) {
    alert('[ERRO] - Confira o número digitado.')
  } else {
    for(let i = contador; i <= num; i++) {
      section.innerHTML += `${i} 👉`
    }
    section.innerHTML += `🏁`
  
  return app.appendChild(section)
  }
}
