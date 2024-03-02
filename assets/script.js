function toggleMobileMenu() {
    document.getElementById('nav-menu').classList.toggle('hidden');
}

document.getElementById('mobile-menu').addEventListener('click', toggleMobileMenu)
document.getElementById('nav-menu').addEventListener('click', toggleMobileMenu)
