document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
    });

    const authToggle = document.getElementById('authToggle');
    const authTitle = document.getElementById('authTitle');
    const authSubmit = document.getElementById('authSubmit');
    const authToggleText = document.getElementById('authToggleText');
    const nameField = document.getElementById('nameField');
    let isLogin = true;

    authToggle.addEventListener('click', function () {
        isLogin = !isLogin;
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
    });

    const authForm = document.getElementById('authForm');
    const authPage = document.getElementById('authPage');
    const mainContent = document.getElementById('mainContent');
    const logoutBtn = document.getElementById('logoutBtn');

    authForm.addEventListener('submit', function (event) {
        event.preventDefault();
        authPage.style.display = 'none';
        mainContent.style.display = 'block';
    });

    logoutBtn.addEventListener('click', function () {
        mainContent.style.display = 'none';
        authPage.style.display = 'flex';
    });
});
