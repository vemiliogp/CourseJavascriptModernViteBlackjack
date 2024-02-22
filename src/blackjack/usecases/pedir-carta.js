/**
 * Esta función me permite tomar una carta
 * @param {Array<string>} deck Es un arreglo de string
 * @returns {String} Retorna la carta del deck
 */
export const pedirCarta = (deck) => {
  if (!deck || deck.length === 0) {
    throw "No hay cartas en el deck";
  }

  return deck.pop();
};
