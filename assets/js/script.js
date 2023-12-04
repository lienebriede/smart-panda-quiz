const questions = [
    {
        question: "Super Mario is the mascot of which video game developer?",
        answers: ["Nintendo", "TenCent", "Sony", "Sega"],
        correctAnswer: "Nintendo",
        comment: "It's Nintendo! Did you know that Nintendo originally sold playing cards? Let's-a-go!"
    },
    {
        question: "Where does boba come from?",
        answers: ["China", "Japan", "South Korea", "Taiwan"],
        correctAnswer: "Taiwan",
        comment: "It's Taiwan! The Taiwanese have been enjoying it since 1981!"
    },
    {
        question: "Which popular K-pop boy band had the hit singles “Butter” and “Dynamite”?",
        answers: ["Epic High", "The BoyZ", "BTS", "Exo"],
        correctAnswer: "BTS",
        comment: "It's BTS! Jungkook, V, Jimin, SUGA, Jin, RM, j-hope FTW."
    },
    {
        question: "In which language would you say “Arigatou” to thank somebody?",
        answers: ["Korean", "Cantonese", "Japanese", "Mandarin"],
        correctAnswer: "Japanese",
        comment: "It's Japanese! But if you forget how to say it, just bow!"
    }
];

const question = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
let questionIndex = 0;
let currentQuestion = questions[questionIndex];
const nextButton = document.getElementById("next-btn");
let score = 0;

startGame();

/** Starts the quiz from the first question
 *  and 0 score  */
function startGame() {
    questionIndex = 0;
    score = 0;
    displayQuestion();
}

/** Displays questions and answers */
function displayQuestion() {
    hideAnswerButtons();
    //Creates a variable: a question from all the questions according to its index
    let currentQuestion = questions[questionIndex];
    //Displays question text
    question.innerHTML = currentQuestion.question;
    //Loops through answers, getting single answer for each loop inside this function
    currentQuestion.answers.forEach(function (option, index) {
        //Creates buttons for each answer
        const button = document.createElement("button");
        button.innerHTML = option;
        answerButtons.appendChild(button);
    });
    //Calls checkAnswer function when clicked
    answerButtons.addEventListener("click", checkAnswer);
}
/** Hides the default answer buttons
 * This code is taken from Youtube tutorials:
 * Great Stack and Web Dev Simplified
 */
function hideAnswerButtons() {
    //loops through answer buttons and removes the child element
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
/** Checks if the clicked answer is equal to to the correct answer,
 * adds classes to display right and wrong answers
  */
function checkAnswer(e) {
    // Creates a variable and adds the event element to it
    const selectedButton = e.target;
    let currentQuestion = questions[questionIndex];
    //Checks if the correct answer is the same text as the answer button,
    //Adds classes to correct and wrong to style in CSS
    if (selectedButton.innerHTML === currentQuestion.correctAnswer) {
        selectedButton.classList.add("correct");
    } else {
        selectedButton.classList.add("wrong");
    }
    //Checks and displays the correct answer when user clicks the answer button
    //Code from Youtube tutorial from Great Stack
    Array.from(answerButtons.children).forEach(button => {
        if (button.innerHTML === currentQuestion.correctAnswer) {
            button.classList.add("correct");
            //Adds to score
            score++;
        }
        //Locks other answer options after selecting one
        button.disabled = true;
    });
    //Displays next button after clicking on answer
    nextButton.classList.remove("hide");
}

/** Displays next question
 * or calls display score function if all questions are displayed
 */
function handleNextButton() {
    // Updates question index
    questionIndex++;
    // Displays question in a loop
    if(questionIndex < questions.length) {
        displayQuestion(); 
        // Displays score if there are no new questions
    } else {
        displayScore();
    }
}
/** Displays next question after 
 * clicking button until there are no more questions
 **/
nextButton.addEventListener("click", () => {
    if (questionIndex < questions.length) {
        handleNextButton();
        // Restarts the game after all questions have been displayed
    } else {
    startGame();
    }
})
