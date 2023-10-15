let main = document.querySelector('main')

let section = document.createElement('section')
section.innerHTML = `<p>Aqui vai aparecer algo...</p>`
main.appendChild(section)

document.querySelector('button').addEventListener('click', analisar)

function analisar() {
  let data_sistema = new Date()
  let dia_semana = data_sistema.getDay()
  let dia = data_sistema.getDate() // Dia
  let mes = data_sistema.getMonth() //Mes
  let ano = data_sistema.getFullYear() // Mês
  let hora = data_sistema.getHours() //Hora
  let min = data_sistema.getMinutes() //Minutos
  let seg = data_sistema.getSeconds() // Segundos
  let diaSemana = ''

  // Saber que dia é na semana
  switch(dia_semana) {
    case 0: 
      diaSemana = 'Domingo'
      break;
    case 1:
      diaSemana = 'Segunda-Feira'
      break;
    case 2:
      diaSemana = 'Terça-Feira'
      break;
    case 3:
      diaSemana = 'Quarta-Feira'
      break;
    case 4:
      diaSemana = 'Quinta-Feira'
      break;
    case 5:
      diaSemana = 'Sexta-Feira'
      break;
    case 6:
      diaSemana = 'Sábado'
      break;
    case 7:
      diaSemana = 'Domingo'
      break;
    default:
      diaSemana = '[ERRO] - Dia inválido!'
      break;
  }

  // Saber qual é o més
  switch(mes) {
    case 0:
      mes = 'Janeiro'
      break;
    case 1:
      mes = 'Fevereiro'
      break;
    case 2:
      mes = 'Março'
      break;
    case 3:
      mes = 'Abril'
      break;
    case 4:
      mes = 'Maio'
      break;
    case 5:
      mes = 'Junho'
      break;
    case 5:
      mes = 'Julho'
      break;
    case 6:
      mes = 'Agosto'
      break;
    case 7:
      mes = 'Setembro'
      break;
    case 8:
      mes = 'Outubro'
      break;
    case 9:
      mes = 'Novembro'
      break;
    case 10:
      mes = 'Dezembro'
      break;
    default:
      mes = '[ERRO] - Data inválida!'
  }

  section.innerHTML = `<h2>Dia da semana: <strong>${diaSemana}</strong></h2>`
  section.innerHTML += `
    <p>Dia: <strong>${dia}</strong></p>
    <p>Mês: <strong>${mes}</strong></p>
    <p>Ano: <strong>${ano}</strong></p>
    <br>
    <p>Hora: <strong>${hora = hora < 10 ? '0'+`${hora}` : `${hora}`}</strong></p>
    <p>Minutos: <strong>${min = min < 10 ? '0'+`${min}` : `${min}`}</strong></p>
    <p>Segundos: <strong>${seg = seg < 10 ? '0'+`${seg}` : `${seg}`}</strong></p
  `
}