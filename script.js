// Показать интро экран
document.getElementById("intro").style.display = "block";

// При нажатии на кнопку "For My Love" начать игру
document.getElementById("startBtn").addEventListener("click", function() {
  // Скрыть экран интро
  document.getElementById("intro").style.display = "none";
  
  // Показать экран игры
  document.getElementById("game").style.display = "block";
});

// Когда пользователь кликает на изображение (PNG)
document.getElementById("clickableImage").addEventListener("click", function() {
  // Скрыть экран игры
  document.getElementById("game").style.display = "none";
  
  // Показать видео
  document.getElementById("videoContainer").style.display = "block";
  
  // Запуск видео
  const video = document.getElementById("loveVideo");
  video.play();

  // После завершения видео перенести на следующий этап
  video.onended = function() {
    alert("Ты прошла этот этап! Готовься к следующему!");
    // Здесь можно добавить переход на следующий этап
  };
});
console.log("JS загружен!");
