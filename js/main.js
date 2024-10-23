var acc = document.getElementsByClassName("acordion__pregunta");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    // Cierra todos los paneles antes de abrir el seleccionado
    for (var j = 0; j < acc.length; j++) {
      var panel = acc[j].nextElementSibling;
      // Solo cerrar si el panel está abierto y no es el actual
      if (panel.style.maxHeight && acc[j] !== this) {
        acc[j].classList.remove("active");
        panel.style.maxHeight = null;
      }
    }

    // Alterna el estado del panel seleccionado
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// Muestra el botón cuando el usuario se desplaza hacia abajo
window.onscroll = function () {
  mostrarBoton();
};

function mostrarBoton() {
  const btn = document.getElementById("btnArriba");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
}

document.getElementById("btnArriba").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
