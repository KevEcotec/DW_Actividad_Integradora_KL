
//=======================
//EVENTOS
//=======================

const titulo = document.getElementById("titulo-principal");
const infoExtra =document.getElementById("info-extra");

// Evento 1: cambiar texto al hacer click
titulo.addEventListener("click", () => {
   titulo.textContent = "¡Bienvenido a mi portafolio interactivo!";
});

// Evento 2: mostrar/ocultar info extra con mouseover
titulo.addEventListener("mouseover", () => {
   infoExtra.classList.remove("oculto");
});

titulo.addEventListener("mouseout", () => {
   infoExtra.classList.add("oculto");
});

//=======================
//MODO OSCURO + LOCALSTORAGE
//=======================

const botonModo = document.getElementById("btn-modo");

function activarModoOscuro() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
     localStorage..setItem("modo", "oscuro");
  } else {
     localStorage..setItem("modo", "claro");
  }
}

botonModo.addEventListener("click", activarModoOscuro);

// Recuperar modo guardado
window.AddEvenListener("DOMContentLoaded", () => {
  const modoGuardado = localStorage.getItem("modo");

  if (modoGuardado === "oscuro") {
    document.body.classList.add("dark");
  }
});

//=======================
//VALIDACIÓN DEL FORMULARIO
//=======================
                       
const form = document.getElementById("form-contacto");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const nombre = document.getElementById("correo").value.trim();
  const nombre = document.getElementById("mensaje").value.trim();

  if (nombre === "" || correo === "" || mensaje === ""){
     resultado.textContent = "Por favor completar todos los campos para antes de enviar la información.";
     resultado.style.color = "red";
  } else {
     resultado.textContent = "Formulario enviado correctamente";
     resultado.style.color = "green";
  }
});
