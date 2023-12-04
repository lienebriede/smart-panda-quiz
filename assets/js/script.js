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
    },
    {   
        question: "In which Chinese city can you see the Terracotta Warriors?",
        answers: ["Harbin", "Xi'an", "Shenzhen", "Shanghai"],
        correctAnswer: "Xi'an",
        comment: "It's Xi'an! Xi'an is one of the Chinese Four Great Ancient Capitals besides Beijing, Nanjing and Luoyang."
    },
    {   
        question: "Bibimbap is a popular dish in:",
        answers: ["Hong Kong", "China", "South Korea", "Japan"],
        correctAnswer: "South Korea",
        comment: "It's a famous dish in Korea, of course it's not as famous as Kimchi."
    },
    {   
        question: "How many time zones are there in China?",
        answers: ["1", "2", "3", "4"],
        correctAnswer: "1",
        comment: "It's only 1! Kinda nuts for such a huge country, right?"
    },
    {   
        question: "Which Chinese dialect is most widely spoken in Hong Kong?",
        answers: ["Mandarin", "Wu", "Cantonese", "Hokkien"],
        correctAnswer: "Cantonese",
        comment: "It's Cantonese, which is also spoken in China's Guangdong province."
    },
    {   
        question: "Which district in Tokyo is famous for video games and tech?",
        answers: ["Akihabara", "Shinjuku", "Pudong", "Gang Nam"],
        correctAnswer: "Akihabara",
        comment: "It's Akihabara - a real fun place to visit once you're in Tokyo!"
    },
    {   
        question: "What are chopsticks mostly made of in Korea?",
        answers: ["Wood", "Plastic", "Metal", "Porcelain"],
        correctAnswer: "Metal",
        comment: "It's metal! The good thing about metal chopsticks is that they are reusable. But they are so damn hard to use!"
    },
    {   
        question: "Which city in East Asia does not have a Disneyland?",
        answers: ["Hong Kong", "Seoul", "Tokyo", "Shanghai"],
        correctAnswer: "Seoul",
        comment: "It's Seoul! Did you know that there are two Disney amusement parks in Tokyo - Tokyo Disneyland and Tokyo Disney Sea."
    },
    {   
        question: "Taiwan is most famous for the production of",
        answers: ["weapons", "cars", "videogames", "microchips"],
        correctAnswer: "microchips",
        comment: "It's microchips. 50% of the world's microchips are produced in Taiwan!"
    },
    {   
        question: "Which Martial Art originated in China?",
        answers: ["Taekwondo", "Kung Fu", "Karate", "Judo"],
        correctAnswer: "Kung Fu",
        comment: "It's Kung Fu. Easy to remember! Just think of Kung Fu Panda. Pandas also come from China!"
    },
    {   
        question: "Which ancient Chinese art means wind and water?",
        answers: ["Tai Chi", "Ying Yang", "Feng Shui", "Dim Sum"],
        correctAnswer: "Feng Shui",
        comment: "It's Feng Shui! But I feel like dim sum anyway!"
    },
    {   
        question: "The flag of which country does not have a circle?",
        answers: ["China", "Japan", "South Korea", "Taiwan"],
        correctAnswer: "China",
        comment: "It's China! It only has stars!"
    }
];

const question = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
let questionIndex = 0;
let currentQuestion = questions[questionIndex];
const nextButton = document.getElementById("next-btn");
let score = 0;
let currentScore = document.getElementById("current-score");
const note = document.getElementById("note");
const comment = document.getElementById("comment");
const playButton = document.getElementById("play-button");
const startPage = document.getElementById("start-page");
const quizPage = document.getElementById("quiz-page");
const instructionsButton = document.getElementById("instructions-button");
const instructionsPage = document.getElementById("instructions-page");
const exitButton = document.getElementById("exit-btn");
const header = document.getElementById("header");

//Calls to go to the start page
header.addEventListener("click", () => {
    quizPage.classList.add("hide");
    startPage.classList.remove("hide");
    instructionsPage.classList.add("hide");
} )

//Calls to start quiz
playButton.addEventListener("click", () => {
    startGame();
})
//Calls to open instructions
instructionsButton.addEventListener("click", openInstructions);

/** Opens and hides
 * instructions */
function openInstructions() {
    instructionsPage.classList.remove("hide");
startPage.classList.add("hide");
//Closes instructions 
exitButton.addEventListener("click", () => {
    instructionsPage.classList.add("hide");
    startPage.classList.remove("hide");
})
}

/** Starts the quiz from the first question
 *  and 0 score  */
function startGame() {
    questionIndex = 0;
    score = 0;
    currentScore.innerHTML = 0;
    //Otherwise it will say "play again" after restarting
    nextButton.innerHTML = "Next";
    quizPage.classList.remove("hide");
    startPage.classList.add("hide");
    displayQuestion();
}

/** Displays questions and answers */
function displayQuestion() {
    hideAnswerButtons();
    incrementQuestionNumber();
    //This hides the play again button
    nextButton.classList.add("hide");
    note.classList.add("hide");
    comment.classList.add("hide");
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
        //Adds class for styling
        button.classList.add("answer_btn");
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
/** Numbers questions starting from 1
 * displays adding 1 to every question
 */
function incrementQuestionNumber() {
    let questionNumber = document.getElementById("q-num");
    questionNumber.innerHTML = questionIndex + 1 + "/" + questions.length;
}
/** Checks if the clicked answer is equal to to the correct answer,
 * adds classes to display right and wrong answers,
 * displays comment under questions and right/wrong
  */
function checkAnswer(e) {
    // Creates a variable and adds the event element to it
    const selectedButton = e.target;
    note.classList.remove("hide");
    comment.classList.remove("hide");
    let currentQuestion = questions[questionIndex];
    comment.innerHTML = currentQuestion.comment;
    //Checks if the correct answer is the same text as the answer button,
    //Adds classes to correct and wrong to style in CSS
    if (selectedButton.innerHTML === currentQuestion.correctAnswer) {
        selectedButton.classList.add("correct");
        //Adds to score
        score++;
        //Displays current score
        currentScore.innerHTML = `${score}`; 
        note.innerHTML = "RIGHT!";
    } else {
        selectedButton.classList.add("wrong");
        note.innerHTML = "WRONG!";
    }
    //Checks and displays the correct answer when user clicks the answer button
    //Code from Youtube tutorial from Great Stack
    Array.from(answerButtons.children).forEach(button => {
        if (button.innerHTML === currentQuestion.correctAnswer) {
            button.classList.add("correct");
        }
        //Locks other answer options after selecting one
        button.disabled = true;
    });
    //Displays next button after clicking on answer
    nextButton.classList.remove("hide");
}
/** Displays score at the end of the game
 * displays play again button that restarts the game
 */
function displayScore() {
    // When displaying score, hides buttons
    hideAnswerButtons();
    note.classList.add("hide");
    comment.classList.add("hide");
    // Displays text when finished playing
    if (score <= 4) {
        question.innerHTML = `You answered ${score} out of ${questions.length} questions correctly!
        You obviously don't know much about East Asia!`;
    } else  if (score <= 8) {
        question.innerHTML = `You answered ${score} out of ${questions.length} questions correctly!
        Not bad! You know your East Asia stuff!`;
    } else {
        question.innerHTML = `You answered ${score} out of ${questions.length} questions correctly!
        Well done!  You're a real East Asia pro!`; 
    }
    nextButton.innerHTML = "Play again";
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
