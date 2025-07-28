const questions = [
    {
        question: "What does 'DOM' stand for?",
        options: [
            "Document Object Model", 
            "Digital Output Module",
            "Data Object Management"
        ],
        answer: 0
    },
    {
        question: "Which method adds an element to an array?",
        options: [
            ".push()",
            ".pop()",
            ".shift()"
        ],
        answer: 0
    }
];

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const scoreElement = document.getElementById('score');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    startButton.classList.add('hide');
    scoreElement.classList.remove('hide');
    showQuestion();
}

function showQuestion() {
    resetState();
    const question = questions[currentQuestionIndex];
    questionElement.innerText = question.question;
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(index));
        optionsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    while (optionsElement.firstChild) {
        optionsElement.removeChild(optionsElement.firstChild);
    }
}

function selectAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    const buttons = Array.from(optionsElement.children);
    
    buttons.forEach(button => button.disabled = true);
    
    if (selectedIndex === question.answer) {
        score++;
        scoreElement.querySelector('span').innerText = score;
        buttons[selectedIndex].classList.add('correct');
    } else {
        buttons[selectedIndex].classList.add('wrong');
        buttons[question.answer].classList.add('correct');
    }
    
    nextButton.classList.remove('hide');
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionElement.innerText = `Quiz completed! Your score: ${score}/${questions.length}`;
    optionsElement.innerHTML = '';
    nextButton.classList.add('hide');
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide');
}

startButton.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.querySelector('span').innerText = score;
    startQuiz();
});

nextButton.addEventListener('click', nextQuestion);