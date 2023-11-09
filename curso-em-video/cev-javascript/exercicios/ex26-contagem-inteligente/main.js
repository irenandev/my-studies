let main = document.querySelector('main')
let section = document.createElement('section')
let btn = document.getElementsByName('button')

function contar() {
  let inicio = Number(document.querySelector('#v_inicio').value)
  let final = Number(document.querySelector('#v_final').value)
  let contador = 0

  section.innerHTML = `<h2>Contando de ${inicio} até <strong>${final}</strong></h2>`

  if(inicio === final) {
    section.innerHTML += `Não é possivel contar, pois os números são iguais 🏁`
  } else {
    if (inicio < final) {
      for(contador = inicio; contador <= final; contador++) {
        section.innerHTML += ` <strong>${contador}</strong> 👉`
      }
    } else {
      for(contador = inicio; contador >= final; contador--) {
        section.innerHTML += ` <strong>${contador}</strong> 👉`
      }
    }
    section.innerHTML += `🏁`
  }
}

main.appendChild(section)