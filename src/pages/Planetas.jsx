import React from 'react'
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";
import { GetPlanetas } from '../services/fetchs.js';

function Planetas() {
    const { store, dispatch } = useGlobalReducer();
    const { planetas } = store;

    useEffect(() => {
        GetPlanetas(dispatch);
    }, [dispatch]);

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Planetas de Star Wars</h1>
            
            {planetas.length > 0 ? (
                <div className="row">
                    {planetas.map((planeta) => (
                        <div key={planeta.uid} className="col-md-4 mb-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h2 className="card-title">{planeta.name}</h2>
                                    <p className="card-text">
                                        <strong>UID:</strong> {planeta.uid}
                                    </p>
                                </div>
                                <div className="card-footer bg-transparent">
                                    <button 
                                        className="btn btn-outline-primary btn-sm"
                                        onClick={() => {/* Add click handler if needed */}}
                                    >
                                        Más detalles
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="alert alert-info text-center">
                    No hay planetas disponibles.
                </div>
            )}
        </div>
    );
}

export default Planetas;