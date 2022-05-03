export const calculaPuntuacion = (movimiento, tiempoJuego) => {
    const segundos = (tiempoJuego / 1000).toFixed(0);
    switch (movimiento) {
      case 5:
        return (1000 / segundos).toFixed(0);
      case 6:
        return (800 / segundos).toFixed(0);

      case 7:
        return (500 / segundos).toFixed(0);

      case 8:
        return (300 / segundos).toFixed(0);
      case 9:
        return (100 / segundos).toFixed(0);
      default:
        return 0;
    }
  };

  export const calcularTiempo = (tiempos, ganador) => {
    const tiempoXJugadas = tiempos.filter((item) => item, "");
    const tiempo = tiempoXJugadas
      .filter((item) => (item.simbolo === ganador ? item : ""))
      .reduce((prev, curr) => prev + curr.tiempo, 0);
    return tiempo;
  };

  export const calcularGanador = (jugadas) => {
    const lineas = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lineas.length; i++) {
      const [a, b, c] = lineas[i];
      if (
        jugadas[a] &&
        jugadas[b] &&
        jugadas[c] &&
        jugadas[a].simbolo === jugadas[b].simbolo &&
        jugadas[a].simbolo === jugadas[c].simbolo
      ) {
        return jugadas[a].simbolo;
      }
    }
    return null;
  };
