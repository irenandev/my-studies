const app = document.querySelector('#app')
const title = document.createElement('h1')
title.textContent = 'Média do aluno v2.0'
const msg = document.createElement('section')

function button() {
  const button = document.createElement('button')
  button.textContent = 'Calcular média'
  button.addEventListener('click', iniciar)
  return button
}

function iniciar() {
  const aluno_name = prompt('Qual nomé do Aluno?')

  if (!isNaN(aluno_name)) {
    alert('Digite apenas LETRAS')
  } else {
      const nota1 = Number(prompt(`Qual é a primeira nota de ${aluno_name}?`))
      const nota2 = Number(prompt(`Alem de ${nota1}, qual foi a outra nota de ${aluno_name}:`))
    
      msg.innerHTML = `<h2>Calculando a média final de <strong>${aluno_name}</strong>.</h2>`
      msg.innerHTML += `<p>As notas obtidas foram <strong>${nota1}</strong> e <strong>${nota2}</strong></p>`
      msg.innerHTML += `<p>A média final será <strong>${media(nota1, nota2)}</strong></p>`
  }
}

function media(n1, n2) {
  if(isNaN(n1) || isNaN(n1)) {
    return alert('Digite apenas número!')
  } else {
    return (n1 + n2) / 2
  }
} 

app.appendChild(title)
app.appendChild(button())
app.appendChild(msg)