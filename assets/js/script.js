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

displayQuestion();
/**Displays questions and answers */
function displayQuestion(){
    hideAnswerButtons();
    let questionIndex = 0;
    //Creates a variable: a question from all the questions according to its index
    let currentQuestion = questions[questionIndex];
    //Displays question text
    question.innerHTML = currentQuestion.question;
    //Loops through answers, getting single answer for each loop inside this function
    currentQuestion.answers.forEach(function (option, index){
        //Creates buttons for each answer
        const button = document.createElement("button");
        button.innerHTML = option;
        answerButtons.appendChild(button);
    })
    
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