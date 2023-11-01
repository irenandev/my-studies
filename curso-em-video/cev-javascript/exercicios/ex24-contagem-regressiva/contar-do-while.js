let main = document.querySelector('main')

let section = document.createElement('section')
section.innerHTML += `<p>Aperte o botão para contar</p>`

let button = document.querySelector('button')
button.addEventListener('click', contar)

function contar() {
  let contador = 10
  section.innerHTML = `<h2>Contando...</h2>`

  do {
    section.innerHTML += ` ${contador} 👉`
    contador--
  } while (contador >= 1);
  section.innerHTML += `🏁`
}

main.appendChild(section)