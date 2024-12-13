const prompt = require('prompt-sync')()

const vinhos = []

function titulo(texto){
    console.log()
    console.log(texto)
    console.log("=".repeat(40))
}
do{
    titulo("===<Cadastro de Vinhos>===")
    console.log("1 - Cadastrar Vinho")
    console.log("2 - Listar Vinhos")
    console.log("3 - Pesquisar por tipo")
    console.log("4 - Média e Destaque")
    console.log("5 - Finalizar")
    const opcao = Number(prompt("Digite a opção desejada: "))

    if (opcao == 1){
        incluir()
    }else if (opcao == 2){
        listar()
    }else if (opcao == 3){
        pesquisar()
    }else if (opcao == 4){
        calcularMedia()
    }else{
        break
    }
}while(true)

    function incluir(){
        titulo("===<Cadastro de Vinhos>===")
        const Marca = prompt("Marca...")
        const tipo = prompt("Tipo...")
        const preco = Number(prompt("Preço R$:"))

        vinhos.push({Marca,tipo,preco})
        console.log("Vinho cadastrado com sucesso!")
    }

    function listar(){
        titulo("===<Listagem de Vinhos>===")
        console.log("Marca.........Tipo.........Preço R$:")
        for(const vinho of vinhos){
            console.log(`${vinho.Marca.padEnd(20)} ${vinho.tipo.padEnd(20)} ${vinho.preco.toFixed(2)}`)
        }
    }
    function pesquisar(){
        titulo("===<Pesquisa de Vinhos>===")
        const tipo = prompt("Digite o tipo de vinho desejado:")
        let contador = 0
        console.log(`Marca.........Tipo.........Preço R$:`)
        for(const vinho of vinhos){
            if (vinho.tipo.toUpperCase().incluides(tipo.toUpperCase())){
                console.log(`${vinho.Marca.padEnd(20)} ${vinho.tipo.padEnd(20)} ${vinho.preco.toFixed(2)}`)
                contador++
            }
            if (contador == 0){
                console.log("Nenhum vinho encontrado")
            }
        }
    }

    function calcularMedia(){
        titulo("===<Média de Vinhos>===")
        const num =vinhos.length
        if (num == 0){
            console.log("Nenhum vinho cadastrado")
            return
        }
        let soma = 0
        for(const vinho of vinhos){
            soma += vinho.preco
        }
        const media = soma/num
        const vinhos2 =[...vinhos]
        vinhos2.sort((a,b) => a.preco - b.preco)
        const menor =vinhos2[0]
        const maior =vinhos2[num-1]
        console.log(`Menor Preço: R$ ${menor.preco.toFixed(2)}`)
        console.log(`Maior Preço: R$ ${maior.preco.toFixed(2)}`)
        console.log(`Média de Preços: ${media.toFixed(2)}`)
    }