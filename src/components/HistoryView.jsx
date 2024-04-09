import React from 'react';

const HistoryView = ({ searchHistory, clearSearchHistory}) => {

    if (searchHistory.length == 0) {
        return null;
    }

    return (
        <div className="col col-md-3">
            <div className="card">
                <div className="card-body d-flex flex-column align-items-center overflow-auto">
                    <h5 className="card-title mb-4">Historial de Búsqueda: </h5>
                    <div className="w-100 text-center">
                        {searchHistory.map((term, index) => (
                            <button key={index} className="btn btn-outline-secondary w-100 mb-2">
                                {term}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <button className="btn btn-outline-danger w-100 mt-4" onClick={clearSearchHistory}>
                Limpiar Búsqueda
            </button>
        </div>
    );
};

export default HistoryView;

