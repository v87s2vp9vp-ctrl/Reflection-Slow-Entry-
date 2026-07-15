// ===================================
// REFLEKT STORAGE
// ===================================

// Ziele laden
function loadGoals(){

    const savedGoals = JSON.parse(localStorage.getItem("goals"));

    if(!savedGoals) return;

    document.getElementById("goal1").value = savedGoals[0] || "";
    document.getElementById("goal2").value = savedGoals[1] || "";
    document.getElementById("goal3").value = savedGoals[2] || "";

}

// Ziele speichern
function saveGoals(){

    const goals = [

        document.getElementById("goal1").value,
        document.getElementById("goal2").value,
        document.getElementById("goal3").value

    ];

    localStorage.setItem("goals", JSON.stringify(goals));

}

// Beim Tippen automatisch speichern
document.getElementById("goal1").addEventListener("input", saveGoals);
document.getElementById("goal2").addEventListener("input", saveGoals);
document.getElementById("goal3").addEventListener("input", saveGoals);

// Beim Öffnen laden
loadGoals();