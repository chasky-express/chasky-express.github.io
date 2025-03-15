document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Basic validation
    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
    }

    // Here you would typically send this data to your server
    console.log('Registration attempt:', { nombre, email, telefono, password });
    
    // For demonstration purposes only
    alert('Registro exitoso! Por favor inicia sesión.');
    window.location.href = 'login.html';
});