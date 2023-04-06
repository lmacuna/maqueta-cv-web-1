const video=()=>{
    document.querySelector("#root-2").innerHTML=`
    <iframe class="iframe" src="https://www.youtube.com/embed/ZHkR2h6z15g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `
}



video()


const imagen=()=>{
    document.querySelector("#root-1").innerHTML=`

    <img id="img" class="img-lucas" src="IMAGES/img-mi-perfil-linkedin-recortada.jpeg" alt="foto"></img>
    <span style="color:white">Lucas Martín Acuña<span>
    <span style="color:white">Desarrollador de Software<span>
    `
}

imagen()


const rotarImg=()=>{
     document.querySelector("#img").classList.add("rotar-img")
}

setTimeout(()=>{
   rotarImg()
},2000)