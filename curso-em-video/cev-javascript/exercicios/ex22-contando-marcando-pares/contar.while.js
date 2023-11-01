let section = document.createElement('section')
section.innerHTML = `<p>Aperte o botão cima para iniciar.</p>`

document.querySelector('button').addEventListener('click', contar)

function contar() {
  let contador = 1
  section.innerHTML += `<h2>Contando...</h2>`
  
  while(contador <= 10) {

    contador % 2 == 0 ? section.innerHTML += ` <strong>${contador}</strong> 👉`
                      : section.innerHTML += ` ${contador} 👉`
    contador++
  }
  section.innerHTML += `🏁`
}

document.querySelector('main').appendChild(section)