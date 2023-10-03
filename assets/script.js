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


var questionIndex =0;
var secondsLeft = 15;
var counter =0;

var timeEl = document.getElementById("time");
var container = document.querySelector(".container");
var questionEl = document.getElementById("question");
var answersEl =document.getElementById("answers");
var gameOver =document.getElementById("game-over");
var initialInput =document.getElementById("initials");
var scoreTally =document.getElementById("score-tally");


var score= 0;
var wins;
var losses=0;

var question1 = {
    question:"Do you like this quiz?",
    answer1:"Absofreakinlutely",
    answer2:"I'm on the fence",
    answer3:"You've got to be joking"
}
var question2 = {
    question:"Where does your cat sleep?",
    answer1:"On my pillow",
    answer2:"Outside",
    answer3:"What cat?"
}
var question3 = {
    question:"What's love got to do with it?",
    answer1:"Everything",
    answer2:"Nothing",
    answer3:"What is love?"
}
var question4 = {
    question:"Do you like this quiz?";
    answer1:""
    answer2:""
    answer3:""
}
var question5 = {
    question:"Do you like this quiz?";
    answer1:""
    answer2:""
    answer3:""
}
var question6 = {
    question:"Do you like this quiz?";
    answer1:"Everything",
    answer2:""
    answer3:""
}



const questions = [
    {question: "Do you like this quiz?", answers: ["Absofreakinlutely", "I'm on the fence", "You've got to be joking"] },
    {question: "Where does your cat sleep?", answers: ["On my pillow", "Outside", "What cat?"] },
    {question: "What's love got to do with it?", answers: ["Everything", "Nothing", "What is love?"] },
    {question: ""},
    {question: ""},
    {question: ""}
];


function setTime() {
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timeEl.textContent = secondsLeft + "Time Remaining";

        if(secondsLeft === 0){
            //save score to scoreboard local storage
            //clear interval? message?
        }
    }, 1000);

}
function startQuiz() {
    //is this the same function as setTime? 
    counter = setInterval(updateTime, 1000);
    displayQuestion();

}

function displayQuestion() {
    const question = questions[questionIndex];
    questionEl.textContent = question.question; //question element and questtion from const question var. do i need to rename so this doesn't break?
    
    answersEl.innerHTML = ""; 
    question.answers.forEach((answer)=> {
        var button = document.createElement("button");
        button.textContent = answer;
        button.addEventListener("click", checkAnswer);//
        answersEl.appendChild(button);
    });
}
//function for comparing selected answer to correct. With if/else statement for deducting time for wrong answer?
function checkAnswer(event) {
    var selectedAnswer = event.target.textContent;
    var selectedQuestion = questions[questionIndex];
    if (question.answers.includes(selectedAnswer)){
        score += 15;
    }
    else {
        time -=15;
    }

    questionIndex++;
    if(questionIndex < questions.length){
        displayQuestion();
    }
    else {
        endQuiz();
    }
}


//function for updating time and ending quiz
function endQuiz(){
    clearInterval(counter);
    questionEl.textContent = "";
    gameOverEl.classList.remove("hidden");
}

scoreTally.addEventListener("submit", (event)=> {
    event.preventDefault();
    var initials = intialsInput.value;
    alert("Score saved for (initialInput)");
    location.reload(); //will this work to reload the page to play again?

});

document.getElementById("begin-button").addEventListener("click", startQuiz);





//action for save local after initials are input. event listener submit?