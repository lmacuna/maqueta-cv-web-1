const form=document.querySelector("#form")


form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const data = new FormData(e.currentTarget)
   let r=window.confirm("Enviar?")

      if(r){
           
        const envio= async()=>{
            var res=await fetch('https://web-vercel-gj6ps5iek-lmacuna.vercel.app//contact',{
                method:'POST',
                body:data
            })

            res=await res.json()

            return console.log(res)

        }
        envio()

      }else if(!r){
           alert("cancelado")
      }
})