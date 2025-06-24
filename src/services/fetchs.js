const base_Url = "https://swapi.py4e.com/api/";

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

export const GetPlanetas=async(dispatch)=>{
  try {
    const response = await fetch(`${base_Url}planets`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    if (!data?.results || !Array.isArray(data.results)) {
      throw new Error("Formato de datos inesperado");
    }
    dispatch({
      type:'Get_Planets',
      payload:data.results
    })

    
  } catch (error) {
    
  }
}

export const getSpecificPersonaje= async (dispatch,id)=>{
  try {
    const response = await fetch(`${base_Url}${id}`)
    if(!response.ok){
throw new Error("No ha sido posible cargar los datos");

    }
    
  } catch (error) {
    console.log("Error al cargar el personaje:", error)
  }
}