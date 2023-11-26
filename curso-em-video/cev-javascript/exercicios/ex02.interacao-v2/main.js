const app = document.querySelector('#app')
const title = document.createElement('h1')
title.innerText = 'Interagindo com um botão'
app.appendChild(title)

function btnStart() {
  const button = document.createElement('button')
  button.innerText = 'Clique em mim!'
  button.addEventListener('click', interagir)
  return button
}

function interagir() {
  alert('Você clicou no botão!')
}

app.appendChild(btnStart())