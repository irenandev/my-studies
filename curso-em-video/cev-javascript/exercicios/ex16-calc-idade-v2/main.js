const app = document.querySelector('#app')
const title = document.createElement('h1')
const res = document.createElement('section')

title.textContent = 'Calculando a idade'
res.innerHTML = `<p>Aqui vai aparecer o resultado...</p>`

function button() {
  const button = document.createElement('button')
  button.textContent = 'Iniciar'
  button.addEventListener('click', () => {
    const date = new Date()
    const year = date.getFullYear()
    const birthdate = parseInt(prompt('Em que ano você nasceu?'))

    res.innerHTML = `<p>Quem nasceu em <strong>${birthdate}</strong> vai completar <strong>${age(year, birthdate)} anos</strong> em <strong>${year}</strong></p>`
  })
  return button
}

function age(y, b) {
  const age = y - b
  return age
}

app.appendChild(title)
app.appendChild(button())
app.appendChild(res)