var welcomeEl = document.querySelector("#welcome");
var questionEl = document.querySelector("#question");
var answerUl = document.querySelector("#answerList");
var answerEl = document.querySelectorAll(".answer");
var answer1El = document.querySelector("#answer1");
var answer2El = document.querySelector("#answer2");
var answer3El = document.querySelector("#answer3");
var answer4El = document.querySelector("#answer4");
var startBtn = document.querySelector("#start-btn");
var nameBtn = document.querySelector("#nameInput");
var name = document.querySelector("#name");
var time = document.getElementById("time");

var secondsLeft = 60
var questionNum = 1;
var score = 0;

// Defining the content of each question as a function, and assigns the correct answer with a new class
function question1() {
    questionEl.textContent = "JavaScript is a _______.";
    answer1El.textContent = "programming language";
    answer2El.textContent = "coffee shop";
    answer3El.textContent = "clothing brand";
    answer4El.textContent = "country";
    answer1El.setAttribute("class", "answer correctAnswer");
}
function question2() {
    questionEl.textContent = "For best practice, where should you insert the HTML element that links your JavaScript file?";
    answer1El.textContent = "In the <body>, above all the other HTML elements";
    answer2El.textContent = "Outside the <body>, at the very end of the code";
    answer3El.textContent = "Inside the <body>, at the end below the other HTML elements";
    answer4El.textContent = "Inside the CSS file";
    answer3El.setAttribute("class", "answer correctAnswer");
}
function question3() {
    questionEl.textContent = "What character indicates the end of a JavaScript statement?";
    answer1El.textContent = ":";
    answer2El.textContent = ";";
    answer3El.textContent = ",";
    answer4El.textContent = "!";
    answer2El.setAttribute("class", "answer correctAnswer");
}
function question4() {
    questionEl.textContent = "True or False: JavaScript is case sensitive.";
    answer1El.textContent = "true";
    answer2El.textContent = "false";
    answer3El.textContent = "";
    answer4El.textContent = "";
    answer1El.setAttribute("class", "answer correctAnswer");
    answer3El.setAttribute("class", "answer hidden");
    answer4El.setAttribute("class", "answer hidden");
}
function question5() {
    questionEl.textContent = "What is an example of a primitive data type?";
    answer1El.textContent = "string";
    answer2El.textContent = "number";
    answer3El.textContent = "boolean";
    answer4El.textContent = "all of the above";
    answer3El.setAttribute("class", "answer");
    answer4El.setAttribute("class", "answer correctAnswer");
}
function question6() {
    questionEl.textContent = "A fundamental part of JavaScript is that it allows us to store values (numbers, strings, functions, etc.) in containers called ______.";
    answer1El.textContent = "queries";
    answer2El.textContent = "stylesheets";
    answer3El.textContent = "buttons";
    answer4El.textContent = "variables";
    answer4El.setAttribute("class", "answer correctAnswer");
}
function question7() {
    questionEl.textContent = "What is the name of a container we use to store an ordered collection of data?";
    answer1El.textContent = "conditional statement";
    answer2El.textContent = "function";
    answer3El.textContent = "array";
    answer4El.textContent = "scope";
    answer3El.setAttribute("class", "answer correctAnswer");
}
function question8() {
    questionEl.textContent = "Suppose there is an array that = ['coffee', 'pizza', 'sushi', 'broccoli']. What index number would you use to access 'coffee'?";
    answer1El.textContent = "0";
    answer2El.textContent = "1";
    answer3El.textContent = "4";
    answer4El.textContent = "3";
    answer1El.setAttribute("class", "answer correctAnswer");
}
function question9() {
    questionEl.textContent = "What does the Boolean object represent?";
    answer1El.textContent = "a string of values";
    answer2El.textContent = "certain numbers";
    answer3El.textContent = "a 'truth value:' true or false";
    answer4El.textContent = "a container of arrays";
    answer3El.setAttribute("class", "answer correctAnswer");
}
function question10() {
    questionEl.textContent = "In JavaScript, all values are considered to be 'truthy' unless they are defined as 'falsy.' Which examples would return 'false?'";
    answer1El.textContent = "0";
    answer2El.textContent = "null";
    answer3El.textContent = "undefined";
    answer4El.textContent = "all of the above are falsy";
    answer4El.setAttribute("class", "answer correctAnswer");
}
function question11() {
    questionEl.textContent = "What are the name of the things we use to compare and evaluate two or more boolean operands? Ex: ==, !==, >, <, &&";
    answer1El.textContent = "logical comparison operators";
    answer2El.textContent = "variable setters";
    answer3El.textContent = "boolean weighing";
    answer4El.textContent = "JavaScript judges";
    answer1El.setAttribute("class", "answer correctAnswer");
}
function question12() {
    questionEl.textContent = "What allows us to store a sequence of statements to be carried out in JavaScript? Also referred to as a 'subprogram.'";
    answer1El.textContent = "flow";
    answer2El.textContent = "functions";
    answer3El.textContent = "operators";
    answer4El.textContent = "strings";
    answer2El.setAttribute("class", "answer correctAnswer");
}
function question13() {
    questionEl.textContent = "In JavaScript, what is the statement that creates a loop (with three internal expressions)";
    answer1El.textContent = "`for`";
    answer2El.textContent = "`cont`";
    answer3El.textContent = "`loop`";
    answer4El.textContent = "`rep`";
    answer1El.setAttribute("class", "answer correctAnswer");
}
function question14() {
    questionEl.textContent = "______ are a collection of properties that are defined with key-value pairs";
    answer1El.textContent = "boolean statements";
    answer2El.textContent = "function parameters";
    answer3El.textContent = "objects";
    answer4El.textContent = "property hangar";
    answer3El.setAttribute("class", "answer correctAnswer");
}
function question15() {
    questionEl.textContent = "True or False: You can store arrays and functions inside of objects.";
    answer1El.textContent = "true";
    answer2El.textContent = "false";
    answer3El.textContent = "";
    answer4El.textContent = "";
    answer2El.setAttribute("class", "answer correctAnswer");
    answer3El.setAttribute("class", "answer hidden");
    answer4El.setAttribute("class", "answer hidden");
}

