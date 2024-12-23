document.addEventListener('DOMContentLoaded', () => {

    const username = localStorage.getItem('username');
    

    const welcomeMessage = document.getElementById('welcome');
    if (username) {
        welcomeMessage.textContent = `Welcome, ${username}!`;
    } else {
        welcomeMessage.textContent = 'Welcome, Guest!';
    }
});