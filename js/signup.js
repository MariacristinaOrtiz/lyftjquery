$(document).ready(function() {
  // SELECCION DE ELEMENTOS GUARDADOS EN VARIBALES
  var $inputPhone = $('#input-phone');
  var $buttonNext = $('#next-button');
  var $listCountry = $('.img-li');
  // ...EVENTOS...
  // Evento click para seleccionar el pais y obtener el código postal
  $listCountry.each(function(i, val) {
    $listCountry.eq(i).on('click', function() {
      var code = parseInt($listCountry.eq(i).data('number'));
      $inputPhone.val(code);
      $inputPhone.focus();
    });
  });
  // Evento keyup para activar el boton 'Next' cuando se cumpla ca condición
  $inputPhone.on('input', function() {
    if ($(this).val().length >= 10) {
      $buttonNext.attr('disabled', false);
    } else {
      $buttonNext.attr('disabled', true);
    }
  });
  // Evento click al button activado para direccionar a la vista verifyphone
  $buttonNext.on('click', function() {
    alert('your code is LB-' + '345' + '');
    localStorage.code = '345';
    localStorage.phone = $inputPhone.val();
    window.location.href = 'verifyphone.html';
  });
});
