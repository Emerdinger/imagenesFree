import React, { Component } from "react";
import Buscador from './componentes/Buscador'
import Fotos from './componentes/Fotos'
import './App.css';


class App extends Component {

  state = {
    termino: '',
    imagenes: [],
    total: '',
    pagina: ''
  }

  focusScrollMethod = function getFocus() {
    document.getElementById("busqueda").focus({ preventScroll: false });
  }

  paginaAnterior = () => {
    // leer el state de la pagina actual
    let pagina = this.state.pagina;

    // Si la pagina es 1 no ir a atrás
    if (pagina === 1) return null;

    // sumar 1
    pagina--;

    // agregar el cambio al state
    this.setState({
      pagina
    }, () => {
      this.consultaApi();
    })

    this.focusScrollMethod();

  }

  paginaSiguiente = () => {
    // leer el state de la pagina actual
    let pagina = this.state.pagina;

    // sumar 1
    pagina++;

    // agregar el cambio al state
    this.setState({
      pagina
    }, () => {
      this.consultaApi();
    })

    this.focusScrollMethod();

  }

  consultaApi = () => {
    const url = `https://pixabay.com/api/?key=22733076-0602da3a0161809ddc1004b90&q=${this.state.termino}&per_page=30&page=${this.state.pagina}`;

    // consultar los datos
    fetch(url).then(respuesta => respuesta.json()).then(result => this.setState({ imagenes: result.hits, total: result.total }));
  }

  datoBusqueda = (termino) => {
    this.setState({
      termino,
      pagina: 1
    }, () => {
      this.consultaApi();
    })
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="text-center mt-5">Buscador de imágenes gratuitas</h1>
          <button id="busqueda" type="button" style={{opacity: 0}}></button>
          <Buscador
            datosBusqueda={this.datoBusqueda}
          />
        </div>
        <div>
          <Fotos
            imagenes={this.state.imagenes}
            termino={this.state.termino}
            total={this.state.total}
            paginaAnterior={this.paginaAnterior}
            paginaSiguiente={this.paginaSiguiente}
          />
        </div>
      </div>
    );
  }
}

export default App;
