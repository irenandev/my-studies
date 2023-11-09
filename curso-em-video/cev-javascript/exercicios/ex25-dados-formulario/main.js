let main = document.querySelector('main')
let section = document.createElement('section')

function contar() {
  let n = Number(document.querySelector('#num').value)
  let contador = 0

  section.innerHTML = `<h2>Contando de ${contador} até <strong>${n}</strong></h2>`

  for(contador; contador <= n; contador++) {
    section.innerHTML += ` ${contador} 👉`
  }
  section.innerHTML += `🏁`
}

main.appendChild(section)