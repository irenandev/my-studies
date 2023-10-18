let main = document.querySelector('main')
let section = document.createElement("section")

section.innerHTML = `Clique no botão acima para informar o mês.`

document.querySelector('button').addEventListener("click", iniciar)

function iniciar() {
  let mes = prompt('Digite o mês em extenso. (ex: Setembro)')
  let estação = ''

  switch(mes.toUpperCase()) {
    case 'JANEIRO': case '1':
    case 'FEVEREIRO': case '2':
    case 'MARÇO': case '3':
      estação = 'INVERNO'
      document.body.style.background = 'url(https://images.unsplash.com/photo-1453306458620-5bbef13a5bca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)'
      document.body.style.backgroundSize = 'cover'
    break
    case 'ABRIL': case '4':
    case 'MAIO': case '5':
    case 'JUNHO': case '6':
      estação = 'PRIMAVERA'
      document.body.style.background = 'url(https://images.unsplash.com/photo-1526344966-89049886b28d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)'
      document.body.style.backgroundSize = 'cover'
    break
    case 'JULHO': case '7':
    case 'AGOSTO': case '8':
    case 'SETEMBRO': case '9':
      estação = 'verão'
      document.body.style.background = 'url(https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)'
      document.body.style.backgroundSize = 'cover'
    break
    case 'OUTUBRO': case '10':
    case 'NOVEMBRO': case '11':
    case 'DEZEMBRO': case '12':
      estação = 'Outono'
      document.body.style.background = 'url(https://images.unsplash.com/flagged/photo-1552863047-1dd55fb6f8fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)'
      document.body.style.backgroundSize = 'cover'
    break
    default:
      alert('[ERRO] = Dado inválido!')
      estação = `ERRO - Dado inválido!`
      break
  }

  section.innerHTML = `<p>No mês de <strong>${mes}</strong>, estamos na estação <strong>${estação.toUpperCase()}</strong></p>`
}

main.appendChild(section)