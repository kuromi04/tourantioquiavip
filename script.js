document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Toggle dark mode
    darkModeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
    });

    const authToggle = document.getElementById('authToggle');
    const authTitle = document.getElementById('authTitle');
    const authSubmit = document.getElementById('authSubmit');
    const authToggleText = document.getElementById('authToggleText');
    const nameField = document.getElementById('nameField');
    const authForm = document.getElementById('authForm');
    const authPage = document.getElementById('authPage');
    const mainContent = document.getElementById('mainContent');
    const logoutBtn = document.getElementById('logoutBtn');

    let isLogin = true;

    // Toggle between login and registration
    authToggle.addEventListener('click', function () {
        isLogin = !isLogin;
        toggleAuthMode();
    });

    function toggleAuthMode() {
        if (isLogin) {
            authTitle.textContent = 'Iniciar Sesión';
            authSubmit.textContent = 'Iniciar Sesión';
            authToggleText.textContent = '¿No tienes una cuenta?';
            authToggle.textContent = 'Regístrate';
            nameField.style.display = 'none';
        } else {
            authTitle.textContent = 'Regístrate';
            authSubmit.textContent = 'Regístrate';
            authToggleText.textContent = '¿Ya tienes una cuenta?';
            authToggle.textContent = 'Iniciar Sesión';
            nameField.style.display = 'block';
        }
    }

    // Handle form submission
    authForm.addEventListener('submit', function (event) {
        event.preventDefault();
        authPage.style.display = 'none';
        mainContent.style.display = 'block';
    });

    // Handle logout
    logoutBtn.addEventListener('click', function () {
        mainContent.style.display = 'none';
        authPage.style.display = 'flex';
    });
});

