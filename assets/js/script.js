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

function displayQuestion(){
    let questionIndex = 0;
    let currentQuestion = questions[questionIndex];
    question.innerHTML = currentQuestion.question;
    const button = document.createElement("button");
    button.textContent = "Hello!";
    answerButtons.appendChild(button);
}