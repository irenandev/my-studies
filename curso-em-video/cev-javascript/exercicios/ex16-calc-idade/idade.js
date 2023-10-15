let main = document.querySelector('main')

let section = document.createElement("section")
section.innerHTML = `<p>Aqui vai aparecer algo...</p>`

let button = document.querySelector('button')
button.addEventListener('click', idade)

function idade() {
  let data = new Date()
  let anoAtual = data.getFullYear()
  let anoNasc = parseInt(prompt('Em que ano você nasceu?'))
  let idade = anoAtual - anoNasc

  section.innerHTML = `<p>Quem nasceu em <strong>${anoNasc}</strong>, vai completar <strong>${idade}</strong> anos em <strong>${anoAtual}</strong>.</p>`
}

main.appendChild(section)