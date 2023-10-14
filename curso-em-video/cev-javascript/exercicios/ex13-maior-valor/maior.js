let main = document.querySelector('main')
let section = document.createElement('section')
section.setAttribute('class', 'res')
section.innerHTML = `<p>O resultado vai aparecer aqui...</p>`

document.querySelector('button').addEventListener('click', iniciar)

function iniciar() {
  let n1 = Number(prompt('Digite um número:'))
  let n2 = Number(prompt('Digite um número:'))
  let maior = ''

  if(n1 === n2) {
    maior = `ambos são <strong>IGUAIS</strong>`
  } else {
    maior = `o maior valor é <strong>${Math.max(n1, n2)}</strong>`
  }

  section.innerHTML = `<p>Analisando os valores <strong>${n1}</strong> e <strong>${n2}</strong>, ${maior}</p>`
}

main.appendChild(section)