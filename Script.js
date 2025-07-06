// Es una buena práctica usar 'const' para variables que no se reasignan.
const botonCrear = document.querySelector(".buttonCrear");
const botonGuia = document.querySelector(".buttonGuia");
const vistaPrevia = document.querySelector(".vista-previa");
const botonplantilla1 = document.querySelector(".Plantilla1");
const botonplantilla2 = document.querySelector(".Plantilla2");



// --- Código para index.html ---
// Comprobamos si el elemento existe en la página actual antes de añadir el evento.
// Esto evita el error "Cannot read properties of null".
if (botonCrear) {
    botonCrear.addEventListener("click", function() {
        window.location.href = "page2.html";
    });
}

if (botonGuia) {
    botonGuia.addEventListener("click", function() {
        window.location.href = "#PaginaGuia";
    });
}

// --- Código para page2.html ---

// 1. Seleccionamos TODOS los elementos que tengan la clase .fondo-plantilla
const todasLasPlantillas = document.querySelectorAll(".elegirPlantilla");

// `querySelectorAll` devuelve una NodeList. Debemos iterar sobre ella
// para añadir el evento a CADA elemento.
if (todasLasPlantillas.length > 0) {
    todasLasPlantillas.forEach(plantilla => {
        plantilla.addEventListener("click", function() {
            window.location.href = "CardSite.html";
        });
    });
}