const app = document.querySelector('#app')
const title = document.createElement('h1')
title.textContent = 'Média do aluno v2'

const res = document.createElement('section')
res.innerHTML = `O resultado vai aparecer aqui...`

function button() {
  const button = document.createElement('button')
  button.textContent = 'Calcular Média'
  button.addEventListener('click', aluno)
  return button
}

function aluno() {
  const aluno_nome = prompt('Digite o nome do aluno?')
  const nota1 = parseInt(prompt(`Digite a primeira nota de ${aluno_nome}:`))
  const nota2 = parseInt(prompt(`Digite a segunda nota de ${aluno_nome}:`))
  const media = mediaFinal(nota1, nota2)


  if(media === undefined) {
    res.innerHTML = 'ERROR - Digite os dados corretos!'
  } else {
    res.innerHTML = `<h2>Calculando a média final de <mark>${aluno_nome.toUpperCase()}</mark></h2>`
    res.innerHTML += `<p>As notas obtidas foram <mark>${nota1}</mark> e <mark>${nota2}</mark></p>`
    res.innerHTML += `<p>A media final será: <mark>${media}</mark></p>`
    res.innerHTML += `<p>A mensagem que temos é: <mark>${msg(media)}</mark></p>`
  }
}

function mediaFinal(n1, n2) {
  if(isNaN(n1) || isNaN(n2)) {
    return alert('Digite apenas números!')
  } else {
    const media = (n1 + n2) / 2
    return media
  }
}

function msg(m) {
 return m >= 6 ? `<mark class =" green">Meus parabens!</marke>` : `<mark class="red">Estude um pouco mais!</mark>`
}


app.appendChild(title)
app.appendChild(button())
app.appendChild(res)