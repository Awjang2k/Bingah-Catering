// Menampilkan modal saat halaman dimuat
window.addEventListener('load', function() {
    const modal = document.getElementById('popup-modal');
    modal.classList.remove('hidden'); // Menampilkan modal dengan menghapus kelas 'hidden'
    modal.classList.add('flex'); // Tambahkan kelas flex untuk mendisplay modal dengan flexbox
});

// Menutup modal saat tombol dengan data-modal-hide ditekan
const closeModalButtons = document.querySelectorAll('[data-modal-hide]');
closeModalButtons.forEach(button => {
    button.addEventListener('click', function() {
        const modal = document.getElementById('popup-modal');
        modal.classList.add('hidden'); // Menyembunyikan modal dengan menambahkan kelas 'hidden'
        modal.classList.remove('flex'); // Hapus kelas flex
    });
});