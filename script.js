document.addEventListener("DOMContentLoaded", () => {
    const facultyBtn = document.querySelector(".faculty");
    const adminBtn = document.querySelector(".admin");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const formTitle = document.querySelector(".form-card h2");

    // Set Faculty login
    function setFacultyLogin() {
        formTitle.textContent = "Faculty Login";
        usernameInput.placeholder = "Faculty Username";
        passwordInput.placeholder = "Faculty Password";

        facultyBtn.classList.add("active");
        adminBtn.classList.remove("active");
    }

    // Set Admin login
    function setAdminLogin() {
        formTitle.textContent = "Admin Login";
        usernameInput.placeholder = "Admin Username";
        passwordInput.placeholder = "Admin Password";

        adminBtn.classList.add("active");
        facultyBtn.classList.remove("active");
    }

    // Default: Faculty login
    setFacultyLogin();

    // Button click events
    facultyBtn.addEventListener("click", setFacultyLogin);
    adminBtn.addEventListener("click", setAdminLogin);

    // Form submission
    document.getElementById("loginForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const role = formTitle.textContent.includes("Faculty") ? "Faculty" : "Admin";
        alert(`${role} Login\nUsername: ${usernameInput.value}\nPassword: ${passwordInput.value}`);
    });
});
