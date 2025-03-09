document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        window.location.href = "login.html";
        return;
    }

    document.getElementById("username").innerText = user.username || "User";
    document.getElementById("email").innerText = user.email;
    document.getElementById("role").innerText = user.role.charAt(0).toUpperCase() + user.role.slice(1);
    document.getElementById("credits").innerText = user.credits;

    // Show admin panel if user is an admin
    if (user.role === 'admin') {
        document.getElementById("adminPanel").classList.remove("hidden");
    }
});

function logout() {
    localStorage.removeItem("user");
    window.location.href = "login.html";
}
