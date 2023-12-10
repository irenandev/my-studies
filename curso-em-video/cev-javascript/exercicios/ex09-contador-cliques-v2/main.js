const app = document.querySelector("#app")
const title = document.createElement('h1')
const p = document.createElement('p')
title.textContent = 'Contador de cliques V2'

let nContador = 0

function btnContar() {
  const button = document.createElement('button')
  button.textContent = 'Clique para contar'
  button.addEventListener('click', contar)
  return button
}

function contar() {
  nContador++
  app.appendChild(p)
  return p.innerHTML = `O contador está com <strong>${nContador}</strong> cliques.`
}

function btnZerar() {
  const button = document.createElement('button')
  button.textContent = 'Zerar'
  button.addEventListener('click', zerar)
  return button
}

function zerar() {
  nContador = 0
  return p.innerHTML = `O contador está com <strong>${nContador}</strong> cliques.`
}

app.appendChild(title)
app.appendChild(btnContar())
app.appendChild(btnZerar())