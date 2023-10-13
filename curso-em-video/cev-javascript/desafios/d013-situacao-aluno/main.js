let button = document.querySelector('button')
button.addEventListener('click', verificar)
let res = document.querySelector('.res')

function verificar() {
  let aluno_nome = prompt('Qual é o nome do Aluno?')
  let nota1 = Number(prompt(`Primeira nota de ${aluno_nome.toUpperCase()}?`))
  let nota2 = Number(prompt(`Segunda nota de ${aluno_nome.toUpperCase()}?`))
  let media = (nota1 + nota2) / 2

  res.innerHTML = `<h2>Analisando a situação de <strong>${aluno_nome}</strong></h2>`
  res.innerHTML += `<p>Com as notas <strong>${nota1}</strong> e <strong>${nota2}</strong>, a média é: <strong>${media}</strong></p>`
  
  if (media < 4) {
    res.innerHTML += `<p>Com a média abaixo de 3.0, o aluno está <strong class="red">REPROVADO</strong></p>`
  } else if (media < 7) {
    res.innerHTML += `<p>Com a média entre de 3.0 e 6.0, o aluno está em <strong class="orange">RECUPERAÇÃO</strong></p>`
  } else {
    res.innerHTML += `<p>Com a média acima de 6.0, o aluno está <strong class="green">APROVADO</strong></p>`
  }
}