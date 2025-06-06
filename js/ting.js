// Traducciones para cada página
const translations = {
    index: {
        titulo: ['Ramiro Veleche', 'Veleche Ramiro'],
        sobre: ['Sobre mi', 'About me'],
        boting: ['Translate', 'Traducir'],
        mis: ['Mis estudios', 'My studies'],
        exp: ['Experiencia', 'Experience'],
        init: ['Inicio', 'Init'],
        contact:['Contactame','Contact me']

    },
    exp: {
        titulo: ['Mi Experiencia laboral', 'My Work Experience'],
        boting: ['Translate', 'Traducir'],
        sobre: ['Sobre mi', 'About me'],
        exp: ['Experiencia', 'Experience'],
        mis: ['Mis estudios', 'My studies'],
        pub: ['Atencion al publico', 'Costumer service'],
        pub2: ['Atencion al publico', 'Costumer service'],
        init: ['Inicio', 'Init'],
        cajero: ['Cajero','Casher'],
        cajero2: ['Cajero', 'Casher'],
        manejo: ['Manejo de sistemas', 'System management'],
        manejo2: ['Manejo de sistemas', 'System management'],
        compras: ['Gestion de compras','Purchasing manager'],
        compras2: ['Gestion de compras', 'Purchasing manager'],
        ctiempo: ['Desde 2022 a 2024', 'From 2022 to 2024'],
        etiempo: ['Desde 2024 hasta la actualidad', 'From 2024 to the present'],
        contabilidad: ['Contabilidad','Accounting'],
        ctc: ['Informacion de contacto','Contact information'],
        cte: ['Informacion de contacto', 'Contact information'],
        tfc: ['Telefono: 0236 441-0629','Phone number: 0236 441-0629 '],
        tfe: ['Telefono: 2352 41-7747', 'Phone number: 2352 41-7747'],
        cinfo: ['Trabajo en supermercado 5mentarios principalmente encargado de las gestion del progama del sistema, manejo de compras, cuentas corrientes y atencion a los clientes. Tambien realizaba las tareas de cajero y reposicion cuando era necesario.', 'Worked in a supermarket call "5mentarios" mainly as the management of the progam of the market, purchasing manager, checking account, and costumer service. Also I realized the rol of cashier and repository when it was necessary'],
        einfo: ['Trabajo en una casa de ventas de materiales electricos, encargado de gestion de la contabilidad del negocio en compras y ventas, manejo de las redes sociales y atencion al publico. Tambien realizo las tareas de reposicion, publicidades, y papeleo','Work in a electrical store "Electromas" as the accounting in the purchasese and sales of the store, management of the social media, costumer service. Also I perform the tasks of repository,advertising, and paperwork']

    },
    mii: {
        sobre: ['Sobre mi', 'About me'],
        mis: ['Mis estudios', 'My studies'],
        boting: ['Translate', 'Traducir'],
        init: ['Inicio', 'Init'],
        contact: ['Contactame', 'Contact me'],
        exp: ['Experiencia', 'Experience'],
        titulo: ['Informacion personal','Personal information'],
        yo: ['Soy Ramiro Veleche, un joven entusiasta con una gran pasión por la computación y la programación. Desde chico he estado familiarizado con el uso de computadoras, lo que despertó mi interés por el mundo tecnológico y me impulsó a estudiar la carrera de Analista de Sistemas. A lo largo de mi formación, he adquirido conocimientos de programación y herramientas informáticas, y me destaco por mi facilidad para aprender cosas nuevas.Me gusta trabajar en equipo, no tengo dificultades para colaborar con otros, y estoy siempre dispuesto a asumir nuevos desafíos laborales con compromiso y responsabilidad.', 'Im Ramiro Veleche, a young enthusiast with a deep passion for computing and programming.From a young age, I have been familiar with using computers, which sparked my interest in the tech world and motivated me to pursue a career as a Systems Analyst. Throughout my studies, I have gained programming knowledge and mastered various software tools.I stand out for my ability to quickly learn new things.I enjoy teamwork, have no trouble collaborating with others, and am always ready to take on new professional challenges with commitment and responsibility.'],
        fna: ['Fecha de nacimiento: 14/02/2004','BirthDay: 02/14/2004'],
        pna: ['Pais de nacimiento: Argentina', 'Country: Argentina'],
        in: ['Nivel de ingles: Medio', 'English level: Medium'],
        li: ['Licencia de conducir: Si (auto)', 'Driver license: Yes (cars)'],
        di: ['Disponibilidad horadia: Horario Completo', 'Hourly availability: Full schedule'],
        he: ['Herramientas: Excel, VS Code, Git, Trello, Mysql','Tools: Excel, VS Code, Git, Trello, Mysql'],
        res: ['Interes: Computacion, Aprendizaje de idiomas, Desarrollo de Juegos', 'Personal interests: Computing, Language Learning, Game Development' ]


    },
    study: {
        sobre: ['Sobre mi', 'About me'],
        mis: ['Mis estudios', 'My studies'],
        init: ['Inicio', 'Init'],
        boting: ['Translate', 'Traducir'],
        exp: ['Experiencia', 'Experience'],
        contact:['Contactame','Contact me'],
        titulo: ['Mis estudios','My studies'],
        se1: ['Titulo secundario','Secondary title'],
        se2: ['Bachiller en ciencias naturales','High School Graduate with specialization in Natural Sciences'],
        se3: ['E.E.S N°3, recibido en 2021','E.E.E.S N°3, receive in 2021'],
        se4: ['N° Vericacion: 95045', 'Verification No: 95045'],
        ing1: ['Certificado de ingles','English certificate'],
        ing2: ['First grado nivel C, recibido en 2021','First level grade C, receive in 2021'],
        ing3: ['N° Vericacion: B6972632', 'Verification No: B6972632'],
        an1: ['Estudio en Analista de sistema', 'Study in systems analysis'],
        an2: ['Actualmente estudiando desde 2023','Currently studying since 2023' ]
    },
    contact: {
        sobre: ['Sobre mi', 'About me'],
        mis: ['Mis estudios', 'My studies'],
        init: ['Inicio', 'Init'],
        boting: ['Translate', 'Traducir'],
        exp: ['Experiencia', 'Experience'],
        contact: ['Contactame', 'Contact me'],
        titulo: ['Mis estudios', 'My studies'],
        formTitle: ['Contáctame', 'Contact me'],
        namePlaceholder: ['Tu nombre', 'Your name'],
        emailPlaceholder: ['Tu correo electrónico', 'Your email'],
        msgPlaceholder: ['Escribe tu mensaje aquí...', 'Write your message here...'],
        sendBtn: ['Enviar mensaje', 'Send message'],
    }
};

// Detecta en qué página estamos
function getPageKey() {
    const path = window.location.pathname;
    if (path.includes('index.html')) return 'index';
    if (path.includes('exp.html')) return 'exp';
    if (path.includes('mii.html')) return 'mii';
    if (path.includes('study.html')) return 'study';
    if (path.includes('contact.html')) return 'contact';
    return null;
}

function setLanguage(langIndex) {
    const pageKey = getPageKey();
    if (!pageKey) return;

    const pageTranslations = translations[pageKey];
    for (const [id, texts] of Object.entries(pageTranslations)) {
        const element = document.getElementById(id);
        if (!element) continue;

        // Si es un input o textarea con placeholder
        if (element.placeholder !== undefined) {
            element.placeholder = texts[langIndex];
        } else {
            element.textContent = texts[langIndex];
        }
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

