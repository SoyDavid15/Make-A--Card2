var BotonCrearCarta = document.querySelector(".btn-personalizado");
var Titulo = document.querySelector("h1 span");

// Obtener la fuente original correctamente desde el CSS
var fuenteOriginal = window.getComputedStyle(Titulo).fontFamily;

BotonCrearCarta.addEventListener("click", function() {
    window.location.href = "CardSite.html";
});

function alternarFuente() {
    // Si la fuente actual es la original, cambia a "Pixelify Sans"
    if (Titulo.style.fontFamily === fuenteOriginal || Titulo.style.fontFamily === '') {
        Titulo.style.fontFamily = "Pixelify Sans";
    } else {
        // Si la fuente actual es "Pixelify Sans", cambia a la fuente original
        Titulo.style.fontFamily = fuenteOriginal;
    }
}

// Alternar la fuente cada 1 segundo
setInterval(alternarFuente, 1000);
