import React from 'react';

const Paginacion = (props) => {

    return (
        <div className="py-3 text-center">
            <button onClick={props.paginaAnterior} type="button" className="btn btn-info ms-3">Anterior</button>
            <button onClick={props.paginaSiguiente} type="button" className="btn btn-info ms-3">Siguiente</button>
        </div>
    );
}

export default Paginacion;