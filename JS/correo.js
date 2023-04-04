const form=document.querySelector("#form")


form.addEventListener('submit',(e)=>{
    e.preventDefault()
   let r=window.confirm("Enviar?")

   r?alert("Enviando..."):alert("Envio cancelado")
})