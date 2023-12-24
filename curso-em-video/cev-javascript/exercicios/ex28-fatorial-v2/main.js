const app = document.querySelector('#app')
const section = document.createElement('section')

const title = createElement('h1', 'Cálculo de Fatorial')
const desct = createElement('p', 'Escreva um número (entre 1 e 21) na caixa a seguir e te mostrarei o Fatorial dele.')

function createElement(type, textElement) {
  const element = document.createElement(type)
  element.textContent = textElement
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
  button.textContent = 'Fatorial'
  button.addEventListener('click', fatorial)
  return button
}

function fatorial() {
  const num = parseInt(document.querySelector('#num').value)
  let fat = 1

  section.innerHTML = `<h2>Calculando <strong>${num}</strong></h2>`

  if(num > 21) {
    alert('[ERRO] - Verifique o número e tente novamente')
  } else {
    for(let i = num; i > 1; i--) {
      section.innerHTML += `<strong>${i}</strong> x `
      fat *= i
    }
    section.innerHTML += `1 = <strong>${fat.toLocaleString('pt-BR')}</strong>`
    return app.appendChild(section)
  }

}

app.appendChild(title)
app.appendChild(desct)
app.appendChild(createLabel())
app.appendChild(createInput())
app.appendChild(createButton())