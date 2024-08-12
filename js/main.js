// Handle Sign Up / Login
function signUp() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    alert('Sign Up Successful!\nUsername: ' + username);
    window.location.href = 'dashboard.html';
}

function toggleForm() {
    const container = document.querySelector('.auth-container');
    if (container.querySelector('h2').innerText === 'Sign Up') {
        container.querySelector('h2').innerText = 'Login';
        container.querySelector('button').innerText = 'Login';
        container.querySelector('a').innerText = 'Don\'t have an account? Sign up here';
    } else {
        container.querySelector('h2').innerText = 'Sign Up';
        container.querySelector('button').innerText = 'Sign Up';
        container.querySelector('a').innerText = 'Already have an account? Login here';
    }
}

// Handle Form Submission
function submitForm() {
    alert('Form submitted!');
    window.location.href = 'results.html';
}

// Handle Download Content
function downloadContent() {
    alert('Content downloaded!');
}

// Handle Logout
function logout() {
    alert('Logged out!');
    window.location.href = 'index.html';
}
