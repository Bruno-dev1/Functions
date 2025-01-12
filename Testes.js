const prompt = require('prompt-sync')()
const nome = prompt("digite um nome")
const alarme = () => console.log(nome)
const tempo = (Number(prompt("Digite o tempo em segundos: ")))*1000

setTimeout(alarme, tempo)