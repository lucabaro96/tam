// menu
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
window.onscroll = function() {
    var scrollTopButton = document.getElementById("scrollTopButton");
    var yOffset = window.pageYOffset || document.documentElement.scrollTop;

    // Mostra il pulsante quando si scrolla oltre i 300px
    if (yOffset > 300) {
        scrollTopButton.classList.add("visible"); // Aggiunge la classe "visible"
    } else {
        scrollTopButton.classList.remove("visible"); // Rimuove la classe "visible"
    }

    // Rileva quando il bottone è sopra una sezione arancione e cambia colore
    var orangeSections = document.querySelectorAll('.hero, footer'); // Aggiorna con le sezioni arancioni del tuo sito
    var isOverOrangeSection = Array.from(orangeSections).some(function(section) {
        var rect = section.getBoundingClientRect();
        return (
            rect.top < window.innerHeight &&
            rect.bottom > 0
        );
    });

    if (isOverOrangeSection) {
        scrollTopButton.classList.add("white");
    } else {
        scrollTopButton.classList.remove("white");
    }
};

// Aggiungi l'evento click per scrollare in cima
document.getElementById("scrollTopButton").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});