// Smart Form Handler for isaac-arch Portfolio 2

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  // Handle Login
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = loginForm.querySelector('input[type="email"]').value;
      const password = loginForm.querySelector('input[type="password"]').value;

      if (email === "" || password === "") {
        alert("⚠️ Please fill all fields.");
        return;
      }

      // Fake authentication for demo
      if (email === "isaacokotie@gmail.com" && password === "12345") {
        alert("✅ Welcome back, Isaac Okotie!");
        window.location.href = "dashboard.html"; // Redirect to next page
      } else {
        alert("❌ Invalid credentials, try again.");
      }
    });
  }

  // Handle Registration
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const inputs = registerForm.querySelectorAll("input");
      const [name, email, pass, confirmPass] = inputs;

      if (
        name.value === "" ||
        email.value === "" ||
        pass.value === "" ||
        confirmPass.value === ""
      ) {
        alert("⚠️ All fields are required!");
        return;
      }

      if (pass.value !== confirmPass.value) {
        alert("❌ Passwords do not match!");
        return;
      }

      alert("🎉 Registration Successful! Redirecting to login...");
      window.location.href = "index.html";
    });
  }
});