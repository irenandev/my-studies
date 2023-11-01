let section = document.createElement('section')
section.innerHTML = `<p>Aperte o botão cima para iniciar.</p>`

document.querySelector('button').addEventListener('click', contar)

function contar () {
  section.innerHTML += `<h2>Contando...</h2>`

  for(let contador = 1; contador <= 10; contador++) {
    if(contador % 2 === 0) {
      section.innerHTML += ` <strong>${contador} 👉 </strong>`
    } else {
      section.innerHTML += ` ${contador} 👉 `
    }
  }
  section.innerHTML += `🏁`
}

document.querySelector('main').appendChild(section)