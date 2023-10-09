let hora = new Date()
let horaAtual =  19//hora.getHours() //Hora atual do sistema
let min = hora.getMinutes() // Minutos atual do sistema

console.log(`Agora são: ${horaAtual}:${min}!`)

if (horaAtual < 12) {
  console.log('Bom dia!')
} else if (horaAtual < 19) {
  console.log('Boa tarde!')
} else {
  console.log('Boa noite!')
}