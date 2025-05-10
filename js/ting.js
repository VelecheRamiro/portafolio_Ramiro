// Traducciones para cada página
const translations = {
    index: {
        titulo: ['Ramiro Veleche', 'Veleche Ramiro'],
        sobre: ['Sobre mi', 'About me'],
        boting: ['Translate', 'Traducir'],
        mis: ['Mis estudios', 'My studies'],
        exp: ['Experiencia', 'Experience'],
        fecha: ['Fecha de nacimiento: 14/02/2004', 'BirthDay: 02/14/2004']
    },
    exp: {
        titulo: ['Mi Experiencia laboral', 'My Work Experience'],
        boting: ['Translate', 'Traducir'],
        exp: ['Experiencia', 'Experience'],
        mis: ['Mis estudios', 'My studies'],
        pub: ['Atencion al publico', 'Costumer service'],
        cinfo: ['Trabajo en supermercado 5mentarios principalmente encargado de las gestion del progama del sistema, manejo de compras, cuentas corrientes y atencion a los clientes. Tambien realizaba las tareas de cajero y reposicion cuando era necesario.', 'Worked in a supermarket call "5mentarios" mainly as the management of the progam of the market, purchasing manager, checking account, and costumer service. Also I realized the rol of cashier and repository when it was necessary'],
        einfo: ['Trabajo en una casa de ventas de materiales electricos, encargado de gestion de la contabilidad del negocio en compras y ventas, manejo de las redes sociales y atencion al publico. Tambien realizo las tareas de reposicion, publicidades, y papeleo','Work in a electrical store "Electromas" as the accounting in the purchasese and sales of the store, management of the social media, costumer service. Also I perform the tasks of repository,advertising, and paperwork']

    },
    mii: {
        sobre: ['Sobre mi', 'About me'],
        mis: ['Mis estudios', 'My studies'],
        boting: ['Translate', 'Traducir'],
        exp: ['Experiencia', 'Experience'],
    },
    study: {
        sobre: ['Sobre mi', 'About me'],
        mis: ['Mis estudios', 'My studies'],
        boting: ['Translate', 'Traducir'],
        exp: ['Experiencia', 'Experience'],
    }
};

// Detecta en qué página estamos
function getPageKey() {
    const path = window.location.pathname;
    if (path.includes('index.html')) return 'index';
    if (path.includes('exp.html')) return 'exp';
    if (path.includes('mii.html')) return 'mii';
    if (path.includes('study.html')) return 'study';
    return null;
}

// Aplica las traducciones para la página actual
function setLanguage(langIndex) {
    const pageKey = getPageKey();
    if (!pageKey) return;

    const pageTranslations = translations[pageKey];
    for (const [id, texts] of Object.entries(pageTranslations)) {
        const element = document.getElementById(id);
        if (element) element.textContent = texts[langIndex];
    }
}

// Alterna entre inglés y español
function toggleLanguage() {
    const currentLang = localStorage.getItem('lang') || 'en';
    const newLangIndex = currentLang === 'en' ? 0 : 1;
    localStorage.setItem('lang', newLangIndex === 0 ? 'es' : 'en');
    setLanguage(newLangIndex);
}

// Aplica el idioma guardado al cargar la página
function applySavedLanguage() {
    const currentLang = localStorage.getItem('lang') || 'en';
    const langIndex = currentLang === 'en' ? 1 : 0;
    setLanguage(langIndex);
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', applySavedLanguage);
