let main = document.querySelector('main')

let section = document.createElement('section')
section.innerHTML += `<h2>Números pares de <strong>1</strong> até <strong>10</strong></h2>`

let button = document.querySelector('button')
button.addEventListener('click', contar)

function contar() {
  let contador = 2
  section.innerHTML = `<h2>Contando...</h2>`
  do {
    section.innerHTML += ` ${contador} 👉 `
    contador += 2
  } while (contador <= 10);
  section.innerHTML += `🏁`
}

main.appendChild(section)