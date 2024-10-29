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