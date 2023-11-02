let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("java");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("php");
        habilidades[5].classList.add("CSharp");
        habilidades[6].classList.add("Tiempo");
        habilidades[7].classList.add("comunicacion");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("adaptabilidad");
        habilidades[10].classList.add("trabajo");
        habilidades[11].classList.add("creatividad");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

// var modal = document.getElementById("myModal");
// var btn = document.getElementById("botonVerMas");
// var span = document.getElementsByClassName("close")[0];

// btn.onclick = function() {
//     modal.style.display = "block";
// }

// span.onclick = function() {
//     modal.style.display = "none";
// }

// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

var botones = document.querySelectorAll(".botonVerMas");
var modales = document.querySelectorAll(".modal");
var cerrarBotones = document.querySelectorAll(".close");

botones.forEach((btn, index) => {
    btn.onclick = function() {
        modales[index].style.display = "block";
    }
});

cerrarBotones.forEach((cerrarBtn, index) => {
    cerrarBtn.onclick = function() {
        modales[index].style.display = "none";
    }
});

window.onclick = function(event) {
    if (event.target.className === "modal") {
        event.target.style.display = "none";
    }
}

