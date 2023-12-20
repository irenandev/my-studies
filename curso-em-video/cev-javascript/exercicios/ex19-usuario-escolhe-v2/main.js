const app = document.querySelector('#app')
const section = document.createElement('section')

function createTag(type, text) {
  const tag = document.createElement(type)
  tag.innerHTML = text
  return tag
}

function createBtn() {
  const button = document.createElement('button')
  button.textContent = 'Clique para iniciar'
  button.addEventListener('click', comecar)
  return button
}

function comecar() {
  const valor1 = Number(prompt('Primeiro valor:'))
  const valor2 = Number(prompt('Segundo valor:'))
  const escolhaOp = parseInt(prompt(
    `
      Valores informados: ${valor1} e ${valor2}.
      O que vamos fazer?
      [1] - Somar
      [2] - Subtrair
      [3] - Multiplicar
      [4] - Dividir
  `
  ))

  if(isNaN(valor1) || isNaN(valor2)) {
    alert('Digite um número valido!')
  } else if (escolhaOp < 1 || escolhaOp > 4) {
    alert('[ERRO] - Opção inválida!')
  } else {
    const resultado = operacao(valor1, valor2, escolhaOp)

    document.querySelector('h2').textContent = 'Calculando...'
    section.appendChild(createTag('p', `${resultado}`))
  }

}

function operacao(v1, v2 , numOp) {
  switch(numOp) {
    case 1:
        resultado = `<strong>${v1}</strong> + <strong>${v2}</strong> = <strong>${v1 + v2}</strong>`
        return resultado
      break
    case 2:
        resultado = `<strong>${v1}</strong> - <strong>${v2}</strong> = <strong>${v1 - v2}</strong>`
        return resultado
      break
    case 3:
      resultado = `<strong>${v1}</strong> * <strong>${v2}</strong> = <strong>${v1 * v2}</strong>`
      return resultado
      break
    case 4: 
      resultado = `<strong>${v1}</strong> / <strong>${v2}</strong> = <strong>${v1 / v2}</strong>`
      return resultado
    break
  }
}

app.appendChild(createTag('h1', 'Múltiplas ações'));
app.appendChild(createBtn())
app.appendChild(createTag('h2', 'Clique no botão para começar'))
app.appendChild(section)