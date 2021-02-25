//Formulario botón Enviar
$( document ).ready(function () {
  $(".buttonEnviar").click(function () {
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
  })
})