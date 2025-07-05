// Es una buena práctica usar 'const' para variables que no se reasignan.
const botonCrear = document.querySelector(".buttonCrear");
const botonGuia = document.querySelector(".buttonGuia");
const vistaPrevia = document.querySelector(".vista-previa");


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
const todasLasPlantillas = document.querySelectorAll(".fondo-plantilla");

// 2. Si se encontraron elementos (si estamos en page2.html)...
if (todasLasPlantillas.length > 0) {
    // 3. ...recorremos cada uno de ellos.
    todasLasPlantillas.forEach(plantilla => {
        // 4. A cada plantilla individual le añadimos un evento de clic.
        plantilla.addEventListener("click", function() {
            const vistaprevia = document.createElement("div");
            vistaprevia.classList.add("vistaprevia");
            const contenedor = document.getElementById("vista-previa");
            contenedor.appendChild(vistaprevia);
            vistaprevia.textContent = "hola";

            vistaPrevia.style.zIndex = "1000";
            vistaPrevia.style.display = "flex";
            vistaPrevia.style.justifyContent = "center";
            vistaPrevia.style.alignItems = "center"
            vistaPrevia.style.position = "fixed";
            vistaPrevia.style.top = "50%";
            vistaPrevia.style.left = "50%";
            vistaPrevia.style.transform = "translate(-50%, -50%)";
            vistaPrevia.style.backgroundColor = "rgb(83, 83, 83)";
            vistaPrevia.style.borderRadius = "5px";
            vistaPrevia.style.boxShadow = "10 10px 6px rgb(0, 0, 0)";
            vistaPrevia.style.width = "70%";
            vistaPrevia.style.height = "70%";
        });
    });
}