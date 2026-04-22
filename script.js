// Показать интро экран
document.getElementById("intro").style.display = "block";

// При нажатии на кнопку "For My Love" начать игру
document.getElementById("startBtn").addEventListener("click", function() {
  // Скрыть экран интро
  document.getElementById("intro").style.display = "none";
  
  // Показать экран игры
  document.getElementById("game").style.display = "block";
});
