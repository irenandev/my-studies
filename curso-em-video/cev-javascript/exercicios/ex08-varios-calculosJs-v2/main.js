const app = document.querySelector('#app')
const section = document.createElement('section')
const title = document.createElement('h1')
const text = document.createElement('p')
text.textContent = 'O resultado vai aparecer aqui...'
title.textContent = 'Vários cálculos em JS'

function button() {
  const button = document.createElement('button')
  button.textContent = 'Clique para calcular'
  button.addEventListener('click', calcular)
  return button
}


function calcular() {
  const num = Number(prompt('Digite um número:'))

  if(isNaN(num)) {
    alert('Digite apenas números')
  } else {
    text.innerHTML = `O número a ser analisado aqui será o <strong>${num}</strong>`
    section.innerHTML = `<hr>`
    section.innerHTML += `
        <p>O seu valor absoluto é <strong>${Math.abs(num)}</strong></p>
        <p>A sua parte inteira é <strong>${Math.trunc(num)}</strong></p>
        <p>O valor inteiro mais próximo é <strong>${Math.round(num)}</strong></p>
        <p>A sua raiz quadrada é <strong>${Math.sqrt(num)}</strong></p>
        <p>A sua raiz cúbica é <strong>${Math.cbrt(num)}</strong></p>
        <p>O valor de <strong>${num}</strong><sup>2</sup> é <strong>${Math.pow(num, 2)}</strong></p>
        <p>O valor de <strong>${num}</strong><sup>3</sup> é <strong>${Math.pow(num, 3)}</strong></p>
    `
  }
}

app.appendChild(title)
app.appendChild(button())
app.appendChild(text)
app.appendChild(section)