// Cek apakah prompt sudah pernah muncul
if (!localStorage.getItem('promptShown')) {
    // Jika belum, tampilkan prompt dan simpan statusnya di localStorage
    let nama = prompt('Sebutkan nama anda');
    if (nama) {
        alert(`Selamat datang ${nama}, selamat menonton sepuasnya :)`);
    }
    localStorage.setItem('promptShown', 'true'); // Set flag bahwa prompt sudah ditampilkan
}