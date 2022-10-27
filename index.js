const boton = document.getElementById("icono");
const enlaces = document.getElementById("enlaces");
const contador = 0;

boton.addEventListener("click",function(){
    if(contador==0){
        enlaces.className = ("enlaces dos")
        contador=1;
    }else{
        enlaces.classList.remove(dos)
        enlaces.className = ("enlaces uno")
        contador=0;
    }
}
)