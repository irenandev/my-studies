let num = document.querySelector('#fNum')
let lista = document.querySelector('#fList')
let res = document.querySelector('.res')
let valores = [] // Vetor


function isNumero(n) {
  if(Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else {
    return false
  }
}

function inLista(n, list) {
  if(list.indexOf(Number(n)) != -1) {//-1 Não encontrado na lista
    return true
  } else {
    return false
  }
}

function add() {
  // Só vai add se for um NÚMERO e 
  // Só vai add se NÃO estiver na lista
  if(isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value))

    let item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado!`
    lista.appendChild(item)
    res.innerHTML = ''
  } else {
    alert('Valor inválido ou já encontrado na lista!')
  }
  //Limpar campo num depois de add número
  num.value = ''
  num.focus()
}

function finalizar() {
  if (valores.length == 0) {
    alert('Adicione valores antes de finalizar!')
  } else {
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0

    for(let pos in valores) {
      soma+= valores[pos]
      if (valores[pos] > maior) {
        maior = valores[pos]
      } if (valores[pos] < menor) {
        menor = valores[pos]
      }
    }
    media = soma / tot
    res.innerHTML = ``
    res.innerHTML += `<p>Ao todo temos <strong>${tot}</strong> números cadastrados!</p>`
    res.innerHTML += `<p>O maior valor informado foi <strong>${maior}</strong></p>`
    res.innerHTML += `<p>O menor valor informado foi <strong>${menor}</strong></p>`
    res.innerHTML += `<p>Somando todos os valores, temos <strong>${soma}</strong></p>`
    res.innerHTML += `<p>A média dos valores digitados é <strong>${media}</strong></p>`
  }
}