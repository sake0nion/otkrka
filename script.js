document.getElementById("yes").addEventListener("click", function() {
    let button = this;
    button.style.animation = "explode 0.5s forwards";
    
    setTimeout(() => {
        button.style.display = "none";
        document.getElementById("explosion-text").classList.remove("hidden");
    }, 500);
});

document.getElementById("no").addEventListener("click", function() {
    alert("Нет такого варианта ответа! 😉");
});

document.getElementById("play-music").addEventListener("click", function() {
    let audio = document.getElementById("background-music");
    audio.play().catch(error => console.log("Автовоспроизведение запрещено браузером."));
});

document.addEventListener("DOMContentLoaded", function() {
    setInterval(createHeart, 500);
});

function createHeart() {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 3000);
}

@keyframes explode {
    0% { transform: scale(1); opacity: 1; }
    100% { transform: scale(5); opacity: 0; }
}
