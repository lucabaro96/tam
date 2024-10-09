// menu

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownContent = document.querySelector('.dropdown-content');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        hamburger.innerHTML = navLinks.classList.contains('nav-active') ? '&times;' : '&#9776;'; // Cambia tra hamburger e X
    });

    // Gestisci il clic su SETTORI per mostrare/nascondere il dropdown
    dropdownToggle.addEventListener('click', (e) => {
        e.preventDefault(); // Previene l'azione di default del link
        dropdownContent.classList.toggle('dropdown-active'); // Attiva/disattiva la visibilità del dropdown
        const icon = dropdownToggle.querySelector('.dropdown-icon');
        icon.innerHTML = dropdownContent.classList.contains('dropdown-active') ? '&#9650;' : '&#9660;'; // Cambia l'icona
    });
});