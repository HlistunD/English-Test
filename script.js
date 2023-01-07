const quizData = [
    {
        question: "Which tenses we use for determining State facts?",
        a: "Present Simple",
        b: "Present Continiuos",
        c: "Past Simple",
        d: "Present Perfect",
        correct: "a",
    },
    {
        question: "Structure of Present Perfect:",
        a: "I had bed mood yesterday",
        b: "We have never been in London",
        c: "He was creating project from 8am to 9pm ",
        d: "It'll be better",
        correct: "b",
    },
    {
        question: "Which verb is Irregular?",
        a: "Work",
        b: "Approve",
        c: "Think",
        d: "Carry",
        correct: "c",
    },
    {
        question: `What we have to put "I'll be an airport ___!" ?`,
        a: "In time",
        b: "On time",
        c: "At time",
        d: "All variations fit",
        correct: "a",
    },
    {
        question: "Choose obligation modal verbs:",
        a: "Should",
        b: "Could, Can, May",
        c: "Might, May, Need",
        d: "Must, have to",
        correct: "d",
    },
    {
        question: "Which constraction is right?",
        a: "They are used to drink fresh",
        b: "I am used to waking up early",
        c: "He getting use to living alone",
        d: "I'm not use to the noise",
        correct: "b",
    },
    {
        question: "After which words we must use Gerund?",
        a: "Love, enjoy, start, finish",
        b: "Pretend, afford, dare, plan",
        c: "Mean, forget, have, refuse",
        d: "Seem, offer, promise",
        correct: "a",
    },
    {
        question: `After which words we have to use "To+infinitive"?`,
        a: "Imagine, mind, stop, would",
        b: "Begin, dislike, give up",
        c: "Avoid, keep, consider",
        d: "Deside, agree, hope",
        correct: "d",
    },
    {
        question: "Choose correct sentense:",
        a: "If you'll be late I'll be regret",
        b: "If I had shot I spend all my time for education",
        c: "If I won the lottery I would give everything to charity",
        d: "If i could give my mother to travel I did it",
        correct: "c",
    },
    {
        question: "Best structure is...",
        a: "You don't need your coat. It's not cold outside",
        b: "We needn't our dinner becouse we just have eaten",
        c: "He needn't day off. He isn't tired",
        d: "They needn't another dog",
        correct: "a",
    },
];
const quiz = document.querySelector("#quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.querySelector("#question");
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");
const submitBtn = document.querySelector("#submit")

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers()

    const currentQuizDate = quizData[currentQuiz]

    questionEl.innerText = currentQuizDate.question
    a_text.innerText = currentQuizDate.a
    b_text.innerText = currentQuizDate.b
    c_text.innerText = currentQuizDate.c
    d_text.innerText = currentQuizDate.d
}
function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener("click", ()=> {
    const answer = getSelected()
    if(answer){
        if (answer === quizData[currentQuiz].correct) {
            score ++ 
        }
        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        }else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onClick="location.reload()">Reload</button>`
        }
    }
})



