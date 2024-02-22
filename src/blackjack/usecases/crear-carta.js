/**
 * Esta función crea una carta
 * @param {String} carta
 * @param {Number} turno
 * @param {Array<HTMLElement>} divCartasJugador
 */
export const crearCarta = (carta, turno, divCartasJugador) => {
  if (!carta) throw new Error("Carta es un argumento obligatorio");

  const imgCarta = document.createElement("img");
  imgCarta.src = `assets/cartas/${carta}.png`;
  imgCarta.classList.add("carta");
  divCartasJugador[turno].append(imgCarta);
};
