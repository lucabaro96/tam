// Mostra di più - Galleria

document.addEventListener('DOMContentLoaded', function() {
    // Gestione del pulsante "Mostra di più" per le coperture
    document.getElementById('showMoreCoperture').addEventListener('click', function() {
        toggleSection('moreCoperture', this);
    });

    // Gestione del pulsante "Mostra di più" per le chiusure
    document.getElementById('showMoreChiusure').addEventListener('click', function() {
        toggleSection('moreChiusure', this);
    });
});

// Funzione per alternare la visualizzazione delle sezioni
function toggleSection(sectionId, button) {
    const section = document.getElementById(sectionId);
    const isVisible = section.style.maxHeight && section.style.maxHeight !== "0px";

    // Espandi o riduci la sezione senza influenzare il pulsante
    if (!isVisible) {
        section.style.display = 'block'; // Assicura che la sezione sia visibile
        section.style.maxHeight = section.scrollHeight + "px"; // Espande la sezione
        button.textContent = 'Mostra di meno';
    } else {
        section.style.maxHeight = '0'; // Riduci la sezione
        setTimeout(() => {
            section.style.display = 'none'; // Nascondi completamente dopo la transizione
        }, 500); // Sincronizzato con la transizione
        button.textContent = 'Mostra di più';
    }
}

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
