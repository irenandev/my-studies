const app = document.querySelector('#app')
const title = document.createElement('h1')
const res = document.createElement('section')

title.textContent = 'Interagindo com o sistema'
res.innerHTML = `<p>Aqui vai aparecer o resultado...</p>`

function button() {
  const button = document.createElement('button')
  button.textContent = 'Clique aqui'
  button.addEventListener('click', () => {
    const date_sistema = new Date()
    res.innerHTML = `<h2>O sistema informou: <strong>${date_sistema}</strong></h2>`
  })
  return button
}

app.appendChild(title)
app.appendChild(button())
app.appendChild(res)