$(document).ready(function() {
  // SELECCION DE ELEMENTOS GUARDADOS EN VARIBALES
  var $inputName = $('#input-name');
  var $inputEmail = $('#input-email');
  var $inputPassword = $('#input-password');
  var $inpuChecked = $('input[type="checkbox"]');
  var $buttonSignUp = $('button[type="submit"]');

  // INCICIALIZAMOS LAS VALIDACIONES CON FALSE
  var validateEmail = false;
  var validatePassword = false;
  var validateChecked = false;
  // Ocultar spans
  $inputEmail.next().hide();
  $inputPassword.next().hide();
  // ........FUNCIONES....
  // FUNCIONES PARA ACTIVAR Y DESACTIVAR EL BUTTON
  function activeButton() {
    if (validateEmail && validatePassword && validateChecked) {
      $buttonSignUp.attr('disabled', false);
    }
  }
  function desactiveButton() {
    $buttonSignUp.attr('disabled', true);
  }
  // FUNCIÓN PARA VALIDAR EL E MAIL
  function validateEmailEvent() {
    // Establecemos una expresión regular para que el e-mail sea considerado válido( debe llevar @, el límite de letras a partir del '.', etc)
    var REGEXEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    if (REGEXEMAIL.test($(this).val())) {
      validateEmail = true;
      $inputEmail.next().hide();
    } else if ($(this).val() === '') {
      $inputEmail.next().hide();
    } else {
      $inputEmail.next().show();
    }
  }
  // FUNCIÓN PARA VALIDAR EL PASSWORD
  function validatePasswordEvent() {
    if ($(this).val().length >= 6) {
      validatePassword = true;
      $inputPassword.next().hide();
    } else if ($(this).val() === '') {
      $inputPassword.next().hide();
    } else {
      $inputPassword.next().show();
    }
  }
  // FUNCIÓN PARA VALIDAR EL CHECKED
  function validateCheckedEvent(event) {
    if (event.target.checked) {
      validateChecked = true;
      activeButton();
    } else {
      desactiveButton();
    }
  }
  // FUNCIÓN PARA GUARDAR EL EMAIL Y PASSWORD INGRESADOS Y RIDERECCIONAR A LA SIGUIENTE VISTA
  function saveEmailPassword(event) {
    event.preventDefault();
    localStorage.name = $inputName.val();
    localStorage.email = $inputEmail.val();// Guardamos el valo de email para el log in
    localStorage.password = $inputPassword.val();// Guardamos el valo de email para el log in
    window.location.href = 'finalview.html';
  };
  // ..........EVENTOS.............
  $inputEmail
    .on('keyup', validateEmailEvent);
  $inputPassword
    .on('keyup', validatePasswordEvent);
  $inpuChecked
    .on('click', validateCheckedEvent);
  $buttonSignUp
    .on('click', saveEmailPassword);
});
