const base_Url = "https://www.swapi.tech/api/";

export const GetPersonajes = async (dispatch) => {
  try {
    // Despachamos estado de carga
    dispatch({ type: "GET_PERSONAJES_LOADING" });

    const response = await fetch(`${base_Url}people`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // IMPORTANTE: La API devuelve los personajes en data.results
    if (!data?.results || !Array.isArray(data.results)) {
      throw new Error("Formato de datos inesperado");
    }

    dispatch({
      type: "GET_PERSONAJES_SUCCESS",
      payload: data.results, // Enviamos solo el array de resultados
    });
  } catch (error) {
    console.error("Error fetching personajes:", error);
    dispatch({
      type: "GET_PERSONAJES_ERROR",
      payload: error.message,
    });
  }
};
