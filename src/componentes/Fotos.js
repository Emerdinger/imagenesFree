import React, { Component } from 'react';
import Imagen from './Imagen'
import Video from './Video'
import Paginacion from './Paginacion';

class Fotos extends Component {

    mostrarImagenes = () => {

        const imagenes = this.props.imagenes;

        if (this.props.termino.length === 0) return null;

        if (imagenes.length === 0) {
            return (
                <div className="text-center mt-3">
                    <p>No se ha encontrado ningún resultado de {this.props.termino}</p>
                </div>
            );
        };
        if (imagenes[0].type === 'photo') {
            return (
                <React.Fragment>
                    <div>
                        <div className="text-center mt-3">
                            <h1>Búsqueda: {this.props.termino}</h1>
                            <p>Se han encontrado {this.props.total} fotos</p>
                            <p>Página {this.props.pagina} de {this.props.totalPaginas}</p>
                        </div>
                        <div className="col-12 p-5 row">
                            {
                                imagenes.map(imagen => (
                                    <Imagen
                                        key={imagen.id}
                                        imagen={imagen}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <Paginacion
                        paginaAnterior={this.props.paginaAnterior}
                        paginaSiguiente={this.props.paginaSiguiente}
                    />
                </React.Fragment>
            )
        }

        if (imagenes[0].type === 'film' || imagenes[0].type === 'animation') {
            return (
                <React.Fragment>
                    <div>
                        <div className="text-center mt-3">
                            <h1>Búsqueda: {this.props.termino}</h1>
                            <p>Se han encontrado {this.props.total} videos</p>
                            <p>Página {this.props.pagina} de {this.props.totalPaginas}</p>
                        </div>
                        <div className="col-12 p-5 row">
                            {
                                imagenes.map(imagen => (
                                    <Video
                                        key={imagen.id}
                                        imagen={imagen}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <Paginacion
                        paginaAnterior={this.props.paginaAnterior}
                        paginaSiguiente={this.props.paginaSiguiente}
                    />
                </React.Fragment>
            )
        }

    }

    render() {
        return (
            <React.Fragment>
                {this.mostrarImagenes()}
            </React.Fragment>
        );
    };
}

export default Fotos;