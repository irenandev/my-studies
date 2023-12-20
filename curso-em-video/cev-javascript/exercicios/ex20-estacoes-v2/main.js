const app = document.querySelector('#app')
const title = document.createElement('h1')
const section = document.createElement('section')

title.textContent = 'Descubra a estação do ano'
section.innerHTML = '<p>Clique no botão acima para informar o mês</p>'

function button() {
  const button = document.createElement("button")
  button.textContent = 'Informe o mês'
  button.addEventListener('click', getMonth)
  return button
}

function getMonth() {
  const month = prompt('Digite o mês em extenso (ex: Setembro)')

  !isNaN(month) ? alert('Dado inválido. Preencha corretamente.')
                : section.innerHTML = `<p>No mês de <strong>${month}</strong>, estamos na estação <strong>${getSeason(month)}</strong></p>`
  
}

function getSeason(month) {
  let season = ''
  let img = ''

  switch(month.toUpperCase()) {
    case 'JANEIRO':
    case 'FEVEREIRO':
    case 'MARÇO':
      img ="inverno"
      season = 'INVERNO'
      break;
    case 'ABRIL':
    case 'MAIO':
    case 'JUNHO':
      img = "primavera"
      season = 'PRIMAVERA'
      break;
    case 'JULHO':
    case 'AGOSTO':
    case 'SETEMBRO':
      img = "verao"
      season = 'verão'
      break
    case 'OUTUBRO':
    case 'NOVEMBRO':
    case 'DEZEMBRO':
      img = "outono"
      season = 'Outono'
      break
    default:
      season = '[ERRO] - Dado inválido!'
  }
  document.body.className = img;
  return season
}

app.appendChild(title)
app.appendChild(button())
app.appendChild(section)
