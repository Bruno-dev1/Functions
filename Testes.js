const prompt = require('prompt-sync')()
const alarme = () => console.log("Alarme")
const tempo = (Number(prompt("Digite o tempo em segundos: ")))*1000
setTimeout(alarme, tempo)