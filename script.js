// Fungsi untuk menampilkan alert ketika tombol 'Lihat Proyek' diklik
function showAlert() {
    alert('Terima kasih telah mengunjungi proyek saya!');
}

// Menangani pengiriman form
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah form dari pengiriman default

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Pesan berhasil dikirim! Terima kasih.');
        // Di sini, Anda bisa mengirim data form ke server
    } else {
        alert('Silakan isi semua kolom.');
    }
});
