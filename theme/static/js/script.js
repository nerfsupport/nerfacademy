function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    const overlay = document.getElementById("overlay");
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
}