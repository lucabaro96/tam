// Cookies
document.getElementById('accept-cookies').addEventListener('click', function() {
    setCookie('userConsent', 'accepted', 365);
    document.getElementById('cookie-banner').style.display = 'none';
});

document.getElementById('reject-cookies').addEventListener('click', function() {
    setCookie('userConsent', 'rejected', 365);
    document.getElementById('cookie-banner').style.display = 'none';
});

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

window.onload = function() {
    var userConsent = getCookie('userConsent');
    if (!userConsent) {
        document.getElementById('cookie-banner').style.display = 'block';
    }
};

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

if (localStorage.getItem("cookieConsent") === "accepted") {
    // Includi script di tracking
    var script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=YOUR_ANALYTICS_ID";
    document.head.appendChild(script);
}

// Menu
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownContent = document.querySelector('.dropdown-content');

    hamburger.addEventListener('click', () => {
        if (navLinks.classList.contains('nav-active')) {
            // Se il menu è attivo, attiva l'animazione di chiusura
            navLinks.classList.add('nav-inactive'); // Aggiungi classe per animazione di chiusura

            // Rimuovi la classe menu-active dopo l'animazione
            setTimeout(() => {
                navLinks.classList.remove('nav-active', 'nav-inactive'); // Rimuovi entrambe le classi
            }, 500); // Imposta il timeout in base alla durata dell'animazione
        } else {
            // Se il menu non è attivo, attivalo
            navLinks.classList.add('nav-active');
        }
        hamburger.classList.toggle('menu-active'); 
    });

    // Gestisci il clic su SETTORI per mostrare/nascondere il dropdown
    dropdownToggle.addEventListener('click', (e) => {
        e.preventDefault(); // Previene l'azione di default del link
        dropdownContent.classList.toggle('dropdown-active');
        const icon = dropdownToggle.querySelector('.dropdown-icon');
        icon.innerHTML = dropdownContent.classList.contains('dropdown-active') ? '&#9650;' : '&#9660;';
    });
});

window.addEventListener('scroll', function() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const hero = document.querySelector('.hero');

    // Ottieni la posizione del fondo dell'header
    const heroBottom = hero.getBoundingClientRect().bottom;

    // Controlla se la parte inferiore dell'header è raggiunta
    if (heroBottom <= window.innerHeight) {
        scrollIndicator.style.position = 'absolute'; // Cambia a absolute
        scrollIndicator.style.bottom = '30px'; // Fissato a 30px dal fondo dell'header
    } else {
        scrollIndicator.style.position = 'fixed'; // Mantiene la posizione fissa
        scrollIndicator.style.bottom = '30px'; // Fissato a 30px dal fondo della viewport
    }
});

document.querySelectorAll('.servizio-item').forEach(item => {
    item.addEventListener('click', () => {
        const contenuto = item.nextElementSibling; // Ottieni il contenuto associato

        // Alterna la classe 'open' per attivare l'animazione
        contenuto.classList.toggle('open');

        // Chiudi altri contenuti aperti
        document.querySelectorAll('.servizio-contenuto').forEach(otherContent => {
            if (otherContent !== contenuto) {
                otherContent.classList.remove('open'); // Chiudi gli altri contenuti
            }
        });
    });
});


// Pulsante per tornare su
document.getElementById('scrollTopButton').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Scroll fluido
    });
});

// Funzione per mostrare/nascondere il pulsante e gestire i colori
window.addEventListener('scroll', function() {
    const scrollTopButton = document.getElementById('scrollTopButton');
    const scrollPosition = window.scrollY;
    
    // Rende il pulsante visibile dopo 200px di scroll
    if (scrollPosition > 200) {
        scrollTopButton.classList.add('visible');
    } else {
        scrollTopButton.classList.remove('visible');
    }

    // Cambia colore in base alla sezione attuale
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            if (section.classList.contains('orange-bg')) { // Sezione con sfondo arancione
                scrollTopButton.classList.add('on-orange-bg');
                scrollTopButton.classList.remove('on-light-bg', 'on-dark-bg');
            } else if (getComputedStyle(section).backgroundColor === 'rgb(249, 249, 249)') { // Sfondo chiaro
                scrollTopButton.classList.add('on-light-bg');
                scrollTopButton.classList.remove('on-dark-bg', 'on-orange-bg');
            } else if (getComputedStyle(section).backgroundColor === 'rgb(0, 0, 0)') { // Sfondo nero
                scrollTopButton.classList.add('on-dark-bg');
                scrollTopButton.classList.remove('on-light-bg', 'on-orange-bg');
            }
        }
    });
});