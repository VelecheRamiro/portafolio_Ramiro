let ingles = false;

function traducir() {
    const titulo=document.getElementById("Titulo");
    const boton=document.getElementById("boting");
    const mis=document.getElementById("mis");
    const exp=document.getElementById("exp");
    const sobre=document.getElementById("sobre")
    const fecha=document.getElementById("fecha")


    if (!ingles) {
        titulo.textContent = "Veleche Ramiro"
        ingles= true;
        boton.textContent= "Version Español"
        sobre.textContent= "About Me"
        mis.textContent= "My Studies"
        exp.textContent= "Experience"
        fecha.textContent= "BirthDay: 14th February 2004"
    }
    else {
        titulo.textContent = " Ramiro Veleche"
        ingles=false;
        boton.textContent= "Inles Version"
        sobre.textContent= "Sobre mi"
        mis.textContent = "Mis estudios"
        exp.textContent = "Experiencia"
        fecha.textContent= "Fecha de nacimiento: 14/02/2004"
    }
} 