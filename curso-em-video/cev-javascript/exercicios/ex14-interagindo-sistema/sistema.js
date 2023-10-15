let main = document.querySelector('main')
let section = document.createElement('section')

section.innerHTML = '<p>Aqui vai aparecer algo...</p>'

document.querySelector('button').addEventListener('click', iniciar)

function iniciar() {
  let data = new Date()
  section.innerHTML = `<p>O que eu recebi do sistema foi: <strong>${data}</strong></p>`
}

main.appendChild(section)