let menuVisible = false;

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
   
    document.getElementById("nav").classList = "";
    menuVisible = false;
}


function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("React");
        habilidades[3].classList.add("Node");
        habilidades[4].classList.add("MongoDB");
        habilidades[5].classList.add("Express");
        habilidades[6].classList.add("comunicacion");
        habilidades[7].classList.add("TrabajoenEquipo");
        habilidades[8].classList.add("Ganasdeaprender");
        habilidades[9].classList.add("dedicacion");
        habilidades[10].classList.add("Ganasdeaprender");
        habilidades[11].classList.add("Adaptabilidadyflexibilidad");
    }
}

window.onscroll = function(){
    efectoHabilidades();
}

