document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic validation (you would typically validate against a server)
    if (email && password) {
        // Simulate successful login
        localStorage.setItem('userEmail', email);
        window.location.href = 'dashboard.html';
    } else {
        alert('Por favor ingrese sus credenciales');
    }
});