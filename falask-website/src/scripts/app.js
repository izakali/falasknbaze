// Ce fichier contient la logique principale de l'application, gérant les fonctionnalités spécifiques à l'application mobile de distribution d'eau.

document.addEventListener('DOMContentLoaded', () => {
    const requestWaterButton = document.getElementById('request-water');
    const waterRequestForm = document.getElementById('water-request-form');
    const successMessage = document.getElementById('success-message');

    if (requestWaterButton) {
        requestWaterButton.addEventListener('click', () => {
            waterRequestForm.classList.toggle('hidden');
        });
    }

    if (waterRequestForm) {
        waterRequestForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(waterRequestForm);
            const userName = formData.get('name');
            const userAddress = formData.get('address');

            // Simuler une demande d'eau
            console.log(`Demande d'eau de ${userName} à l'adresse ${userAddress}`);
            successMessage.textContent = `Merci ${userName}, votre demande d'eau a été reçue !`;
            successMessage.classList.remove('hidden');
            waterRequestForm.reset();
        });
    }
});