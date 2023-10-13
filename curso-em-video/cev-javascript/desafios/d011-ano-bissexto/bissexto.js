let btn = document.querySelector("button")
btn.addEventListener("click", verificar)
let res = document.querySelector('.res')

function verificar() {
  let v_Ano = parseInt(prompt('Qual é o ano que você quer verificar?'))

  res.innerHTML = `<h2>Analisandoo ano de <strong>${v_Ano}</strong>...</h2>`

  if(v_Ano % 4 == 0 && v_Ano % 100 != 0 || v_Ano % 400 == 0) {
    res.innerHTML += `<p>O ano de ${v_Ano} <strong class="green">É BISSEXTO ✅</strong></p>`
  } else {
    res.innerHTML += `<p>O ano de ${v_Ano} <strong class="red">NÃO É BISSEXTO! ❌</strong></p>`
  }
}