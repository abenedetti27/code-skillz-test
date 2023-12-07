# code-skillz-test
    Multiple Choice Quiz

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| HTML    | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | 
| CSS     | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)      |   
| Git | [https://git-scm.com/](https://git-scm.com/)     |    
| JavaScript

## Description 

[Visit the Deployed Site](https://abenedetti27.github.io/code-skillz-test/)


The goal of this project was to build a times quiz with multiple choice answers. The functionality was to have the page change to the next question once a quesiton is answered. If the question was answered incorrectly, it would deduct 5 seconds from the timer. The final time on the timer is the score. The score is to be saved locally. 

The page is not functioning correctly. I attempted many iterations of listing out the questions and editing the html to populate the questions to no avail. 

## Code Example

Below are examples of the HTML from the body:

```html
  <section>
        <h2 id="question"></h2>
        <button id="option1"></button>
        <button id="option2"></button>
        <button id="option3"></button>
    </section>

    <div class="timer">Time: <span id="time">15</span> seconds</div>
    
    <div id="game-over" class="hidden">
        <h2>Game Over</h2>
        <form id="scoreTally">
            <label for="initials">Enter Initials:</label>
            <input type="text" id="initials" name="initials" required>
            <button type="submit">Save Score</button>
        </form>
    </div>
```



Below are examples of the javascript display question and check answer functions:

```js
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
```
## License

MIT License

Copyright (c) [2023] [Anna Rose Benedetti]


---