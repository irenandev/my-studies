let main = document.querySelector('main')

let section = document.createElement('section')
section.innerHTML += `<p>Aperte o botão para contar</p>`

let button = document.querySelector('button')
button.addEventListener('click', contar)

function contar() {
  section.innerHTML = `<h2>Contando...</h2>`
  for(let contador = 10; contador >= 1; contador--) {
    section.innerHTML += ` ${contador} 👉`
  }
  section.innerHTML += `🏁`
}


main.appendChild(section)