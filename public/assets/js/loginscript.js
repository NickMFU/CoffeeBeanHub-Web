const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// JavaScript

// Function to handle login
function login() {
    // Simulate a login process (you should replace this with your actual login logic)
    const isLoggedIn = /* Check if the user is logged in */ true;
  
    // Get the profile picture element
    const profilePicture = document.getElementById('profilePicture');
    
    // Check the login state
    if (isLoggedIn) {
      // Replace the login button with the profile picture
      document.getElementById('loginButton').style.display = 'none';
      profilePicture.src ="assets/img/th-11134207-23010-6j3cqs6wejmvca-removebg-preview.png";
      profilePicture.style.display = 'inline-block';
    } else {
      // Handle the case when the user is not logged in
      alert('Login failed. Please try again.');
    }
  }
  