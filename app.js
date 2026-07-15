// ===================================
// REFLEKT FOUNDATION
// app.js
// ===================================

let currentQuestion = 0;
let answers = [];

const card = document.getElementById("card");
const startButton = document.getElementById("startButton");

// -------------------------------
// App starten
// -------------------------------

startButton.addEventListener("click", () => {

    currentQuestion = 0;
    answers = [];

    showQuestion();

});

// -------------------------------
// Frage anzeigen
// -------------------------------

function showQuestion(){

    const question = questions[currentQuestion];

    card.innerHTML = `

        <div class="questionCount">

            ${currentQuestion + 1} von ${questions.length} Fragen

        </div>

        <div class="question">

            ${question.question}

        </div>

        <button class="answer yes">

            Ja

        </button>

        <br><br>

        <button class="answer no">

            Nein

        </button>

        <textarea placeholder="(freiwillig)"></textarea>

        <br><br>

        <button class="nextButton" disabled>

            Weiter →

        </button>

    `;

    setupButtons();

}
// -------------------------------
// Buttons aktivieren
// -------------------------------

function setupButtons(){

    const yesButton = document.querySelector(".yes");
    const noButton = document.querySelector(".no");
    const nextButton = document.querySelector(".nextButton");

    let selectedAnswer = null;

    yesButton.addEventListener("click", () => {

        selectedAnswer = true;

        yesButton.classList.add("selected");
        yesButton.classList.add("yes");

        noButton.classList.remove("selected");
        noButton.classList.remove("no");

        nextButton.disabled = false;

    });

    noButton.addEventListener("click", () => {

        selectedAnswer = false;

        noButton.classList.add("selected");
        noButton.classList.add("no");

        yesButton.classList.remove("selected");
        yesButton.classList.remove("yes");

        nextButton.disabled = false;

    });

    nextButton.addEventListener("click", () => {

        answers[currentQuestion] = {
            answer: selectedAnswer,
            note: document.querySelector("textarea").value
        };

        currentQuestion++;

        if(currentQuestion < questions.length){

            showQuestion();

        }else{

            showFinishScreen();

        }

    });

}

// -------------------------------
// Abschlussseite
// -------------------------------

function showFinishScreen(){

    card.innerHTML = `

        <div class="questionCount">

            Fertig

        </div>

        <div class="question">

            Gut gemacht.<br><br>

            Du hast dir heute Zeit für dich genommen.

        </div>

        <button id="backHome">

            Zur Startseite

        </button>

    `;

    document.getElementById("backHome").addEventListener("click", () => {
        location.reload();
    });

}