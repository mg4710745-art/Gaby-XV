function abrirInvitacion() {
    alert("El botón funciona");
}
const fechaXV = new Date("2026-11-15T18:00:00");

setInterval(function(){

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
