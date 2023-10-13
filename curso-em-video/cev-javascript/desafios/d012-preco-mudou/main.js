let button = document.querySelector('button')
button.addEventListener('click', verificar) 
let res = document.querySelector('.res')

function verificar() {
  let prod_name = prompt('Digite o nome do produto:')
  let prod_preco_old = Number(prompt(`Digite o valor anterior de ${prod_name.toUpperCase()}:`))
  let prod_preco_new = Number(prompt(`Digite o preço atual de ${prod_name.toLocaleUpperCase()}:`))
  let caro_barato = ''
  let subiu_caiu = ''
  let variacao =  ''

  res.innerHTML = `<h2>Analisando os valores de <strong>${prod_name}</strong></h2>`
  res.innerHTML += `<p>O <strong>${prod_name}</strong> custava <strong>${prod_preco_old.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</strong> e agora custa <strong>${prod_preco_new.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</strong></p>`

  if (prod_preco_new > prod_preco_old) {
    caro_barato = 'caro'
    subiu_caiu = prod_preco_new - prod_preco_old
    variacao = (subiu_caiu / prod_preco_old) * 100

    res.innerHTML += `<p>Hoje o <strong>${prod_name}</strong> está mais <strong>${caro_barato}</strong></p>
                      <p>O preço subiu <strong>${subiu_caiu.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</strong> em relação ao preço anterior.</p>
                      <p>Uma variação de <strong>${variacao.toFixed(1)}%</strong> pra cima.</p>`
  } else {
    caro_barato = 'barato'
    subiu_caiu = prod_preco_old - prod_preco_new
    variacao = (subiu_caiu / prod_preco_new) * 100

    res.innerHTML += `<p>Hoje o <strong>${prod_name}</strong> está mais <strong>${caro_barato}</strong></p>
                      <p>O preço caiu <strong>${subiu_caiu.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</strong> em relação ao preço anterior.</p>
                      <p>Uma variação de <strong>${variacao.toFixed(2)}%</strong> pra cima.</p>`
  }
}