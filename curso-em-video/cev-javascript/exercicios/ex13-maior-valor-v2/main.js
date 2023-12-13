const app = document.querySelector('#app')
const title = document.createElement('h1')
const res = document.createElement('section')

title.textContent = 'Maior valor'
res.innerHTML = `<p>O resultado vai aparecer aqui...</p>`

function button() {
  const button = document.createElement('button')
  button.textContent = 'Clique para iniciar'
  button.addEventListener('click', iniciar)
  return button
}

function iniciar() {
  const num1 = parseInt(prompt('Digite um número:'))
  const num2 = parseInt(prompt('Digite outro número:'))

  if(isNaN(num1) || isNaN(num2)) {
    alert('Digite números válido!')
    res.innerHTML = `<h2>[ERRO] - Digite números válidos!</h2>`
  } else {
    const r = maiorValor(num1, num2)
    
    if (num1 === num2) {
      const i = ' ambos são iguals'
      return res.innerHTML = `<p>Analisando os números <strong>${num1}</strong> e <strong>${num2}</strong>, <strong>${i}</strong></p>`
    } else {
      return res.innerHTML = `<p>Analisando os números <strong>${num1}</strong> e <strong>${num2}</strong>, o maior valor é <strong>${r}</strong></p>`
    }
  }
}

function maiorValor(n1, n2) {
  return Math.max(n1, n2)
}

app.appendChild(title)
app.appendChild(button())
app.appendChild(res)