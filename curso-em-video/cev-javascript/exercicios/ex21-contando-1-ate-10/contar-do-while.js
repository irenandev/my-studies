let main = document.querySelector('main')
let button = document.querySelector('button')
button.addEventListener('click', contar)

let section = document.createElement('section')
section.innerHTML = `<p>Aperte o botão acima para contar.</p>`

function contar() {
  let contador = 1
  section.innerHTML += `<h2>Contando ...</h2>`
  
  do {
    section.innerHTML += `${contador} 👉 `
    contador++
  } while (contador <= 10);

  section.innerHTML += `🏁`
}

main.appendChild(section)