let ingles = false;

function traducir() {
    const titulo=document.getElementById("Titulo");
    const boton=document.getElementById("boting")

    if (!ingles) {
        titulo.textContent = "Veleche Ramiro"
        ingles= true;
        boton.textContent= "Version Español"
    }
    else {
        titulo.textContent = " Ramiro Veleche"
        ingles=false;
        boton.textContent= "Inles Version"
    }
} 