javascript
let username = '';
let timeLeft = 60;
let timer;
let currentQuestion = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let unanswered = 0;
let alreadySubmitted = false;

const questions = [
    {
        question: "Что такое JavaScript?",
        options: ["Язык программирования", "Тип операционной системы", "Процессор", "Программный пакет"],
        correct: 0
    },
    {
        question: "Какой из этих методов используется для добавления элемента в массив в JavaScript?",
        options: ["push()", "add()", "insert()", "append()"],
        correct: 0
    },
    {
        question: "Что такое DOM?",
        options: ["Документный объект модели", "Цифровая операционная модель", "Тип данных", "Среда разработки"],
        correct: 0
    },
    {
        question: "Как объявить переменную в JavaScript?",
        options: ["let", "var", "const", "все вышеупомянутые"],
        correct: 3
    },
    {
        question: "Что такое асинхронный код?",
        options: ["Код, который выполняется синхронно", "Код, который может выполняться не блокируя остальной процесс", "Код, который не используется", "Код с ошибками"],
        correct: 1
    },
    {
        question: "Что такое JSON?",
        options: ["Тип данных", "Формат данных", "Алгоритм сжатия", "Метод в JavaScript"],
        correct: 1
    }
];

function startTest() {
    username = document.getElementById('username').value;
    if (username === '') {
        alert("Пожалуйста, введите ваше имя.");
        return;
    }
    document.getElementById('username-display').innerText = "Привет, " + username;
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('test-screen').style.display = 'block';
    startTimer();
    loadQuestion();
    changeBackgroundColor();
}

function startTimer() {
    timer = setInterval(function () {
        timeLeft--;
        document.getElementById('time-left').innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            submitTest();
        }
    }, 1000);
}

function loadQuestion() {
    if (currentQuestion < questions.length) {
        const question = questions[currentQuestion];
        const questionHTML = `
            <div class="question">
                <p>question.question</p>
                <div>
                    <input type="radio" name="q{currentQuestion}" value="0"> question.options[0]<br>
                    <input type="radio" name="q{currentQuestion}" value="1"> question.options[1]<br>
                    <input type="radio" name="q{currentQuestion}" value="2"> ${question.options[2]}<br>
                    <input type="radio" name="q{currentQuestion}" value="3"> question.options[3]<br>
                </div>
            </div>
        `;
        document.getElementById('questions-container').innerHTML += questionHTML;
        currentQuestion++;
    

function submitTest() 
    if (alreadySubmitted) return;
    alreadySubmitted = true;

    clearInterval(timer);
    for (let i = 0; i < questions.length; i++) 
        const selected = document.querySelector(input[name="q{i}"]:checked);
        if (selected) {
            const answer = parseInt(selected.value);
            if (answer === questions[i].correct) {
                correctAnswers++;
            } else {
                incorrectAnswers++;
            }
        } else {
            unanswered++;
        }
    }

    document.getElementById('test-screen').style.display = 'none';
    document.getElementById('result-screen').style.display = 'block';

    document.getElementById('correct-answers').innerText = Правильных ответов: correctAnswers;
    document.getElementById('incorrect-answers').innerText = Неправильных ответов:{incorrectAnswers};
    document.getElementById('unanswered').innerText = Неотвеченных вопросов: ${unanswered};
    document.getElementById('submit-btn').disabled = true;
}
function reloadPage() {
    location.reload();
}

function changeBackgroundColor() {
    const colors = ['#f0f8ff', '#faebd7', '#98fb98', '#ffcccb', '#add8e6', '#ffe4e1'];
    let colorIndex = 0;

    setInterval(() => {
        document.body.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }, 1000);
}