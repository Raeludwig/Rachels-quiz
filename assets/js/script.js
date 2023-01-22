const startButton = document.getElementById('start')
var endTime;
const timeSpan= document.getElementById('time-remaining');
var timeInterval;



var questions = [
    {
        question: "What is the capital of France?",
        options: [
            "Paris",
            "London",
            "Berlin",
            "Madrid"
        ],
        answer: "Paris"
    },
    {
        question: "What is the capital of Germany?",
        options: [
            "Paris",
            "London",
            "Berlin",
            "Madrid"
        ],
        answer: "Berlin"

    },
    {
        question: "What is the capital of Spain?",
        options: [
            "Paris",
            "London",
            "Berlin",
            "Madrid"
        ],
        answer: "Madrid"
    },
    {
        question: "What is the capital of England?",
        options: [
            "Paris",
            "London",
            "Berlin",
            "Madrid"
        ],
        answer: "London"
    }   
]
var questionIndex = -1;

startButton.addEventListener('click', () => {
    // Start the timer
    let lengthOfQuiz = 60;
    endTime = new Date(new Date().getTime() +lengthOfQuiz*1000);
    timeInterval = setInterval(function() {
        var now = new Date();
        var timeDiff = endTime - now;
        timeDiff /= 1000;
        var seconds = Math.round(timeDiff);
        timeSpan.innerHTML = seconds;
        if (seconds <=0){
            //TODO: end the game
        }
    }, 250);
    // Hide the start button
    startButton.style.display= "none";
    // set current question to 0
 showNextQuestion();
    // Show the first question
});


const questionEl= document.getElementById('question');
const option1El= document.getElementById('option1');
const option2El= document.getElementById('option2');
const option3El= document.getElementById('option3');
const option4El= document.getElementById('option4');


function showNextQuestion() {
    // Show the next question
    questionIndex++;
    let currentQuestion = questions[questionIndex];
    console.log({currentQuestion});
    questionEl.textContent = currentQuestion.question;
    option1El.textContent = currentQuestion.options[0];
    option2El.textContent = currentQuestion.options[1];
    option3El.textContent = currentQuestion.options[2];
    option4El.textContent = currentQuestion.options[3];

    option1El.addEventListener('click', (e) => {
        submitAnswer(e.target.textContent);
    });
    option2El.addEventListener('click', (e) => {
        submitAnswer(e.target.textContent);
    });
    option3El.addEventListener('click', (e) => {
        submitAnswer(e.target.textContent);
    });
    option4El.addEventListener('click', (e) => {
        submitAnswer(e.target.textContent);
    });
    // If there are no more questions, show the results
    // and stop the timer


}


function submitAnswer(answer) {
    // TODO: Check if the answer is correct
    console.log({answer});
    let currentQuestion = questions[questionIndex];
    if (answer !== currentQuestion.answer) {
        console.log("Incorrect!");
        // TODO: Subtract time from the timer
    }

    showNextQuestion();

}


const highScore =document.getElementById('high-score');

function showFinishScreen(){
    
}