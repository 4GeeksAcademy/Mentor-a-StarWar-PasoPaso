import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";
import { GetPersonajes } from "../services/fetchs.js";

function Personajes() {
  const { store, dispatch } = useGlobalReducer();
  const { personajes } = store;
  console.log("Personajes", personajes);

  useEffect(() => {
    GetPersonajes(dispatch);
  }, [dispatch]);

  return (
    <div>
      <h1>Personajes</h1>
      <div>
        {store.loading && <p>Cargando...</p>}
        {store.error && <p>Error: {store.error}</p>}
        {personajes.length > 0 ? (
          personajes.map((personaje) => (
            <div key={personaje.uid}>
              <h2>{personaje.name}</h2>
              <p>UID: {personaje.uid}</p>
            </div>
          ))
        ) : (
          <p>No hay personajes disponibles.</p>
        )}
      </div>
    </div>
  );
}

export default Personajes;
