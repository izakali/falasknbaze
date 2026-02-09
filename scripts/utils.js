function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function clearForm(form) {
    form.reset();
}

function showAlert(message) {
    alert(message);
}

function toggleVisibility(element) {
    element.style.display = (element.style.display === 'none' || element.style.display === '') ? 'block' : 'none';
}