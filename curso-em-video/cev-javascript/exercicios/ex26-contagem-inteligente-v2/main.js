const app = document.querySelector('#app')
const section = document.createElement('section')

const title = createElement('h1', "Contagem inteligente")
const descript = createElement('p', 'Use qualquer valor nas caixas, simule contagens crescentes e regressivas. Use também valores negativos.')


function createElement(type, text) {
  const element = document.createElement(type)
  element.textContent = text
  return element
}

function createLabel(name, textLabel) {
  const label = document.createElement('label')
  label.setAttribute('for', name)
  label.textContent = textLabel
  return label
}

function createInput(idName) {
  const input = document.createElement('input')
  input.setAttribute('type', 'number')
  input.setAttribute('id', idName)
  return input
}

function createButton() {
  const button = document.createElement('button')
  button.textContent = 'Contar'
  button.addEventListener('click', contagem)
  return button
}

function contagem() {
  const vInicio = Number(document.querySelector('#inicio').value)
  const vFim = Number(document.querySelector('#fim').value)
  let i;

  section.innerHTML = `<h2>Contando de <strong>${vInicio}</strong> até <strong>${vFim}</strong></h2>`

  if(vInicio === vFim) {
    alert('Não é possível contar, pois os números são iguais')
  } else {
    if(vInicio <= vFim) {
      for(i = vInicio; i <= vFim; i++) {
        section.innerHTML += `${i} 👉 `
      }
    } else {
      for(i = vInicio; i >= vFim; i--) {
        section.innerHTML += `${i} 👉 `
      }
    }
    section.innerHTML += `🏁`
  
    app.appendChild(section)
  }
}

app.appendChild(title)
app.appendChild(descript)

app.appendChild(createLabel('inicio', 'Início da contagem'))
app.appendChild(createInput('inicio'))

app.appendChild(createLabel('fim', 'Fim da contagem'))
app.appendChild(createInput('fim'))
app.appendChild(createButton())