const frm = document.querySelector("form")
const  resp = document.querySelector("pre")

const itens = []
frm.rbPizza.addEventListener("click",()=>{
    frm.inBebida.className = "oculta"
    frm.inPizza.className = "exibe"
})
frm.rbBebida.addEventListener("click",()=>{
    frm.inBebida.className = "exibe"
    frm.inPizza.className = "oculta"
})