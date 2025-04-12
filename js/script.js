function handleLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "rihan" || username === "siddhesh"  || username ==="soham" && password === "1234" || password === "rihan"){
        alert("Login Successful");
        window.location.href = "home.html";  // Redirect to brands.html
    } else {
        alert("Invalid Username or Password");
    }
}


// for eye icon of passward

function togglePassword() {
    const passwordInput = document.getElementById("password");
    const toggleIcon = document.querySelector(".toggle-password i");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleIcon.classList.remove("fa-eye");
        toggleIcon.classList.add("fa-eye-slash"); // Change to "Hide" icon
    } else {
        passwordInput.type = "password";
        toggleIcon.classList.remove("fa-eye-slash");
        toggleIcon.classList.add("fa-eye"); // Change back to "Show" icon
    }
}
