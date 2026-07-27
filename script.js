function abrirInvitacion(){

    let musica = document.getElementById("musica");

    musica.play();

    document.getElementById("invitacion").style.display = "block";

    document.getElementById("invitacion").scrollIntoView({
        behavior: "smooth"
    });

}

let numero = 1;

setInterval(function(){

    numero++;

    if(numero > 15){
        numero = 1;
    }

    document.getElementById("fotoCarrusel").src =
    "carrusel/FOTO " + numero + ".jpeg";

}, 3000);
