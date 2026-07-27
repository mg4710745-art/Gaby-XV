function abrirInvitacion(){

    let musica = document.getElementById("musica");

    musica.play();

    document.getElementById("invitacion").style.display = "block";

    document.getElementById("invitacion").scrollIntoView({
        behavior: "smooth"
    });

}

letlet fotos=[
"carrusel/FOTO 1.jpeg",
"carrusel/FOTO 2.jpeg",
"carrusel/FOTO 3.jpeg",
"carrusel/FOTO 4.jpeg",
"carrusel/FOTO 5.jpeg",
"carrusel/FOTO 6.jpeg",
"carrusel/FOTO 7.jpeg",
"carrusel/FOTO 8.jpeg",
"carrusel/FOTO 9.jpeg",
"carrusel/FOTO 10.jpeg",
"carrusel/FOTO 11.jpeg",
"carrusel/FOTO 12.jpeg",
"carrusel/FOTO 13.jpeg",
"carrusel/FOTO 14.jpeg",
"carrusel/FOTO 15.jpeg"
]; numero = 0;

setInterval(function(){

    numero++;

    if(numero >= fotos.length){
        numero = 0;
    }

    document.getElementById("fotoCarrusel").src =
    "carrusel/foto " + numero + ".jpeg";

}, 3000);
