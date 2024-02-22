import { valorCarta } from "./";

/**
 * Esta función acumula los puntos
 * @param {String} carta
 * @param {Number} turno
 * @param {Array<HTMLElement>} puntosJugadores
 * @param {Array<HTMLElement>} puntosHTML
 * @returns {Number}
 */
export const acumularPuntos = (carta, turno, puntosJugadores, puntosHTML) => {
  puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
  puntosHTML[turno].innerText = puntosJugadores[turno];
  return puntosJugadores[turno];
};