// Timer function
function startTimer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        time.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            // end the quiz
        }

    }, 1000);
}

// Function for starting the quiz. Hides the welcome message and the timer, makes the question/answers appear.
function startQuiz() {
    startTimer();
    welcomeEl.setAttribute("class", "hidden");
    startBtn.setAttribute("class", "hidden");
    questionEl.setAttribute("class", "show");
    answerUl.setAttribute("class", "show");

    question1();
}

function endQuiz() {
    // bring up page with your score
}

// Decides which question to show
function nextQuestion() {
    if (questionNum == 0) {
        question1();
    } else if (questionNum == 1) {
        question2();
    } else if (questionNum == 2) {
        question3();
    } else if (questionNum == 3) {
        question4();
    } else if (questionNum == 4) {
        question5();
    } else if (questionNum == 5) {
        question6();
    } else if (questionNum == 6) {
        question7();
    } else if (questionNum == 7) {
        question8();
    } else if (questionNum == 8) {
        question9();
    } else if (questionNum == 9) {
        question10(); 
    } else if (questionNum == 10) {
        question11();
    } else if (questionNum == 11) {
        question12();
    } else if (questionNum == 12) {
        question13();
    } else if (questionNum == 13) {
        question14();
    } else if (questionNum == 14) {
        question15();
    } else if (questionNum == 15) {
        console.log("Quiz Complete! Your score was " + score + "/15")
    }
}

// checks to see if the user selected the list item with the class of "correctAnswer" or not. Calls the next question while incrementing score/question number
function checkQuestion(event) {
    var element = event.target;
        if (element.matches(".correctAnswer")) {
            console.log("correct!");
            score++
            nextQuestion();
            questionNum++
        } else {
            console.log("oops, incorrect");
            nextQuestion();
            questionNum++
        }
}

// Adds event listeners to each answer and will run a function to see if the user selected the right answer
answerEl[0].addEventListener("click", checkQuestion);
answerEl[1].addEventListener("click", checkQuestion);
answerEl[2].addEventListener("click", checkQuestion);
answerEl[3].addEventListener("click", checkQuestion);

// testBtn.addEventListener("click", question1);
startBtn.addEventListener("click", startQuiz);

// Gets input from user after quiz for leaderboard name and score
nameBtn.addEventListener("click", function(event) {
    event.preventDefault();
    var name = document.querySelector("#name").value;
    localStorage.setItem(name, score) 
})