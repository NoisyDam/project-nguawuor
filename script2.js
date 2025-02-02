function createConfetti() {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    document.body.appendChild(confetti);

    let size = Math.random() * 10 + 5;
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

    confetti.style.left = `${Math.random() * window.innerWidth}px`;
    confetti.style.top = `-10px`;

    let animationDuration = Math.random() * 3 + 2;
    confetti.style.transition = `transform ${animationDuration}s linear, opacity ${animationDuration}s ease-out`;

    setTimeout(() => {
        confetti.style.transform = `translateY(${window.innerHeight + 10}px) rotate(${Math.random() * 360}deg)`;
        confetti.style.opacity = "0";
    }, 10);

    setTimeout(() => {
        confetti.remove();
    }, animationDuration * 1000);
}

setInterval(createConfetti, 100);
document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('background-music');
    audio.play().catch(error => {
        console.log('Autoplay diblokir, interaksi pengguna diperlukan.');
    });
});
