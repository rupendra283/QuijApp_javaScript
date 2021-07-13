const quijData = [
    {
        question: "How old is Rupendra?",
        a: "18",
        b: "19",
        c: "20",
        d: "24",
        correct: "a",
    },

    {
        question: "what is the most used programming language?",
        a: "java",
        b: "c",
        c: "python",
        d: "javaScript",
        correct: "a",
    },

    {
        question: "Who is the president of us?",
        a: "florin po",
        b: "Donald trump",
        c: "even",
        d: "biden",
        correct: "a",
    },

    {
        question: "HTML stands for ?",
        a: "hyper text markup language",
        b: "Application Programming Interface",
        c: "python",
        d: "javaScript",
        correct: "a",
    },

];


const questionElm = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submit = document.getElementById("submit");
const quij = document.getElementById("quij");

// console.log(a_text, b_text, c_text, d_text, questionElm);


let currentQuestion = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
    // deSelecte();

    const currentQuijData = quijData[currentQuestion];
    // console.log(currentQuijData);

    questionElm.innerHTML = currentQuijData.question;
    a_text.innerHTML = currentQuijData.a;
    b_text.innerHTML = currentQuijData.b;
    c_text.innerHTML = currentQuijData.c;
    d_text.innerHTML = currentQuijData.d;


    // console.log(a_text);
}
const answerEl = document.querySelectorAll(".answer");
function getSelected() {
    let answer = undefined;
    answerEl.forEach(function (answerEl) {
        if (answerEl.checked) {
            answer = answerEl.id;

        }
    });
    return answer;

}
function deSelecte() {
    answerEl.forEach(function (answerEl) {
        answerEl.checked = false;
    });
}


submit.addEventListener("click", function () {
    const answer = getSelected();

    console.log(answer);
    if (answer) {
        if (answer === quijData[currentQuestion].correct) {
            score++;
        }
        
        currentQuestion++;
        if (currentQuestion < quijData.length) {
            loadQuiz();
            
            deSelecte();
        }
        else {
            console.log(quijData.length);
           quij.innerHTML = `<h2>you answer correctly${score}/${quijData.length}</h2>`
        }

    }


});

const options = document.querySelectorAll(".answer");

options.forEach(function (element) {
    element.addEventListener('click', function () {
        submit.removeAttribute('disabled');
    })
});

// document.querySelectorAll(".answer").forEach(i => i.addEventListener(
//     "click",
//     e => {
//         submit.removeAttribute('disabled');

//     }));


// option.addEventListener('click', function(){

//     submit.removeAttribute('disabled');
// })