const app = document.querySelector('#app')
const title = document.createElement('h1')
const section = document.createElement('section')

title.textContent = 'Contagem regressiva de 10 a 1'
section.textContent = `Aperto o botão para contar`

function createButton() {
  const button = document.createElement('button')
  button.textContent = 'Contar'
  button.addEventListener('click', contar)
  return button
}

function contar() {
  section.textContent = ''
  for(let contador = 10; contador >= 1; contador--) {
    section.textContent += `${contador} 👉`
  }
  section.textContent += `🏁`
}


app.appendChild(title)
app.appendChild(createButton())
app.appendChild(section)