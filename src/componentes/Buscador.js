import React, { Component } from 'react';
import '../main.css'

class Buscador extends Component {

    input = React.createRef();
    tipo = '';


    obtenerBusqueda = (e) => {
        e.preventDefault();

        // Capturamos el valor del nodo que enviamos
        if (document.querySelector('#flexRadioDefault1').checked) {
            this.tipo = document.querySelector('#flexRadioDefault1').value;
        } else {
            this.tipo = document.querySelector('#flexRadioDefault2').value;
        }

        // Tomamos el valor del input y lo enviamos al componente principal
        this.props.datosBusqueda(this.input.current.value, this.tipo);
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.obtenerBusqueda} >
                    <div className="row mt-5">
                        <div className="form-group col-md-12 text-center">
                            <input type="text" ref={this.input} name="input" className="form-control form-control-lg" placeholder="Escribe lo que desees buscar. Ejemplo: Fútbol" />
                        </div>
                        <div className="row justify-content-center mt-3">
                            <div className="form-check col-3">
                                <input value="foto" className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked="true" />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Fotos
                                </label>
                            </div>
                            <div className="form-check col-3">
                                <input value="video" className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Videos
                                </label>
                            </div>
                        </div>
                        <div className="form-group col-md-12 mt-3 text-center">
                            <input type="submit" className="btn btn-danger btn-block" value="Buscar" />
                        </div>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}

export default Buscador;