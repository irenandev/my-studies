let main = document.querySelector('main')

let section = document.createElement('section')
section.innerHTML += `<h2>Números pares de <strong>1</strong> até <strong>10</strong></h2>`

let button = document.querySelector('button')
button.addEventListener('click', contar)

function contar() {
  let contador = 1
  section.innerHTML = `<h2>Contando...</h2>`

  while(contador <= 10) {
    if(contador % 2 == 0) {
      section.innerHTML += ` ${contador} 👉`
    }
    contador++
  }
  section.innerHTML += `🏁`
}

main.appendChild(section)