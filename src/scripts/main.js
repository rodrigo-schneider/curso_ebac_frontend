document.addEventListener('DOMContentLoaded', function() {
    this.documentElement.getElementById('form-sorteador').addEventListener('submit', function() {
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;
        alert(numeroAleatorio);
    })
})