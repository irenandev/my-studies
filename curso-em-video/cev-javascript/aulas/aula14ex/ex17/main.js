let res = document.createElement('div')
res.setAttribute('class', 'res')
res.innerHTML = `Digite um número acima 👆`

document.querySelector('button').addEventListener("click", tabuada)

function tabuada() {
  let num = Number(document.querySelector('#numero').value)
  
  if (num =='') {
    alert('[ERRO] - Digite um número!')
  } else {
    res.innerHTML = ''
    for(let c = 0; c <= 10; c++) {
      res.innerHTML += `<p>${num} x ${c} = ${num * c}</p>`
      res.style.textAlign = "center"
      res.style.marginTop = '1rem'
    }
  }
}

document.querySelector('section').appendChild(res)