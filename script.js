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


// Scroll Slideshow Azienda

// Pulsanti per scrollare a sinistra e a destra
document.querySelector('.right-arrow').addEventListener('click', () => {
    document.querySelector('.scroll-container').scrollBy({left: 400, behavior: 'smooth'}); // Modifica la quantità in base alla larghezza delle cards
});

document.querySelector('.left-arrow').addEventListener('click', () => {
    document.querySelector('.scroll-container').scrollBy({left: -400, behavior: 'smooth'}); // Modifica la quantità in base alla larghezza delle cards
});

// Linee verticali lati slideshow
document.addEventListener("DOMContentLoaded", function() {
    const scrollContainer = document.querySelector('.scroll-container');
    const leftLine = document.querySelector('.left-line');
    const rightLine = document.querySelector('.right-line');

    const updateLineVisibility = () => {
        const scrollLeft = scrollContainer.scrollLeft;
        const scrollWidth = scrollContainer.scrollWidth;
        const containerWidth = scrollContainer.clientWidth;

        // Controlla se c'è spazio a sinistra
        if (scrollLeft > 0) {
            leftLine.style.opacity = '1'; // Mostra la linea a sinistra
        } else {
            leftLine.style.opacity = '0'; // Nascondi la linea a sinistra
        }

        // Controlla se c'è spazio a destra
        if (scrollLeft + containerWidth < scrollWidth) {
            rightLine.style.opacity = '1'; // Mostra la linea a destra
        } else {
            rightLine.style.opacity = '0'; // Nascondi la linea a destra
        }
    };

    // Aggiungi l'evento scroll
    scrollContainer.addEventListener('scroll', updateLineVisibility);
    
    // Inizializza la visibilità delle linee
    updateLineVisibility();

    // Event listeners per le frecce
    document.querySelector('.left-arrow').addEventListener('click', () => {
        scrollContainer.scrollBy({
            left: -containerWidth,
            behavior: 'smooth'
        });
    });

    document.querySelector('.right-arrow').addEventListener('click', () => {
        scrollContainer.scrollBy({
            left: containerWidth,
            behavior: 'smooth'
        });
    });
});
// ----------

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
            const bgColor = getComputedStyle(section).backgroundColor;
            if (section.classList.contains('orange-bg')) { // Sezione con sfondo arancione
                scrollTopButton.classList.add('on-orange-bg');
                scrollTopButton.classList.remove('on-light-bg', 'on-dark-bg');
            } else if (bgColor === 'rgb(238, 237, 237)') { // Sfondo chiaro (equivalente a var(--colore-chiaro))
                scrollTopButton.classList.add('on-light-bg');
                scrollTopButton.classList.remove('on-dark-bg', 'on-orange-bg');
            } else if (bgColor === 'rgb(0, 0, 0)') { // Sfondo nero
                scrollTopButton.classList.add('on-dark-bg');
                scrollTopButton.classList.remove('on-light-bg', 'on-orange-bg');
            }
        }
    });
});


// Indica di scrollare verso il basso, fissato in viewport fino a tot. px

function updateScrollIndicatorPosition() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const hero = document.querySelector('.hero');

    // Ottieni la posizione del fondo dell'header
    const heroBottom = hero.getBoundingClientRect().bottom;

    // Controlla se la parte inferiore dell'header è raggiunta
    if (heroBottom <= window.innerHeight) {
        scrollIndicator.style.position = 'absolute'; // Cambia a absolute
        scrollIndicator.style.bottom = '20px'; // Fissato a 30px dal fondo dell'header
    } else {
        scrollIndicator.style.position = 'fixed'; // Mantiene la posizione fissa
        scrollIndicator.style.bottom = '20px'; // Fissato a 30px dal fondo della viewport
    }
}

// Aggiungi l'ascoltatore di eventi per lo scroll
window.addEventListener('scroll', updateScrollIndicatorPosition);

// Esegui la funzione all'avvio per impostare la posizione correttamente
window.addEventListener('load', updateScrollIndicatorPosition);


// Animazione apertura chiusura voci dei Servizi

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

// Check OVER 2 MB


// Funzione per aggiornare il nome del file e verificare la dimensione
    function updateFileName(input) {
        var file = input.files[0]; // Ottieni il file
        var fileName = document.getElementById('file-name'); // Elemento per mostrare il nome

        if (file) {
            // Controllo dimensione massima (2 MB = 2048 KB = 2 * 1024 * 1024 bytes)
            if (file.size > 2 * 1024 * 1024) {
                alert("Il file supera la dimensione massima consentita di 2MB."); // Mostra il pop-up
                fileName.textContent = "Carica file fino a 2MB (PDF, JPG, PNG)"; // Ripristina il testo
                input.value = ""; // Resetta il campo file
            } else {
                fileName.textContent = file.name; // Aggiorna con il nome del file
            }
        } else {
            fileName.textContent = "Nessun file scelto (PDF / JPG / PNG)";
        }
    }

    // Prevenire l'invio del form se non è stato caricato un file valido
    document.getElementById("form-preventivo").addEventListener("submit", function(event) {
        var fileInput = document.querySelector('input[type="file"]');
        var file = fileInput.files[0];

        if (file && file.size > 2 * 1024 * 1024) {
            event.preventDefault(); // Previeni l'invio del form
            alert("Il file supera la dimensione massima consentita di 2MB."); // Mostra il pop-up
        }
    });




