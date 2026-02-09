// main.js - Script principal pour gérer les interactions de la page d'accueil

document.addEventListener('DOMContentLoaded', () => {
    // Exemple d'interaction : gestion des clics sur un bouton
    const button = document.getElementById('get-water-button');
    if (button) {
        button.addEventListener('click', () => {
            alert('Votre demande de distribution d\'eau a été envoyée !');
        });
    }

    // Exemple d'animation : faire défiler doucement vers le haut
    const scrollToTopButton = document.getElementById('scroll-to-top');
    if (scrollToTopButton) {
        scrollToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});