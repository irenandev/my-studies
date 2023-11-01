let main = document.querySelector('main')

let section = document.createElement('section')
section.innerHTML += `<h2>Números pares de <strong>1</strong> até <strong>10</strong></h2>`

let button = document.querySelector('button')
button.addEventListener('click', contar)

function contar() {
  for(let contador = 1; contador <= 10; contador++) {
    contador % 2 === 0 ? section.innerHTML += ` ${contador} 👉`
                       : section.innerHTML += ``
  }
  section.innerHTML += `🏁`
}
main.appendChild(section)