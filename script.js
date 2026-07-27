function abrirInvitacion() {
    alert("El botón funciona");
}
const fechaXV = new Date("2026-11-15T18:00:00");

setInterval(function(){

    numero++;

    if(numero >= fotos.length){
        numero = 0;
    }

    document.getElementById("fotoCarrusel").src = fotos[numero];

},3000);

    const ahora = new Date();

    const diferencia = fechaXV - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));

    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;

},1000);
const elementos = document.querySelectorAll(".animar");

function mostrarElementos() {

    elementos.forEach(elemento => {

        const posicion = elemento.getBoundingClientRect().top;

        const pantalla = window.innerHeight;

        if (posicion < pantalla - 100) {
            elemento.classList.add("visible");
        }

    });

}

window.addEventListener("scroll", mostrarElementos);

mostrarElementos();
