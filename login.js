document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Sample credentials (in a real application, use a secure backend)
    const validEmail = "user@example.com";
    const validPassword = "password123";

    // Get the input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check credentials
    if (email === validEmail && password === validPassword) {
        // Store user info in local storage
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('userEmail', email);
        
        // Redirect to dashboard
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid email or password.');
    }
});
