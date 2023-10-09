function carregar() {
  let agora = new Date()
  let horaAtual = agora.getHours()
  let minAtual = agora.getMinutes()
  let msg = document.querySelector('.msg')
  let img = document.querySelector('.imagem')

  msg.innerHTML = `<h2>${horaAtual}:${minAtual}</h2>`
  if(horaAtual > 0 && horaAtual < 12) {
    img.src = "images/manha.png"
  } else if (horaAtual < 19) {
    img.src = "images/tarde.png"
  } else {
    img.src = "images/noite.png"
  }
}