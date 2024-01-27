let form = document.getElementById("form");
let inputA = document.getElementById("first-input");
let inputB = document.getElementById("second-input");
let btn = document.getElementById("button");

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const mensagem = document.createElement("p")

    if (inputB.value > inputA.value) {
        mensagem.innerHTML = "Formulário válido"
        document.getElementById("form").appendChild(mensagem)
    } else {
        mensagem.innerHTML = "Formulário inválido"
        document.getElementById("form").appendChild(mensagem)
    }
});
