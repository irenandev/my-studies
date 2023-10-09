function verificar() {
  let data = new Date()
  let ano = data.getFullYear()// Pega ano completo
  let fAnoNasc = Number(document.querySelector('#txtAno').value)
  let res = document.querySelector('.res')
  let img = document.createElement('img') //cria tag img dinamicamente
  img.setAttribute('class', 'foto')

  if (fAnoNasc == 0 || fAnoNasc > ano) {
    alert('[ERRO] - Verifique os dados e tente novamente!')
  } else {
    let fSex = document.getElementsByName('radSex')
    let idade = ano - fAnoNasc
    let genero = ''
    // Verificar o sexo da pessoa
    if (fSex[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 10) {
        //CRIANÇA
        img.setAttribute('src', 'images/foto-bebe-m.png')
      } else if (idade < 21) {
        //JOVEM
        img.setAttribute('src', 'images/foto-jovem-m.png')
      } else if (idade < 50) {
        //ADULTO
        img.setAttribute('src', 'images/foto-adulto-m.png')
      } else {
        //IDOSO
        img.setAttribute('src', 'images/foto-idoso-m.png')
      }
    } else if (fSex[1].checked) {
      genero = 'Mulher'
      if (idade >= 0 && idade < 10) {
        //CRIANÇA
        img.setAttribute('src', 'images/foto-bebe-f.png')
      } else if (idade < 21) {
        //JOVEM
        img.setAttribute('src', 'images/foto-jovem-f.png')
      } else if (idade < 50) {
        //ADULTO
        img.setAttribute('src', 'images/foto-adulto-f.png')
      } else {
        //IDOSO
        img.setAttribute('src', 'images/foto-idoso-f.png')
      }
    }
    res.style.textAlign = "center"
    res.innerHTML = `<p>${genero} com ${idade} anos</p>`
    res.appendChild(img) //Add a imagem
  }
}