let button = document.querySelector("button")
button.addEventListener('click', calcular)

let res = document.querySelector(".res")

function calcular() {
  let nameA = prompt('Digite o nome do Aluno:')
  let n1 = Number(prompt(`Qual foi a 1º nota de ${nameA.toUpperCase()}?`))
  let n2 = Number(prompt(`Qual foi a 2º nota?`))
  let media = (n1 + n2) / 2

  res.innerHTML = `<h2>Calculando a média final de <strong>${nameA.toUpperCase()}</strong></h2>`
  res.innerHTML += `<p>As notas obtidas foram <strong>${n1}</strong> e <strong>${n2}</strong></p>
                    <p>A média final será <strong>${media}</strong></p>`

  media < 6 ? res.innerHTML += `<p>A mensagem que temos é: <strong class="red">Estude um pouco mais!</strong></p>`
            : res.innerHTML += `<p>A mensagem que temos é: <strong class="green">Meus parabéns!</strong></p>`
}