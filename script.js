let form = document.getElementById("form");
let inputA = document.getElementById("first-input");
let inputB = document.getElementById("second-input");
let btn = document.getElementById("button");

form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (inputB.value > inputA.value) {
        alert("Formulário válido");
    } else {
        alert("Formulário inválido");
    }
});
