// Показать экран с картинкой и кнопкой
document.getElementById("startScreen").style.display = "block";

// При нажатии на кнопку "For My Love" начать игру
document.getElementById("startBtn").addEventListener("click", function() {
  // Скрыть экран с картинкой и кнопкой
  document.getElementById("startScreen").style.display = "none";
  
  // Показать экран игры
  document.getElementById("game").style.display = "block";
});
