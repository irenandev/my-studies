const app = document.querySelector('#app')
const title = document.createElement('h1')
const subTitle = document.createElement('h2')
title.textContent = 'Registro de cliques'
subTitle.textContent = 'Clique nos botões acima, para registrar.'
const msg = document.createElement('section')
function button(num) {
  const button = document.createElement('button')
  button.textContent = `Ação ${num}`
  //arrow function
  button.addEventListener('click', () => {
    msg.innerHTML += `<p>Você clicou no botão <strong>${num}</strong></p>`
  })

  return button
}

app.appendChild(title)
app.appendChild(button(1))
app.appendChild(button(2))
app.appendChild(button(3))
app.appendChild(button(4))

msg.appendChild(subTitle)
app.appendChild(msg)
