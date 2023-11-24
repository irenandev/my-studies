let cachorro = {
  nome: 'Thor',
  sexo: 'M',
  peso: 8,
  engordar(p = 0){
    console.log('Engordou')
    this.peso += p //referencia ao objeto
  }
}

console.log(`${cachorro.nome} pesa ${cachorro.peso}`)