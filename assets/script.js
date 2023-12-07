document.addEventListener("DOMContentLoaded", function() {

var secondsLeft = 15;
var timerInterval;
var questionIndex = 0;

var questions = [
    {
        question: "Do you like this quiz?",
        answers: ["Absofreakinlutely", "I'm on the fence", "You've got to be joking"],
        correctAnswer: 0
    },
    {
        question: "Where does your cat sleep?",
        answers: ["On my pillow", "Outside", "What cat?"],
        correctAnswer: 2
    },
    {
        question: "What's love got to do with it?",
        answers: ["Everything", "Nothing", "What is love?"],
        correctAnswer: 0
    },
    {
        question: "Where is the best hiding place?",
        answers: ["Under the bed", "In the Closet", "Up a tree"],
        correctAnswer: 2
    },
    {
        question: "How do you spell Taurus?",
        answers: ["Taurus", "Tortoise", "Tourist"],
        correctAnswer: 1
    },
    {
        question: "Can I get a window seat?",
        answers: ["Don't want nobody next to me", "I like talking to strangers", "Can't get enough of the view"],
        correctAnswer: 0
    }
];

var score = 0;
var wins = 0;
var losses = 0;

var timer = document.getElementById("timer");
var beginButton = document.getElementById("begin-button"); 
var timeEl = document.getElementById("time");
var container = document.querySelector(".container");
var questionEl = document.getElementById("question");
var answersEl = document.getElementById("answers");
var gameOver = document.getElementById("game-over");
var initialInput = document.getElementById("initials");
var scoreTally = document.getElementById("score-tally");
var localScore = localStorage.getItem("localScore");

function checkAnswer(selectedIndex) {
    var currentQuestion = questions[questionIndex];
    if (selectedIndex === currentQuestion.correctAnswer) {
        score++;
    } else {
        secondsLeft -= 5;
        losses++;
    }
    questionIndex++;
    displayQuestion();
}

function endQuiz() {
    container.style.display = "none";
    gameOver.style.display = "block";
    scoreTally.textContent = score;
}

function setTime() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " Time Remaining";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}

function startQuiz() {
    console.log("startQuiz button clicked");
    setTime();
    displayQuestion();
}

function displayQuestion() {
    if (questionIndex < questions.length) {
        const question = questions[questionIndex];
        questionEl.textContent = question.question;

        answersEl.innerHTML = "";
        question.answers.forEach((answer, index) => {
            var button = document.createElement("button");
            button.textContent = answer;
            button.addEventListener("click", function () {
                checkAnswer(index);
            });
            answersEl.appendChild(button);
        });
    } else {
        endQuiz();
    }
}
var scoreTally = document.getElementById("score-tally");

if (scoreTally !== null) {
   if (localScore !== null) {
    scoreTally.textContent = localScore;
    } else {
        scoreTally.textContent = 0;
    }
} else {
    console.log("scoreTally is null");
}

function saveScore() {
    var initials = initialInput.value;
    alert("Score saved for " + initials);
    localStorage.setItem("localScore", score);
}

if (localScore !== null) {
    scoreTally.textContent = localScore;
} else {
    scoreTally.textContent = 0;
}

scoreTallyForm.addEventListener("submit", function (event) {
    event.preventDefault();
    saveScore();
});

beginButton.addEventListener("click", startQuiz);
});