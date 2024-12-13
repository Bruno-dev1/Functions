const frm = document.querySelector("form")
const resp1 = document.querySelector("#outRes1")
const resp2 = document.querySelector("#outRes2")
const resp3 = document.querySelector("#outRes3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inNome.value
    const idade =Number(frm.inIdade.value)
    resp1.innerText = nome+"\n"+retornarTracos(nome)

    const cat =categorizar(idade)
    resp3.innerText = "Categoria: " + cat 

})

function retornarTracos(nome){
    let tracos = ""
    for (const letra of nome){
        if (letra != " "){
            tracos += "_"
        }else{
            tracos += " "
        }
    }
    return tracos
}
function categorizar(idade){
    let categoria =""
    if (idade <= 12){
        categoria = "Infantil"
    }else if(idade >= 13 && idade<=18){
        categoria = "Juvenil"
    }else{
        categoria= "adulto"
    }
    return categoria
}