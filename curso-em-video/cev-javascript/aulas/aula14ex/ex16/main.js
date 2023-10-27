let res = document.querySelector('.res')
document.querySelector('button').addEventListener('click', contar)

function contar() {
  let inicio = document.querySelector('#cInicio')
  let fim = document.querySelector('#cFim')
  let passo = document.querySelector('#cPasso')
  let contador = 0

  // Validar campos
  if (inicio.value.length == '' || fim.value.length == '' || passo.value.length == '') {
    res.innerHTML = `<p>Impossível contar. Verifique os campos!</p>`
  } else {
    // Converter em Number
    let $inicio = parseInt(inicio.value)
    let $fim = parseInt(fim.value)
    let $passo = parseInt(passo.value)
    res.innerHTML = `Contando...`
    // Validar campo PASSO
    if ($passo <= 0 || $passo >= $fim) {
      alert('PASSO inválido. Considerando PASSO 1')
      $passo = 1
    } if ($inicio < $fim) {
      for(contador = $inicio; contador <= $fim; contador += $passo) {
        res.innerHTML += ` 👉 ${contador}`
      }
    } else {
      for(contador = $inicio; contador >= $fim; contador -= $passo) {
        res.innerHTML += ` 👉 ${contador}`
      }
    }
    res.innerHTML += `🏁`
  }
}