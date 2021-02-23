//Menu Hamburguesa
$('.menu-burger, .menu-items').on('click', function() {
  $('.menu-bg, .menu-items, .menu-burger').toggleClass('fs');
  $('.menu-burger').text() == "☰" ? $('.menu-burger').text('✕') : $('.menu-burger').text('☰');
});


//Formulario boton
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

//Formulario validación

const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");


const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  asunto: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
}