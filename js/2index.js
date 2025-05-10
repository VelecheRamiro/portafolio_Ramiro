function setLanguageToSpanish() {
    document.getElementById('titulo').textContent = 'Ramiro Veleche';
    document.getElementById('sobre').textContent = 'Sobre mi';
    document.getElementById('boting').textContent = 'Translate';
    document.getElementById('exp').textContent = 'Experiencia';
    document.getElementById('expp').textContent = 'Experiencia';
    document.getElementById('botingg').textContent = 'Translate';
}

function setLanguageToEnglish() {
    document.getElementById('titulo').textContent = 'Veleche Ramiro';
    document.getElementById('sobre').textContent = 'About me';
    document.getElementById('boting').textContent = 'Traducir';
    document.getElementById('exp').textContent = 'Experience';
    document.getElementById('expp').textContent = 'Experience';
    document.getElementById('botingg').textContent = 'Traducir';
}

function toggleLanguage() {
    const lang = localStorage.getItem('lang');
    if (lang === 'es') {
        localStorage.setItem('lang', 'en');
        setLanguageToEnglish();
    } else {
        localStorage.setItem('lang', 'es');
        setLanguageToSpanish();
    }
}


function applySavedLanguage() {
    const lang = localStorage.getItem('lang') || 'en';
    if (lang === 'es') {
        setLanguageToSpanish();
    } else {
        setLanguageToEnglish();
    }
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', applySavedLanguage);