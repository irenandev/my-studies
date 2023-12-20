const app = document.querySelector('#app')
const title = document.createElement('h1')
const section = document.createElement('section')

title.textContent = 'Contando de 1 a 10'
section.innerHTML = `Aperte o botão acima para contar`


function createButton() {
  const button = document.createElement('button')
  button.textContent = 'Contar'
  button.addEventListener('click', contar)
  return button
}

function contar() {
  let contador = 1
  section.textContent = ``
  
  while(contador <= 10) {
    section.textContent += ` ${contador} 👉`
    contador++
  }

  section.innerHTML += ` 🏁`
}

app.appendChild(title)
app.appendChild(createButton())
app.appendChild(section)