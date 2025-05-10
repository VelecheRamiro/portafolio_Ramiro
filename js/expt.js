let ingles = false;

window.onload=function() {
    const lang = localStorage.getItem('lang');
    if (lang === 'en') {traducirexp();
    ingles = true;}
};

function traducirexp() {
    const botonn = document.getElementById("botingg");
    const mis = document.getElementById("mis");
    const exp = document.getElementById("expp");
    const sobre = document.getElementById("sobre");


    if (!ingles) {
        ingles = true;
        localStorage.setItem('lang','en');
        botonn.textContent = "Version Español";
        sobre.textContent = "About Me";
        mis.textContent = "My Studies";
        exp.textContent = "Experience";}
    else {
        ingles = false;
        botonn.textContent = "Inles Version";
        sobre.textContent = "Sobre mi";
        mis.textContent = "Mis estudios";
        exp.textContent = "Experiencia";
        fecha.textContent = "Fecha de nacimiento: 14/02/2004";
        localStorage.setItem('lang','es')}
} 