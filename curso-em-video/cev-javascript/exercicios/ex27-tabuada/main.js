let main = document.querySelector('main')
let section = document.createElement('section')

function tabuada() {
  let n = Number(document.querySelector("#num").value)
  let tabuada = 0

  section.innerHTML = `<h2>Tabuada de <strong>${n}</strong></h2>`

  for(tabuada; tabuada <=10; tabuada++) {
    section.innerHTML += `<p><strong>${n}</strong> x <strong>${tabuada}</strong> = <strong>${n * tabuada}</strong></p>`
  }
}

main.appendChild(section)