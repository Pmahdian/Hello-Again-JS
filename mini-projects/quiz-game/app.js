const questions = [
    {
        question: "What does 'DOM' stand for in JavaScript?",
        options: [
            "Document Object Model",
            "Digital Output Module",
            "Data Object Management",
            "Display Orientation Method"
        ],
        answer: 0
    },
    {
        question: "Which method adds new items to the end of an array?",
        options: [
            "push()",
            "pop()",
            "shift()",
            "unshift()"
        ],
        answer: 0
    },
    {
        question: "What will typeof null return in JavaScript?",
        options: [
            "object",
            "null",
            "undefined",
            "string"
        ],
        answer: 0
    },
    {
        question: "Which keyword is used to declare variables in modern JavaScript?",
        options: [
            "let",
            "var",
            "const",
            "All of the above"
        ],
        answer: 3
    },
    {
        question: "What does the '=== ' operator check?",
        options: [
            "Value only",
            "Value and type",
            "Type only",
            "Neither value nor type"
        ],
        answer: 1
    },
    {
        question: "Which method converts JSON string to a JavaScript object?",
        options: [
            "JSON.parse()",
            "JSON.stringify()",
            "JSON.convert()",
            "JSON.toObject()"
        ],
        answer: 0
    },
    {
        question: "What is the output of: console.log(2 + '2')?",
        options: [
            "4",
            "22",
            "NaN",
            "Error"
        ],
        answer: 1
    },
    {
        question: "Which array method creates a new array with transformed elements?",
        options: [
            "forEach()",
            "map()",
            "filter()",
            "reduce()"
        ],
        answer: 1
    },
    {
        question: "What does the 'this' keyword refer to in a method?",
        options: [
            "The function itself",
            "The global object",
            "The object that owns the method",
            "The parent object"
        ],
        answer: 2
    },
    {
        question: "Which symbol is used for template literals?",
        options: [
            "Single quotes ('')",
            "Double quotes (\"\")",
            "Backticks (``)",
            "Parentheses (())"
        ],
        answer: 2
    }
];

// DOM Elements
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const scoreElement = document.getElementById('score');
const timeElement = document.getElementById('time');

// Game State
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 60;
let timer;

// Initialize
startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', nextQuestion);

function startQuiz() {
    startButton.classList.add('hide');
    scoreElement.parentElement.classList.remove('hide');
    resetTimer();
    showQuestion();
}

function showQuestion() {
    resetState();
    const question = questions[currentQuestionIndex];
    questionElement.innerText = question.question;
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('btn', 'option');
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
    clearInterval(timer);
    const question = questions[currentQuestionIndex];
    const buttons = Array.from(optionsElement.children);
    
    buttons.forEach(button => button.disabled = true);
    
    if (selectedIndex === question.answer) {
        score++;
        scoreElement.innerText = score;
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
        resetTimer();
        showQuestion();
    } else {
        endQuiz();
    }
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 60;
    timeElement.innerText = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        timeElement.innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            selectAnswer(-1); // Auto-fail if time runs out
        }
    }, 1000);
}

function endQuiz() {
    clearInterval(timer);
    questionElement.innerHTML = `
        <h2>Quiz Completed!</h2>
        <p>Your final score: <strong>${score}/${questions.length}</strong></p>
    `;
    optionsElement.innerHTML = '';
    nextButton.classList.add('hide');
    startButton.innerText = 'Restart Quiz';
    startButton.classList.remove('hide');
}