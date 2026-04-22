// 1. Deklarasi elemen-elemen
const door = document.getElementById('door');
const doorSection = document.getElementById('doorSection');
const mainContent = document.getElementById('mainContent');
const card = document.querySelector('.content-card');
const heartsBg = document.getElementById('heartsBg');

// 2. Ambil elemen audio dengan ID "kota" (sesuai HTML kamu)
const lagu = document.getElementById('kota');

// 3. Fungsi saat pintu/surat diklik
door.addEventListener('click', () => {
    
    // MENJALANKAN LAGU
    if (lagu) {
        lagu.play().catch(error => {
            console.log("Musik gagal diputar: ", error);
        });
    }

    // Animasi pintu terbuka (menambahkan class CSS)
    door.classList.add('door-open');
    
    // Tunggu animasi pintu selesai (1.5 detik)
    setTimeout(() => {
        // Ubah background body
        document.body.style.backgroundColor = "#fff1f2";
        
        // Sembunyikan pintu dan tampilkan konten utama
        doorSection.classList.add('hidden');
        mainContent.classList.remove('hidden');
        
        // Animasi isi kado muncul perlahan
        setTimeout(() => {
            mainContent.classList.add('fade-in');
            card.classList.add('card-appear');
            
            // Mulai hujan hati setiap 0.3 detik
            setInterval(createHeart, 300);
        }, 100);
        
    }, 1500); 
});

// 4. Fungsi membuat partikel hati jatuh
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-particle');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '-5vh';
    heart.style.fontSize = Math.random() * 20 + 15 + 'px';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's'; 
    heart.style.opacity = Math.random() * 0.5 + 0.5;
    
    heartsBg.appendChild(heart);
    
    // Hapus hati setelah jatuh agar tidak membuat HP lemot
    setTimeout(() => {
        heart.remove();
    }, 5000);
}
