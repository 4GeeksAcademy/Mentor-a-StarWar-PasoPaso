import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";
import { GetPersonajes } from "../services/fetchs.js";
import { useNavigate } from "react-router-dom";



function Personajes() {
  const { store, dispatch } = useGlobalReducer();
  const { personajes, loading, error } = store;
  const navigate=useNavigate()

  useEffect(() => {
    GetPersonajes(dispatch);
  }, [dispatch]);


const handleNavigateDetalle=(uid)=>{
navigate(`/detallePersonaje/${uid}`)

}

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Personajes de Star Wars</h1>
      
      {/* Loading State */}
      {loading && (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
          <p className="mt-2">Cargando personajes...</p>
        </div>
      )}
      
      {/* Error State */}
      {error && (
        <div className="alert alert-danger text-center">
          Error: {error}
        </div>
      )}
      
      {/* Success State */}
      {!loading && !error && (
        <div className="row">
          {personajes.length > 0 ? (
            personajes.map((personaje,index) => (
              <div key={index +1} className="col-md-4 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h2 className="card-title">{personaje.name}</h2>
                    <p className="card-text">
                      <strong>UID:</strong> {index +1 }
                    </p>
                    {/* Add more character details if available */}
                  </div>
                  <div className="card-footer bg-transparent">
                    <button 
                      className="btn btn-outline-primary btn-sm"
                      onClick={() => {handleNavigateDetalle(index + 1 )}}
                    >
                      Ver detalles
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="alert alert-info text-center">
              No hay personajes disponibles.
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Personajes;