document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value;
    let role = document.getElementById("role").value;
    let loginMessage = document.getElementById("loginMessage");
    
    // Simple validation
    if (username === "" || password === "") {
        loginMessage.innerText = "Please fill in all fields.";
        loginMessage.style.color = "red";
        return;
    }
    
    if (password.length < 6) {
        loginMessage.innerText = "Password must be at least 6 characters long.";
        loginMessage.style.color = "red";
        return;
    }
    
    // Simulated API call (Replace with real backend request)
    setTimeout(() => {
        let users = {
            "admin": "admin123",
            "user": "user123"
        };
        
        if (users[username] && users[username] === password) {
            loginMessage.innerText = `${role.charAt(0).toUpperCase() + role.slice(1)} login successful!`;
            loginMessage.style.color = "green";
            
            // Store session data
            localStorage.setItem("loggedInUser", JSON.stringify({ username, role }));
            
            // Redirect based on role
            window.location.href = role === "admin" ? "admin_dashboard.html" : "user_dashboard.html";
        } else {
            loginMessage.innerText = "Invalid credentials!";
            loginMessage.style.color = "red";
        }
    }, 1000);
});
