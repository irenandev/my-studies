let body = document.querySelector('body')
body.addEventListener('load', horario())

function horario() {
  let data = document.querySelector('.data')
  let hora = document.querySelector('.hora')
  let msg = document.querySelector('.msg')

  let dSistema = new Date()
  let dSemana = dSistema.getDay()
  let diaAtual = dSistema.getDate()
  let mesAtual = dSistema.getMonth() + 1
  let anoAtual = dSistema.getFullYear()
  let horaAtual = dSistema.getHours()
  let minAtual = dSistema.getMinutes()
  
  switch(dSemana) {
    case 0:
      dSemana = `Domingo`
      break;
    case 1:
      dSemana = `Segunda-Feira`
      break
    case 2:
      dSemana = `Terça-feira`
      break
    case 3:
      dSemana = `Quarta-Feira`
      break
    case 4:
      dSemana = `Quinta-Feira`
      break
    case 5:
      dSemana = `Sexta-feira`
      break
      case 6:
      dSemana = `Sabado<`
      break
    }
    //Condição Simples
    if (diaAtual < 10) {
      diaAtual = "0" + diaAtual
    }

    if (mesAtual < 10) {
      mesAtual = "0" + mesAtual
    }
  
    data.innerHTML = `<p>${diaAtual}/${mesAtual}/${anoAtual}</p>`
    data.innerHTML += `<strong>${dSemana}</strong>`

    // Hora Atual com Ternário
    minAtual < 10 ? minAtual = "0" + minAtual : minAtual
    horaAtual < 10 ? horaAtual = "0" + horaAtual : horaAtual

    hora.innerHTML = `<h1>${horaAtual}:${minAtual}</h1>`

    //Mensagem Condicionais Aninhada
    if(horaAtual >= 0 && horaAtual < 12) {
      msg.innerHTML = `<h2>Bom dia!</h2>`
      body.style.background = 'url(https://images.unsplash.com/photo-1511545922313-ff50d69d1173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80)'
      body.style.backgroundSize = 'cover'
      body.style.backgroundPosition = 'center center'
    } else if (horaAtual < 19) {
      msg.innerHTML = `<h2>Boa Tarde!</h2>`
      body.style.background = 'url(https://images.unsplash.com/photo-1496614932623-0a3a9743552e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)'
      body.style.backgroundSize = 'cover'
      body.style.backgroundPosition = 'center center'
    } else {
      msg.innerHTML = `<h2>Boa Noite!</h2>`
      body.style.background = 'url(https://images.unsplash.com/photo-1497157813429-d722e7526625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)'
      body.style.backgroundSize = 'cover'
      body.style.backgroundPosition = 'center center'
    }
}