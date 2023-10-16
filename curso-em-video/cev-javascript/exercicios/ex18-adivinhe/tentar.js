let min = 1
let max = 100
let numSort = Math.floor(Math.random() * (max - min + 1) + min)

let main = document.querySelector('main')
let section = document.createElement('section')
section.innerHTML = `<p>Já pensei em um valor entre <strong>1</strong> e <strong>100</strong>...</p>`

document.querySelector('button').addEventListener('click', tentar)

function tentar() {
  let palpite = parseInt(prompt('Qual é seu palpite?'))

  if (palpite === numSort) {
    section.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteador o valor <strong>${numSort}</strong></p>`

    section.appendChild(btnReload)
  } else if (palpite < numSort) {
    section.innerHTML += `<p>Você falou <strong>${palpite}</strong>. Meu número é <strong>MAIOR</strong></p>`
  } else {
    section.innerHTML += `<p>Você falou <strong>${palpite}</strong>. Meu número é <strong>MENOR</strong></p>`
  }
}
// Recomeçar desafio
let btnReload = document.createElement("button")
btnReload.innerText = 'Recomeçar'
btnReload.addEventListener('click', recarregar)

function recarregar() {
  window.location.reload()
}

main.appendChild(section)