function abrirInvitacion(){

    let musica = document.getElementById("musica");

    musica.play();

    document.getElementById("invitacion").style.display = "block";

    document.getElementById("invitacion").scrollIntoView({
        behavior: "smooth"
    });

}
