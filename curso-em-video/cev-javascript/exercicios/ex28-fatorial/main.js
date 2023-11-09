let main = document.querySelector('main')
let section = document.createElement('section')

function fat() {
  let n = Number(document.querySelector('#num').value)
  contador = n
  let fat_total = 1

  section.innerHTML = `<h2>Calculando <strong>${n}</strong></h2>`

  for(contador; contador > 1; contador--) {
    section.innerHTML += `<strong>${contador}</strong> x `
    fat_total *= contador
  }
  section.innerHTML += `1 = <strong>${fat_total.toLocaleString('pt-BR')}</strong>`
}

main.appendChild(section)