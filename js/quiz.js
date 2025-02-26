let correctAnswers = 0;
let currentQuestion = 1; 

function checkAnswer(isCorrect) {
  if (isCorrect) {
    correctAnswers++;
  }

  if (currentQuestion < 2) {
    currentQuestion++;
    window.location.href = `pergunta2${currentQuestion}.html`;
  } else {
    window.location.href = `QuizResultado.html${correctAnswers}`;
  }
}
