     
// promo banner
document
.getElementById("dismissButton")
.addEventListener("click", function () {
  dismissBanner();
});

function dismissBanner() {
const banner = document.getElementById("promoBanner");
banner.style.display = "none"; // Menyembunyikan elemen
localStorage.setItem("bannerDismissed", "true");
}
window.addEventListener("DOMContentLoaded", (event) => {
const bannerDismissed = localStorage.getItem("bannerDismissed");

if (bannerDismissed !== "true") {
  const banner = document.getElementById("promoBanner");
  banner.style.display = "flex"; // Tampilkan elemen jika belum di-dismiss
}
});
// promo banner end

//   hamburger menu
document.addEventListener('DOMContentLoaded', function () {
const hamburgerButton = document.getElementById('hamburger-button');
const mobileMenu = document.querySelector('[role="dialog"]');
const closeButton = document.querySelector('.close-button');

// Fungsi untuk membuka menu
const openMenu = () => {
  mobileMenu.classList.remove('hidden');
};

// Fungsi untuk menutup menu
const closeMenu = () => {
  mobileMenu.classList.add('hidden');
};

// Menambahkan event listener ke tombol hamburger
hamburgerButton.addEventListener('click', openMenu);

// Menambahkan event listener ke tombol close
closeButton.addEventListener('click', closeMenu);
});



