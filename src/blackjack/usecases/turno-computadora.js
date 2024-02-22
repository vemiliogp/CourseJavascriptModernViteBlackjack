import { pedirCarta, crearCarta, acumularPuntos, determinarGanador } from "./";

/**
 * Turno de la computadora
 * @param {Number} puntosMinimos Puntos minimo que la computadora necesita para ganar
 * @param {Array<Number>} puntosJugadores Puntos de los jugadores
 * @param {Array<HTMLElement>} puntosHTML Puntos de los jugadores en HTML
 * @param {Array<HTMLElement>} divCartasJugador Cartas de los jugadores
 * @param {Array<String>} deck
 */
export const turnoComputadora = (puntosMinimos, puntosJugadores, puntosHTML, divCartasJugador, deck = []) => {
  if (!puntosMinimos) throw new Error("Puntos mínimos son necesarios");
  if (!puntosJugadores) throw new Error("Puntos jugadores son necesarios");

  let puntosComputadora = 0;

  do {
    const carta = pedirCarta(deck);
    puntosComputadora = acumularPuntos(
      carta,
      puntosJugadores.length - 1,
      puntosJugadores,
      puntosHTML
    );
    crearCarta(carta, puntosJugadores.length - 1, divCartasJugador);
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  determinarGanador(puntosJugadores);
};
