document.addEventListener('DOMContentLoaded', function () {
    const loginsec = document.querySelector('.login-section')
    const loginlink = document.querySelector('.login-link')
    const registerlink = document.querySelector('.register-link')

    registerlink.addEventListener('click', () => {
        loginsec.classList.add('active');
        // Reset the login form
        document.getElementById('login_email').value = '';
        document.getElementById('login_password').value = '';

        // Hide the login form
        document.querySelector('.form-box.login').style.display = 'none';
        // Show the register form
        document.querySelector('.form-box.register').style.display = 'flex';
    });

    loginlink.addEventListener('click', () => {
        loginsec.classList.remove('active');
        // Reset the signup form
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        document.getElementById('username').value = '';

        // Show the login form
        document.querySelector('.form-box.login').style.display = 'flex';
        // Hide the register form
        document.querySelector('.form-box.register').style.display = 'none';
    });
});



/*    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get user input
        const username = signupForm.querySelector('input[name="username"]').value;
        const email = signupForm.querySelector('input[name="email"]').value;
        const password = signupForm.querySelector('input[name="password"]').value;

        // Firebase Authentication for sign-up
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // User signed up successfully
                const user = userCredential.user;
                console.log('User signed up:', user);

                // Redirect to index.html after successful signup
                window.location.href = 'index.html';
            })
            .catch((error) => {
                console.error('Signup error:', error);
            });
    });

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get user input
        const email = loginForm.querySelector('input[name="email"]').value;
        const password = loginForm.querySelector('input[name="password"]').value;

        // Firebase Authentication for sign-in
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // User signed in successfully
                const user = userCredential.user;
                console.log('User signed in:', user);

                // Redirect to index.html after successful sign-in
                window.location.href = 'index.html';
            })
            .catch((error) => {
                console.error('Signin error:', error);
            });
    });
});*/