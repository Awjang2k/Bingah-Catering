
//   hamburger menu
document.addEventListener('DOMContentLoaded', function () {
    const hamburgerButton = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenuButton = document.getElementById('close-menu-button');
    const galeryLink = document.getElementById('galery-link');

    // Fungsi untuk membuka atau menutup menu
    function toggleMenu() {
        mobileMenu.classList.toggle('hidden');
    }

    // Event listener untuk tombol hamburger
    hamburgerButton.addEventListener('click', toggleMenu);

    // Event listener untuk tombol close "X"
    closeMenuButton.addEventListener('click', toggleMenu);

    // Event listener untuk link galery
    galeryLink.addEventListener('click', function() {
        mobileMenu.classList.add('hidden');
    });
    
})