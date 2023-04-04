const navBar=()=>{

    document.querySelector("#nav").innerHTML=`
    
    
   
    <ul>
    <li><a href="index.html"><i id="i-inicio" class="fa-solid fa-house"></i><span id="span-inicio" class="span-nav">Inicio</span></a></li>
    <li><a href="perfil.html"><i id="i-perfil" class="fa-solid fa-user"></i><span id="span-perfil" class="span-nav">Perfil</span></a></li>
    <li><a href="estudios.html"><i id="i-estudios" class="fa-solid fa-graduation-cap"></i><span id="span-estudios" class="span-nav">Estudios</span></a></li>
    <li><a href="experiencia.html"><i id="i-experiencia" class="fa-solid fa-briefcase"></i><span id="span-experiencia" class="span-nav">Experiencia</span></a></li>
    <li><a href="proyectos.html"><i id="i-proyectos" class="fa-solid fa-diagram-project"></i><span id="span-proyectos" class="span-nav">Proyectos</span></a></li>
    </ul>
    
    
    `
}



navBar()
var cambio=false;
const rotar=()=>{
    if(!cambio){
        document.querySelector("#label").classList.add("label-check-rotar")
        document.querySelector("#span-inicio").classList.add("span-nav-on")
        document.querySelector("#span-perfil").classList.add("span-nav-on")
        document.querySelector("#span-estudios").classList.add("span-nav-on")
        document.querySelector("#span-experiencia").classList.add("span-nav-on")
        document.querySelector("#span-proyectos").classList.add("span-nav-on")

        document.querySelector("#i-inicio").classList.add("icon")
        document.querySelector("#i-perfil").classList.add("icon")
        document.querySelector("#i-estudios").classList.add("icon")
        document.querySelector("#i-experiencia").classList.add("icon")
        document.querySelector("#i-proyectos").classList.add("icon")

        cambio=true;
    }else if(cambio){
        document.querySelector("#label").classList.remove("label-check-rotar")
        document.querySelector("#span-inicio").classList.remove("span-nav-on")
        document.querySelector("#span-perfil").classList.remove("span-nav-on")
        document.querySelector("#span-estudios").classList.remove("span-nav-on")
        document.querySelector("#span-experiencia").classList.remove("span-nav-on")
        document.querySelector("#span-proyectos").classList.remove("span-nav-on")

        document.querySelector("#i-inicio").classList.remove("icon")
        document.querySelector("#i-perfil").classList.remove("icon")
        document.querySelector("#i-estudios").classList.remove("icon")
        document.querySelector("#i-experiencia").classList.remove("icon")
        document.querySelector("#i-proyectos").classList.remove("icon")

        cambio=false;
    }
}