const boton = document.getElementById("abrirCarta");
const carta = document.getElementById("carta");

boton.addEventListener("click", () => {
    carta.classList.remove("oculto");
    boton.style.display = "none";

    carta.scrollIntoView({
        behavior: "smooth"
    });
});
