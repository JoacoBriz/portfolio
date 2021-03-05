$( document ).ready(function () {
  //Formulario botón Enviar
  $("#formContacto").submit(function () {
    let nombre = $("#nombre").value;
    let correo = $("#email").value;
    let asunto = $("#asunto").value;
    let mensaje = $("#mensaje").value;
    if (nombre == "" || correo == "" || asunto == "" || mensaje == "") {
        return false;
    } else {
      Swal.fire({
        icon: "success",
        html: `<p class="alertTexto">¡Listo! Mensaje enviado</p> <p class="alertTexto">Estaremos en contacto en poco tiempo :) </p>`,
        confirmButtonText: "Volver",
        timer: 5000,
        timerProgressBar: true,
        allowOutsideClick: true,
        customClass:{
          container: "alertButtonEnviar",
          confirmButton: "buttonVolver"
        }
      })
    }
  });


  //Formulario Validación
  $("input#nombre").keypress(function () {
    var regex = new RegExp("^[a-zA-Z ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key) || this.value.length === 25) {
      event.preventDefault();
      return false;
    }
  });
  $("#asunto").keypress(function () {
    asunto=$('#asunto').val();
    if (asunto.length<15){
      return true;
    }
    else {
      return false;
      
    }
  });
});
