var formulario = document.querySelector('form');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var rol = document.getElementById('rol').value;

    alert('¡Gracias, ' + nombre + '!\n\nTu inscripción como "' + rol + '" ha sido registrada.\nTe enviaremos la confirmación a: ' + email);
});