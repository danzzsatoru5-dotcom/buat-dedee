const btn = document.getElementById('main-btn');
const secretBox = document.getElementById('secret-box');
const headline = document.getElementById('headline');
const textP = document.getElementById('text-p');

btn.addEventListener('click', () => {
    // Tampilkan pesan
    secretBox.classList.toggle('hidden');
    textP.classList.toggle('hidden');
    
    if (!secretBox.classList.contains('hidden')) {
        headline.innerText = "I Love You! ❤️";
        btn.innerText = "Tutup";
        // Jalankan hujan hati
        startHearts();
    } else {
        headline.innerText = "Hai Sayang!";
        btn.innerText = "Buka Kejutan";
    }
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 4000);
}

function startHearts() {
    setInterval(createHeart, 300);
}
