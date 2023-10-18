let main = document.querySelector('main')

let section = document.createElement('section')
section.innerHTML = `Clique no botão acima para começar... `

document.querySelector('button').addEventListener('click', iniciar)

function iniciar() {
  let n1 = Number(prompt('Primeiro valor:'))
  let n2 = Number(prompt('Segundo valor:'))
  let calcular = ''

  let escolha = Number(prompt(
    ` Valores informados? ${n1} e ${n2}
      O que vamos fazer?
      [1] - Somar
      [2] - Subtrair
      [3] - Multiplicar
      [4] - Dividir
    `
  ))

  switch(escolha) {
    case 1:
      calcular = `${n1} <strong>+</strong> ${n2} = <strong>${n1 + n2}</strong>`
      break
    case 2:
      calcular = `${n1} <strong>-</strong> ${n2} = <strong>${n1 - n2}</strong>`
      break
    case 3:
      calcular = `${n1} <strong>x</strong> ${n2} = <strong>${n1 * n2}</strong>`
      break
    case 4:
      calcular = `${n1} <strong>/</strong> ${n2} = <strong>${n1 / n2}</strong>`
      break
    default:
      calcular = `<strong>OPÇÃO INVÁLIDA!</strong> Você digitou ${n1} e ${n2}, mas não sei o que fazer com eles.`
  }

  section.innerHTML = `<h2>Calculando...</h2>`
  section.innerHTML += `<p>${calcular}</p>`
}

main.appendChild(section)