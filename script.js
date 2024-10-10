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