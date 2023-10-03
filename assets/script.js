//Start the game with "Begin button
    //add eventlistener to button
    //first question and multiplpe choice ansers populate = query selector or variable?
    //timer starts counting down in intervals of 1000 ms
    //Start new game when game is over
//comapre user selected anser to correct answer = event listener?
    //if answer is correct, next question populates
    //if answer is wrong, time is deducted from timer, next question populates =set interval, clear interval
//if timer runs out, game is over -lose
//if there is time remaining that is user score, game is over -win
//when game is won, wins are incremented to scoreboard and saved to local storage
//when game is lost, losses are incremented to scoreboard and save to local storage
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
    } ,  
    {
        question: "What's love got to do with it?",
        answers: ["Everything", "Nothing", "What is love?"],
        correctAnswer: 0
    }  , 
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
        answers: ["Don't want nobody next to me", "I like talking to strangers", "Can't enough of the view"],
        correctAnswer: 0
    }

]


var score= 0;
var wins;
var losses=0;

var timer = document.getElementById("timer");
var beginButton = document.getElementById("begin button");
var timeEl = document.getElementById("time");
var container = document.querySelector(".container");
var questionEl = document.getElementById("question");
var answersEl = document.getElementById("answers");
var gameOver = document.getElementById("game-over");
var initialInput = document.getElementById("initials");
var scoreTally = document.getElementById("score-tally");
var localScore = localStorage.getItem("localScore");


function setTime() {
    timerInterval = setInterval(function(){
        secondsLeft--;
        timeEl.textContent = secondsLeft + "Time Remaining";

        if(secondsLeft === 0){
            //save score to scoreboard local storage
            //clear interval? message?
            clearInterval(timerInterval);    
            endQuiz();
        
        }
    }, 1000);

}
function startQuiz() {
    //is this the same function as setTime? 
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
        // All questions have been asked, end the game
        endQuiz();
    }
}
function checkAnswer(selectedIndex) {
    const question = questions[questionIndex];
    if (selectedIndex === question.correctAnswer) {
        score++; // Increase score for correct answer
    } else {
        secondsLeft -= 5; // Deduct time for wrong answer
    }

    questionIndex++; // Move to the next question
    displayQuestion();
}
//function for comparing selected answer to correct. With if/else statement for deducting time for wrong answer?
//originally listed questions in index but couldn't debug so opted to create functions for each multiple choice q. I was inspired by an in-class activity.
//need to add function for incorrect.



//function for updating time and ending quiz
function endQuiz() {
    clearInterval(timerInterval);
}

function saveScore() {
    var initials = initialInput.value;
    alert("Score saved for " + initials);
    localStorage.setItem("localScore", score);


};


scoreTallyForm.addEventListener("submit", function (event) {
    event.preventDefault();
    saveScore();
});

beginButton.addEventListener("click", startQuiz);




//action for save local after initials are input. event listener submit?