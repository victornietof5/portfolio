let menuVisible = false;
//Funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if (menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

//ocultar menu despues de haber seleccionado
function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//funcion para aplicar animaciones a las skills
function efectoHabilidades(){
    let skills = document.getElementById("skills");
    let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("typescript");
        habilidades[3].classList.add("react");
        habilidades[4].classList.add("comunicacion");
        habilidades[5].classList.add("trabajoequipo");
        habilidades[6].classList.add("creatividad");
        habilidades[7].classList.add("dedicacion");
    }
}
//detecta el scrolling para aplicar aniamciones a las barras de skills
window.onscroll = function(){
    efectoHabilidades();
}

//funcion para confirmar la descarga del cv
function ConfirmDownload(){
    let result = confirm("confirm download?");
    if(result ==true){
        return true;
    } else {
        return false;
    }
}