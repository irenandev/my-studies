const app = document.querySelector('#app')
const title = document.createElement('h1')
const res = document.createElement('section')
title.textContent = 'É par ou Impar?'
res.innerHTML = `<p>O resultado vai aparecer aqui...</p>`

function button() {
  const button = document.createElement("button")
  button.textContent = "Clique para inciar"
  button.addEventListener('click', iniciar)
  return button
}

function iniciar() {
  const num = parseInt(prompt('Digite um número:'))

  if (isNaN(num)) {
    alert('ERRO - Digite um númnero válido!')
    res.innerHTML = "<h2>[ERRO] - Digite um número valido!</h2>"
  } else {
    const parImpar = num % 2 === 0 ? 'PAR' : 'IMPAR'
    const msg = res.innerHTML = `<p>O número <strong>${num}</strong> é <strong>${parImpar}</strong></p>`
    return msg
  }
}

app.appendChild(title)
app.appendChild(button())
app.appendChild(res)
