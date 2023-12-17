const app = document.querySelector('#app')
const title = document.createElement('h1')
const res = document.createElement('section')

title.textContent = 'Gerador de números'
res.innerHTML = `<h2>Cada vez que você apertar o botão acima, eu penso em um número entre 1 e 100.</h2>`

function button(text, functionClick) {
  const button = document.createElement('button')
  button.innerHTML = `${text}`
  button.addEventListener('click', functionClick)

  return button
}

function gerar() {
  const nGerado = Math.floor(Math.random() * 100) + 1
  res.innerHTML += `<p>Acabei de pensar no número <strong>${nGerado}</strong></p>`
}
function limpar() {
  res.innerHTML = '<h2>Clique para gerar novos números.</h2>'
}

app.appendChild(title);
app.appendChild(button('Gerar', gerar));
app.appendChild(button('Limpar', limpar));
app.appendChild(res);