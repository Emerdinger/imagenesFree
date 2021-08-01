import React from 'react';

const Paginacion = (props) => {

    if (props.pagina === 1 ) {
        return (
            <div className="py-3 text-center">
                <button onClick={props.paginaSiguiente} type="button" className="btn btn-info ms-3">Siguiente</button>
            </div>
        );
    }

    if (props.pagina === props.totalPaginas) {
        return (
            <div className="py-3 text-center">
                <button onClick={props.paginaAnterior} type="button" className="btn btn-info ms-3">Anterior</button>
            </div>
        );
    }

    return (
        <div className="py-3 text-center">
            <button onClick={props.paginaAnterior} type="button" className="btn btn-info ms-3">Anterior</button>
            <button onClick={props.paginaSiguiente} type="button" className="btn btn-info ms-3">Siguiente</button>
        </div>
    );

}

export default Paginacion;