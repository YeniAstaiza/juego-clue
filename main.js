
function clickJugador(evento){
    var jugador = prompt("Nombre del jugador");
    evento.target.innerHTML = jugador;
}

var jugadores = document.getElementsByClassName("jugador");

for (var i = 0; i < jugadores.length; i ++) {
    jugadores[i]. onclick = clickJugador;
}
