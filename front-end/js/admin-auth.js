// ======================================
// ADMIN AUTHENTICATION FUNCTIONALITY
// ======================================

// Demo credentials
const DEMO_CREDENTIALS = {
    username: 'admin',
    password: 'sierra123'
};

// Initialize admin login page
function initAdminLogin() {
    const loginForm = document.getElementById('loginForm');
    const togglePassword = document.getElementById('togglePassword');
    
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    if (togglePassword) {
        togglePassword.addEventListener('click', handleTogglePassword);
    }
    
    // Check if user is already logged in
    if (isLoggedIn()) {
        window.location.href = 'admin-dashboard.html';
    }
}

// Handle login form submission
function handleLogin(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const username = formData.get('username');
    const password = formData.get('password');
    const rememberMe = formData.get('rememberMe');
    
    // Clear previous errors
    clearLoginError();
    
    // Validate inputs
    if (!username || !password) {
        showLoginError('Please enter both username and password.');
        return;
    }
    
    // Check credentials
    if (username === DEMO_CREDENTIALS.username && password === DEMO_CREDENTIALS.password) {
        // Successful login
        handleSuccessfulLogin(rememberMe);
    } else {
        // Failed login
        showLoginError('Invalid username or password. Please try again.');
        
        // Add shake animation to the form
        const loginCard = document.querySelector('.login-card');
        if (loginCard) {
            loginCard.classList.add('shake');
            setTimeout(() => {
                loginCard.classList.remove('shake');
            }, 500);
        }
    }
}

// Handle successful login
function handleSuccessfulLogin(rememberMe) {
    const loginData = {
        username: DEMO_CREDENTIALS.username,
        loginTime: new Date().toISOString(),
        rememberMe: !!rememberMe
    };
    
    // Store login data
    if (rememberMe) {
        localStorage.setItem('sierraAdminLogin', JSON.stringify(loginData));
    } else {
        sessionStorage.setItem('sierraAdminLogin', JSON.stringify(loginData));
    }
    
    // Show success message
    SierraGames.showToast('Login successful! Redirecting...', 'success');
    
    // Redirect to dashboard
    setTimeout(() => {
        window.location.href = 'admin-dashboard.html';
    }, 1000);
}

// Show login error
function showLoginError(message) {
    const errorElement = document.getElementById('loginError');
    const errorMessage = document.getElementById('errorMessage');
    
    if (errorElement && errorMessage) {
        errorMessage.textContent = message;
        errorElement.style.display = 'block';
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            clearLoginError();
        }, 5000);
    }
}

// Clear login error
function clearLoginError() {
    const errorElement = document.getElementById('loginError');
    if (errorElement) {
        errorElement.style.display = 'none';
    }
}

// Handle password toggle
function handleTogglePassword() {
    const passwordField = document.getElementById('password');
    const toggleIcon = document.querySelector('#togglePassword i');
    
    if (!passwordField || !toggleIcon) return;
    
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleIcon.className = 'fas fa-eye-slash';
    } else {
        passwordField.type = 'password';
        toggleIcon.className = 'fas fa-eye';
    }
}

// Check if user is logged in
function isLoggedIn() {
    const sessionData = sessionStorage.getItem('sierraAdminLogin');
    const localData = localStorage.getItem('sierraAdminLogin');
    
    if (sessionData) {
        try {
            const data = JSON.parse(sessionData);
            return data.username === DEMO_CREDENTIALS.username;
        } catch (e) {
            return false;
        }
    }
    
    if (localData) {
        try {
            const data = JSON.parse(localData);
            // Check if login is still valid (within 30 days)
            const loginTime = new Date(data.loginTime);
            const now = new Date();
            const daysDiff = (now - loginTime) / (1000 * 60 * 60 * 24);
            
            if (daysDiff <= 30 && data.username === DEMO_CREDENTIALS.username) {
                return true;
            } else {
                // Clear expired login
                localStorage.removeItem('sierraAdminLogin');
                return false;
            }
        } catch (e) {
            return false;
        }
    }
    
    return false;
}

// Get current user
function getCurrentUser() {
    if (!isLoggedIn()) return null;
    
    const sessionData = sessionStorage.getItem('sierraAdminLogin');
    const localData = localStorage.getItem('sierraAdminLogin');
    
    try {
        const data = JSON.parse(sessionData || localData);
        return data;
    } catch (e) {
        return null;
    }
}

// Logout user
function logout() {
    sessionStorage.removeItem('sierraAdminLogin');
    localStorage.removeItem('sierraAdminLogin');
    
    SierraGames.showToast('Logged out successfully', 'info');
    
    setTimeout(() => {
        window.location.href = 'admin-login.html';
    }, 1000);
}

// Require authentication (call this on admin pages)
function requireAuth() {
    if (!isLoggedIn()) {
        SierraGames.showToast('Please log in to access this page', 'warning');
        setTimeout(() => {
            window.location.href = 'admin-login.html';
        }, 1000);
        return false;
    }
    return true;
}

// Add shake animation CSS
function addShakeAnimation() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        
        .shake {
            animation: shake 0.5s ease-in-out;
        }
        
        .login-form .form-control:focus {
            border-color: #2c5aa0;
            box-shadow: 0 0 0 0.2rem rgba(44, 90, 160, 0.25);
        }
        
        .login-form .is-invalid {
            border-color: #dc3545;
        }
        
        .field-error {
            font-size: 0.875rem;
            margin-top: 0.25rem;
        }
        
        .password-input-wrapper {
            position: relative;
        }
        
        .password-toggle {
            position: absolute;
            right: 0.75rem;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            color: #6c757d;
            cursor: pointer;
            z-index: 10;
        }
        
        .password-toggle:hover {
            color: #2c5aa0;
        }
        
        .demo-credentials code {
            user-select: all;
            cursor: pointer;
        }
        
        .demo-credentials code:hover {
            background-color: #1a365d !important;
        }
    `;
    document.head.appendChild(style);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    addShakeAnimation();
    initAdminLogin();
});

// Export functions
window.AdminAuth = {
    initAdminLogin,
    isLoggedIn,
    getCurrentUser,
    logout,
    requireAuth,
    DEMO_CREDENTIALS
};