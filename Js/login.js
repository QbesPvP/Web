document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const showRegister = document.getElementById('showRegister');
    const showLogin = document.getElementById('showLogin');

    // Cambiar entre formularios
    showRegister.addEventListener('click', function(e) {
        e.preventDefault();
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
    });

    showLogin.addEventListener('click', function(e) {
        e.preventDefault();
        registerForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    });

    // Manejar envío de formularios
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Aquí iría la lógica de inicio de sesión
        console.log('Iniciando sesión...');
    });

    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Aquí iría la lógica de registro
        console.log('Registrando usuario...');
    });
}); 