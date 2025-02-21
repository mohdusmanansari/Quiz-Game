const questions = [
    {
        question: "Which is largest animal in the world?",
        answer: [
            {optiion: "Elephant", correct: false},
            {optiion: "Blue Whale", correct: true},
            {optiion: "Giraffe",correct: false},
            {optiion: "Shark", correct: false}
        ]
    },
    {
        question: "Which is the largest ocean in the world?",
        answer: [
            {optiion: "Atlantic Ocean", correct: false},
            {optiion: "Indian Ocean", correct: false},
            {optiion: "Pacific Ocean", correct: true},
            {optiion: "Arctic Ocean", correct: false}
        ]
    },
    {
        question: "Which is the largest continent in the world?",
        answer: [
            {optiion: "Asia", correct: true},
            {optiion: "Europe", correct: false},
            {optiion: "Africa", correct: false},
            {optiion: "Australia", correct: false}
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answer: [
            {optiion: "Sahara Desert", correct: true},
            {optiion: "Gobi Desert", correct: false},
            {optiion: "Arabian Desert", correct: false},
            {optiion: "Kalahari Desert", correct: false}
        ]   
    }
];
const questionElement = document.getElementById("question");
const ansElement =document.getElementById("ans");
const nextButton = document.getElementById("nextbtn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){

    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answers => {
        const button = document.createElement("button");
        button.innerHTML = answers.optiion;
        button.classList.add("btn");
        ans.appendChild(button);
        if(answers.correct){
            button.dataset.correct = answers.correct;
        }
        button.addEventListener("click", selectAnswer);
    })

}
function resetState(){
    nextButton.style.display = "none";  
    while(ansElement.firstChild){
        ansElement.removeChild(ansElement.firstChild);
    }
}
function selectAnswer(e){
    console.log("yesssssssss");
    
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if(isCorrect){
        selectedButton.classList.add("correct");
        score++;
    }else{
        selectedButton.classList.add("incorrect"); 
    }
    Array.from(ansElement.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `your score is ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Restart";
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();
