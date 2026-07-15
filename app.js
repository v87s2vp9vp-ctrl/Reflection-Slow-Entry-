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