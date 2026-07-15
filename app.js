// ----------------------------
// Reflekt Foundation
// ----------------------------

let currentQuestion = 0;
let answers = [];

const card = document.getElementById("card");
const startButton = document.getElementById("startButton");

startButton.addEventListener("click", () => {

showQuestion();

});
function showQuestion(){

const question = questions[currentQuestion];

card.innerHTML = `

<div class="questionCount">

${currentQuestion+1} von ${questions.length} Fragen

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

<textarea
placeholder="(freiwillig)">
</textarea>

<br><br>

<button
class="nextButton"
disabled>

Weiter →

</button>
...
`;

const yesButton = document.querySelector(".yes");
const noButton = document.querySelector(".no");
const nextButton = document.querySelector(".nextButton");

`;

const yesButton = document.querySelector(".yes");
const noButton = document.querySelector(".no");
const nextButton = document.querySelector(".nextButton");

yesButton.onclick = function(){

    answers[currentQuestion] = true;

    yesButton.classList.add("selected");
    yesButton.classList.add("yes");

    noButton.classList.remove("selected");
    noButton.classList.remove("no");

    nextButton.disabled = false;

}

noButton.onclick = function(){

    answers[currentQuestion] = false;

    noButton.classList.add("selected");
    noButton.classList.add("no");

    yesButton.classList.remove("selected");
    yesButton.classList.remove("yes");

    nextButton.disabled = false;

}

nextButton.onclick = function(){

    currentQuestion++;

    if(currentQuestion < questions.length){

        showQuestion();

    }else{

        card.innerHTML = `

<div class="questionCount">

Fertig

</div>

<div class="question">

Gut gemacht.

<br><br>

Du hast dir heute Zeit für dich genommen.

</div>

<button onclick="location.reload()">

Zur Startseite

</button>

`;

    }

}

}

}   ← Ende von showQuestion()
`;

