$(document).ready(function() {
  // SELECCION DE ELEMENTOS GUARDADOS EN VARIBALES
  var $inputCode = $('input[type="number"]');
  var $buttonVerify = $('button[type="submit"]');

  $inputCode.focus();
  // ....EVENTOS.....
  // EVENTO KEYUP: Verificar la coincidencia del codigo generado en la vista signUp
  $inputCode.on('keyup', function() {
    if (localStorage.code === $(this).val()) {
      $buttonVerify.attr('disabled', false);
    } else {
      $buttonVerify.attr('disabled', true);
    }
  });
  // EVENTO CLICK: Redirecciona a la vista register.html para llenar el formulario de registro
  $buttonVerify.on('click', function(event) {
    event.preventDefault();
    window.location.href = 'register.html';
  });
});
