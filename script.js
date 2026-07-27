function abrirInvitacion(){

    let musica = document.getElementById("musica");

    musica.play();

    document.getElementById("invitacion").style.display = "block";

    document.getElementById("invitacion").scrollIntoView({
        behavior: "smooth"
    });

}

letlet fotos=[
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
]; numero = 0;

setInterval(function(){

    numero++;

    if(numero >= fotos.length){
        numero = 0;
    }

    document.getElementById("fotoCarrusel").src =
    "carrusel/foto " + numero + ".jpeg";

}, 3000);
