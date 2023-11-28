const app = document.querySelector('#app')
const title = document.createElement('h1')
const msg = document.createElement('p')
title.textContent = 'Somando dois números'

function button() {
  const button = document.createElement('button')
  button.textContent = 'Iniciar a soma'
  button.addEventListener('click', iniciar)
  return button
}

function iniciar() {
  const num1 = Number(prompt('Digite um número:'))
  const num2 = Number(prompt('Digite outro número:'))
  const result = soma(num1, num2)

  return msg.innerHTML = `A soma entre <strong>${num1}</strong> + <strong>${num2}</strong> = <strong>${result}</strong>`
}

function soma(n1, n2) {
  if(isNaN(n1) || isNaN(n2)) {
    return alert('Digite apenas número')
  
  } else {
    return n1 + n2
  }
}

app.appendChild(title)
app.appendChild(button())
app.appendChild(msg)