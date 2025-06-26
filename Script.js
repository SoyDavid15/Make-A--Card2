var Sobre = document.querySelector(".Sobre");
var TextArea = Sobre.querySelector("#description");

var Boton = document.querySelector(".Enviar");
Boton.addEventListener("click", function() {
    TextArea.value = "Te amo <3\nGracias por todo lo que haces por mí.\nEres la mejor persona del mundo.\nTe amo mucho, mucho, mucho.\nGracias por aguantarme tanto\nEres la persona más increíble que he conocido.\nTe amo con todo mi corazón.\nSiempre estaré aquí para ti.\nTe amo, te amo, te amo.\nEres mi todo.";
    alert("Vuelve a ver la carta")
});