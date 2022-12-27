let overlay = document.getElementById("overlay")
let button_red = document.getElementById("Button_Help")
let close = document.getElementById("cerrar")
Button_Help.onclick = function abrirPopUp(){
    overlay.style.display = "block"
}



close.onclick = function cerrarPopUp() {
    overlay.style.display = "none";
  }