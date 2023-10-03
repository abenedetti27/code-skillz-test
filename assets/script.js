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
        amswers: ["On my pillow", "Outside", "What cat?"],
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
        }
    }, 1000);

}
function startQuiz() {
    //is this the same function as setTime? 
    setTime();
    question1();


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
//originally listed questions in index but couldn't debug so opted to create functions for each multiple choice q. I was inspired by an in-class activity.
//need to add function for incorrect.

function askQuestion1() {
    container.textContent = question1.question;
    answerA.textContent = question1.answer1;
    answerB.textContent = question1.answer2;
    answerC.textContent = question1.answer3;
    optionA.addEventListener("click",askQuestion1);
    optionB.addEventListener("click",incorrect);
    optionC.addEventListener("click",incorrect);
}

function askQuestion2(){
    container.textContent = question1.question;
    answerA.textContent = question2.answer1;
    answerB.textContent = question2.answer2;
    answerC.textContent = question2.answer3;
    optionA.addEventListener("click",incorrect);
    optionB.addEventListener("click",incorrect);
    optionC.addEventListener("click",askQuestion2);
}

function askQuestion3(){
    container.textContent = question3.question;
    answerA.textContent = question3.answer1;
    answerB.textContent = question3.answer2;
    answerC.textContent = question3.answer3;
    optionA.addEventListener("click",askQuestion3);
    optionB.addEventListener("click",incorrect);
    optionC.addEventListener("click",incorrect);
}

function askQuestion4(){
    container.textContent = question4.question;
    answerA.textContent = question4.answer1;
    answerB.textContent = question4.answer2;
    answerC.textContent = question4.answer3;
    optionA.addEventListener("click",incorrect);
    optionB.addEventListener("click",incorrect);
    optionC.addEventListener("click",askQuestion4);
}

function askQuestion5(){
    container.textContent = question5.question;
    answerA.textContent = question5.answer1;
    answerB.textContent = question5.answer2;
    answerC.textContent = question5.answer3;
    optionA.addEventListener("click",incorrect);
    optionB.addEventListener("click",askQuestion5);
    optionC.addEventListener("click",incorrect);
}

function askQuestion6(){
    container.textContent = question6.question;
    answerA.textContent = question6.answer1;
    answerB.textContent = question6.answer2;
    answerC.textContent = question6.answer3;
    optionA.addEventListener("click",askQuestion6);
    optionB.addEventListener("click",incorrect);
    optionC.addEventListener("click",incorrect);
}



//function for updating time and ending quiz
function endQuiz(){
    getInfo ();
    score();
    playAgain();
}

function scoreTally() {
    var initials = intialsInput.value;
    alert("Score saved for (initialInput)");
    localStorage.setItem(localScore),timer(); //will this work to reload the page to play again?

};

beginButton.addEventListener("click", startQuiz);

saveDate();




//action for save local after initials are input. event listener submit?