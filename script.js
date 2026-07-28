function abrirInvitacion(){

    let musica = document.getElementById("musica");

    if(musica){
        musica.play();
    }

    const invitacion = document.getElementById("invitacion");

    invitacion.classList.remove("oculto");

    invitacion.classList.add("mostrar");

    invitacion.scrollIntoView({
        behavior:"smooth"
    });

}

// ======================
// CARRUSEL
// ======================

let fotos = [
    "carrusel/foto1.jpeg",
    "carrusel/foto2.jpeg",
    "carrusel/foto3.jpeg",
    "carrusel/foto4.jpeg",
    "carrusel/foto5.jpeg",
    "carrusel/foto6.jpeg",
    "carrusel/foto7.jpeg",
    "carrusel/foto8.jpeg",
    "carrusel/foto9.jpeg",
    "carrusel/foto10.jpeg",
    "carrusel/foto11.jpeg",
    "carrusel/foto12.jpeg",
    "carrusel/foto13.jpeg",
    "carrusel/foto14.jpeg",
    "carrusel/foto15.jpeg"
];

let numero = 0;

function mostrarFoto() {
    document.getElementById("fotoCarrusel").src = fotos[numero];
}

function siguienteFoto() {

    numero++;

    if (numero >= fotos.length) {
        numero = 0;
    }

    mostrarFoto();
}

function anteriorFoto() {

    numero--;

    if (numero < 0) {
        numero = fotos.length - 1;
    }

    mostrarFoto();
}

setInterval(siguienteFoto, 3000);

// ======================
// CUENTA REGRESIVA
// ======================

const fechaXV = new Date("2026-11-15T18:00:00");

setInterval(function () {

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

}, 1000);

// ======================
// ANIMACIONES
// ======================

const elementos = document.querySelectorAll(".animar");

function mostrarElementos() {

    elementos.forEach(elemento => {

        const posicion = elemento.getBoundingClientRect().top;

        if (posicion < window.innerHeight - 100) {
            elemento.classList.add("visible");
        }

    });

}

window.addEventListener("scroll", mostrarElementos);

mostrarElementos();
// ======================
// FORMULARIO
// ======================

const urlScript = "https://script.google.com/macros/s/AKfycbyT0DGN3OMxZUIisdR6F6M7GSv-O4NsloH_o2AJxEv9E5qIMDJxQtJIltn9EvRaxrp5GA/exec";

document.getElementById("formulario").addEventListener("submit", async function(e){

    e.preventDefault();

    const datos = {

        nombre: document.getElementById("nombre").value,

        asistencia: document.getElementById("asistencia").value,

        personas: document.getElementById("personas").value,

        mensaje: document.getElementById("mensaje").value

    };

    try{

        await fetch(urlScript,{

            method:"POST",

            body:JSON.stringify(datos)

        });

        document.getElementById("respuesta").innerHTML =
        "✅ ¡Gracias! Tu asistencia ha sido registrada.";

        document.getElementById("formulario").reset();

    }catch(error){

        document.getElementById("respuesta").innerHTML =
        "❌ Ocurrió un error. Inténtalo nuevamente.";

    }

});
