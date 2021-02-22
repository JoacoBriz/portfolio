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

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "nombre":
    if(expresiones.nombre.test(e.target.value)){
      
    } else {
      document.getElementById("grupo__nombre").classList.add("formularioGrupoIncorrecto:focus");
      console.log("error");
    }
    break;
    case "email":
      if(expresiones.email.test(e.target.value)){
      
      } else {
        document.getElementById("grupo__nombre").classList.add("formularioGrupoIncorrecto:focus");
        console.log("error");
      }

    break;
    case "asunto":
      if(expresiones.asunto.test(e.target.value)){
      console.log("bien")
      } else {
        document.getElementById("grupo__nombre").classList.add("formularioGrupoIncorrecto:focus");
        console.log("error");
      }

    break;
    case "mensaje":
      if(expresiones.mensaje.test(e.target.value)){
      
      } else {
        document.getElementById("grupo__nombre").classList.add("formularioGrupoIncorrecto:focus");
        console.log("error");
      }

    break;
  }
}

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
})