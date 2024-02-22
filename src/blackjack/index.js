import _ from "underscore";
// import { crearDeck as crearNuevoDeck } from "./usecases/crear-deck";
// import crearDeck, { miNombre } from "./usecases/crear-deck";
import {
  crearDeck,
  crearCarta,
  pedirCarta,
  turnoComputadora,
  acumularPuntos,
} from "./usecases";

let deck = [];
const tipos = ["C", "D", "H", "S"],
  especiales = ["A", "J", "Q", "K"];

let puntosJugadores = [];

const btnPedir = document.querySelector("#btnPedir"),
  btnDetener = document.querySelector("#btnDetener"),
  btnNuevo = document.querySelector("#btnNuevo");

const divCartasJugador = document.querySelectorAll(".divCartas"),
  puntosHTML = document.querySelectorAll("small");

// Esta función inicializa el juego
const inicializarJuego = (numJugadores = 2) => {
  deck = crearDeck(tipos, especiales);

  puntosJugadores = [];
  for (let i = 0; i < numJugadores; i++) {
    puntosJugadores.push(0);
  }

  puntosHTML.forEach((elem) => (elem.innerText = 0));
  divCartasJugador.forEach((elem) => (elem.innerHTML = ""));

  btnDetener.disabled = false;
  btnPedir.disabled = false;
};

btnPedir.addEventListener("click", () => {
  const carta = pedirCarta(deck);
  const puntosJugador = acumularPuntos(carta, 0, puntosJugadores, puntosHTML);

  crearCarta(carta, 0, divCartasJugador);

  if (puntosJugador > 21) {
    console.warn("Lo siento mucho, perdiste");
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador, puntosJugadores, puntosHTML, divCartasJugador, deck);
  } else if (puntosJugador === 21) {
    console.warn("21, genial!");
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador, puntosJugadores, puntosHTML, divCartasJugador, deck);
  }
});

btnDetener.addEventListener("click", () => {
  btnPedir.disabled = true;
  btnDetener.disabled = true;

  turnoComputadora(puntosJugadores[0], puntosJugadores, puntosHTML, divCartasJugador, deck);
});

btnNuevo.addEventListener("click", () => {
  inicializarJuego();
});
