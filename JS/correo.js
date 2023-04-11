const form=document.querySelector("#form")


form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const data = new FormData(e.currentTarget)
   let r=window.confirm("Enviar?")

      if(r){
           
        const envio= async()=>{
            var res=await fetch('https://web-vercel-kappa.vercel.app//contact',{
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