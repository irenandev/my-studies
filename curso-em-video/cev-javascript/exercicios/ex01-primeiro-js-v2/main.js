function start(msg) {
  msg = 'Olá, Mundo!'
  alert(msg)

  let app = document.querySelector('#app')
  let title = document.createElement('h1')
  title.innerText = "Primeiro JavaScript"
  app.appendChild(title)
}

start()