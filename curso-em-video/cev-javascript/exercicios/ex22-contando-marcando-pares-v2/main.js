const app = document.querySelector('#app')
const title = document.createElement('h1')
const section = document.createElement('section')

title.textContent = 'Contando de 1 a 10 (marcando os pares)'
section.textContent = `Aperte o botão acima para contar`

function createButton() {
  const button = document.createElement('button')
  button.textContent = 'Contar'
  button.addEventListener('click', contar)
  return button
}

function contar() {
  section.innerHTML = ''

  for(let contador = 1; contador <= 10; contador++) {
    section.innerHTML += ` ${pares(contador)} 👉`
  }

  section.innerHTML += `🏁`
}

function pares(n) {
  if(n % 2 === 0) {
    return `<strong>${n}</strong>`
  } else {
    return n
  }
}

app.appendChild(title)
app.appendChild(createButton())
app.appendChild(section)