form.addEventListener('submit', function(event) {
    event.preventDefault();

    let inputA = document.getElementById("first-input");
    let inputB = document.getElementById("second-input");

    const mensagem = "Mensagem enviada com sucesso!";
    const parseA = parseFloat(inputA.value);
    const parseB = parseFloat(inputB.value);

    if (parseB > parseA) {
        const successMessage = document.querySelector('.success-message');
        successMessage.innerHTML = mensagem;
        successMessage.style.display = "block";
        document.querySelector('.message-error').style.display = 'none';
    } else {
        const errorMessage = document.querySelector('.message-error');
        errorMessage.innerHTML = 'Mensagem não enviada';
        errorMessage.style.display = 'block';
        document.querySelector('.success-message').style.display = 'none';
    }
});
