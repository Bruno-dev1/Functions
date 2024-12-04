const frm=document.querySelector("form")
const resp1=document.querySelector("#outRes1")
const resp2=document.querySelector("#outRes2")
const resp3=document.querySelector("#outRes3")

frm.addEventListener("submit",function(e){
    e.preventDefault()
    const modelo=frm.inModelo.value
    const ano=Number(frm.inAno.value)
    const preco=Number(frm.inPreco.value)
    const classificacao = classificaVeiculo(ano)
    const entrada = calculaEntrada(preco, classificacao)
    const parcela = (preco-entrada)/10

    resp1.textContent=`Modelo: ${modelo}`
    resp2.textContent=`Entrada: R$ ${entrada.toFixed(2)}`
    resp3.textContent=`Parcela: R$ ${parcela.toFixed(2)} de x10`
})
const classificaVeiculo=(ano)=>{
    const anoatual = new Date().getFullYear()
    let classf 
    if(ano == anoatual){
        classf = "Novo"
    }
    else if (ano==anoatual-1){
        classf = "Seminovo"
    }
    else{
        classf = "Usado"
    }
    return classf
}
const calculaEntrada=(valor,status)=>{
    status =="Novo" ? entrada = valor*0.5 : entrada = valor*0.3
}