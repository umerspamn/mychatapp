function login() {
  // Get input values
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Simple validation
  if (username.trim() === "") {
    alert("Please enter your username");
    return;
  }

  if (password.trim() === "") {
    alert("Please enter your password");
    return;
  }

  // For demonstration, you can replace the alerts with actual login logic
  alert("Username: " + username + "\nPassword: " + password);
}

/*===== LOGIN SHOW and HIDDEN =====*/
const signUp = document.getElementById('sign-up');
const signIn = document.getElementById('sign-in');
const loginIn = document.getElementById('login-in');
const loginUp = document.getElementById('login-up');

signUp.addEventListener('click', () => {
  // Remove classes first if they exist
  loginIn.classList.remove('block');
  loginUp.classList.remove('none');

  // Add classes
  loginIn.classList.toggle('none');
  loginUp.classList.toggle('block');
});

signIn.addEventListener('click', () => {
  // Remove classes first if they exist
  loginIn.classList.remove('none');
  loginUp.classList.remove('block');

  // Add classes
  loginIn.classList.toggle('block');
  loginUp.classList.toggle('none');
});

function login() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Implement your login logic here
  // You may want to make an AJAX request to the server to check credentials

  // For demonstration purposes, let's assume a simple check
  if (username === 'umer' && password === '1234') {
    alert('Login successful!');
    // Redirect to the payment page or main content page
    window.location.href = 'https://tradenodes.io/';
  } else {
    alert('Invalid username or password. Please try again.');
  }
}
