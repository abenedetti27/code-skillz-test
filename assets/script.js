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

const questions = [
    {question: "Do you like this quiz?", answers: ["Absofreakinlutely", "I'm on the fence", "You've got to be joking"] },
    {question: "Where does your cat sleep?", answers: ["On my pillow", "Outside", "What cat?"] },
    {question: "What's love got to do with it?", answers: ["Everything", "Nothing", "What is love?"] }
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