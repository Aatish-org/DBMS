// auth.js - Authentication utility for MyStore

// Check if user is logged in
function checkAuth() {
  if (localStorage.getItem('isLoggedIn') !== 'true') {
    // If not on login page, redirect to login
    if (!window.location.href.includes('login.html')) {
      window.location.href = 'login.html';
    }
  }
}

// Logout function
function logout() {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('username');
  localStorage.removeItem('password');
  window.location.href = 'login.html';
}

// Add logout functionality to any logout buttons
function setupLogoutButtons() {
  const logoutButtons = document.querySelectorAll('.logout-btn');
  if (logoutButtons) {
    logoutButtons.forEach(button => {
      button.addEventListener('click', logout);
    });
  }
}

// Run auth check when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  checkAuth();
  setupLogoutButtons();
});
