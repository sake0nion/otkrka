document.getElementById("yes-btn").addEventListener("click", function() {
    alert("Спасибо, балапанчик! 💖");
});

document.getElementById("no-btn").addEventListener("click", function() {
    alert("Нет такого варианта ответа!");
});

document.getElementById("play-music").addEventListener("click", function() {
    document.getElementById("bg-music").play();
});
