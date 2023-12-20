const app = document.querySelector('#app')
const title = document.createElement('h1')
const section = document.createElement('section')
const subtitle = document.createElement('h2')
const nGerado = Math.floor(Math.random() * 100) + 1

title.textContent = 'Tente adivinhar meu número'
subtitle.textContent = 'Já pensei em um valor entre 1 e 100...'

function createBtn(textBtn, functionBtn) {
  const button = document.createElement('button')
  button.textContent = `${textBtn}`
  button.addEventListener('click', functionBtn)
  return button
}


function recarregar() {
  return window.location.reload()
}

function jogar() {
  const nJogador = parseInt(prompt('Qual é o seu palpite?'))

  if (isNaN(nJogador) || nJogador > 100) {
    alert('Digite um número valido!')
  } else {

    let msg = `Você falou <strong>${nJogador}</strong>! `
    msg += nJogador > nGerado ? `Mas meu número é <strong>MENOR!</strong>` : `Mas meu número é <strong>MAIOR!</strong>`
    section.innerHTML += `<p>${msg}</p>`

    if (nJogador === nGerado) {
      section.innerHTML += `<p><strong>Parabéns!</strong> Você acertou! Eu tinha sorteado o valor <strong>${nGerado}</strong></p>`
      section.appendChild(createBtn('Jogador novamente', recarregar))
    }
  }
  app.appendChild(section)
}

app.appendChild(title)
app.appendChild(createBtn('Tentar adivinhar', jogar))
app.appendChild(subtitle)