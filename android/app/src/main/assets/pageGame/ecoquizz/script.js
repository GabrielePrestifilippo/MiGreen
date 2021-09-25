const quizData = [
  {
    question:
      'The farming is a not profitable activity in terms of resources produced and consumed. How many kilos of cereals it takes to produce 1 kilo of beef?',
    a: 'Little more than 2kg',
    b: '3,5 kg',
    c: 'Between 5 and 7 kg',
    d: 'Between 14 and 20 kg',
    correct: 'd',
  },
  {
    question:
      'How many liters of water (excluding rain) are needed to grow 1 kg of avocado?',
    a: '349 L',
    b: '237 L',
    c: '48 L',
    d: '12 L',
    correct: 'b',
  },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerHTML = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach(answerEl => (answerEl.checked = false));
}

function getSelected() {
  var answer;

  answerEls.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
            <h2>You answered correctly at ${score}/${quizData.length} questions </h2>
            <button onclick="window.location.href='https://migros.ch'">Done</button>
            `;
    }
  }
});
