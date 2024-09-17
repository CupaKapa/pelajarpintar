// Daftar pengguna
const users = [
    { username: 'user1', password: 'pas1' },
    { username: 'user2', password: 'pas2' },
    { username: 'user3', password: 'pas3' },
    { username: 'user4', password: 'pas4' },
    { username: 'user5', password: 'pas5' },
    { username: 'user6', password: 'pas6' },
    { username: 'user7', password: 'pas7' },
    { username: 'user8', password: 'pas8' },
    { username: 'user9', password: 'pas9' },
    { username: 'user10', password: 'pas10' }
];

// Menangani submit form login
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Ambil nilai username dan password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verifikasi login dengan mencari kecocokan di daftar pengguna
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Simpan informasi login di sessionStorage
        sessionStorage.setItem('loggedIn', 'true');
        sessionStorage.setItem('username', user.username); // Bisa juga disimpan username

        // Arahkan ke halaman utama setelah login berhasil
        window.location.href = 'index.html';
    } else {
        alert('Username atau password salah!');
    }
});
