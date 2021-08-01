import React, { Component } from 'react';

class Buscador extends Component {
    
    input = React.createRef();

    obtenerBusqueda = (e) =>{
        e.preventDefault();

        // Tomamos el valor del input y lo enviamos al componente principal
        this.props.datosBusqueda(this.input.current.value); 
    }

    render() {
        return (
            <form onSubmit={this.obtenerBusqueda} className="text-center">
                <div className="row mt-5 text-center">
                    <div className="form-group col-md-12">
                        <input type="text" ref={this.input} name="input" className="form-control form-control-lg" placeholder="Escribe lo que desees buscar. Ejemplo: Fútbol"/>
                    </div>
                    <div className="form-group col-md-12 mt-5">
                        <input type="submit" className="btn btn-danger btn-block" value="Buscar" />
                    </div>
                </div>
            </form>  
        );
    }
}

export default Buscador;