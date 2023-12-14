const app = document.querySelector('#app')
const title = document.createElement('h1')
const res = document.createElement('section')

title.textContent = 'Analisando data e hora do sistema'
res.innerHTML = `Aqui vai aparecer o resultado..`


function button() {
  const button = document.createElement('button')
  button.textContent = 'Clique aqui'
  button.addEventListener('click', analise)
  return button
}

function analise() {
  const date_system = new Date()
  const day = date_system.getDate()
  const month = date_system.getMonth()
  const year = date_system.getFullYear()
  const dayW = date_system.getDay()
  let hour = date_system.getHours()
  let min = date_system.getMinutes()

  res.innerHTML = `<p>Dia: <strong>${day}</strong></p>`
  res.innerHTML += `<p>Mês: <strong>${months(month)}</strong></p>`
  res.innerHTML += `<p>Mês: <strong>${year}</strong></p>`
  res.innerHTML += `<p>Dia da semana: <strong>${dayWeek(dayW)}</strong></p>`
  res.innerHTML += `<br>`

  res.innerHTML += `<p>Hora: <strong>${hora = hour < 10 ? '0'+`${hour}` : `${hour}`}</strong></p>`
  res.innerHTML += `<p>Minutos: <strong>${min = min < 10 ? '0'+`${min}` : `${min}`}</strong></p>`
}

function dayWeek(d) {
  const days = [
    'Domingo',
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
    'Sabado'
  ]
  return days[d]
}

function months(m) {
  const monthY = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ]
  return monthY[m]
}

app.appendChild(title)
app.appendChild(button())
app.appendChild(res)