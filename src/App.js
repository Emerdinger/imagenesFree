import React, { Component } from "react";
import Buscador from './componentes/Buscador'
import Fotos from './componentes/Fotos'
import './App.css';


class App extends Component {

  state = {
    termino: '',
    imagenes: [],
    total: '',
    pagina: '',
    totalPaginas: '',
    tipo: ''
  }

  focusScrollMethod = () => {
    const scroll = document.querySelector(".jumbotron");
    scroll.scrollIntoView('smooth', 'end');
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
    if (this.state.tipo === 'foto') {
      const url = `https://pixabay.com/api/?key=22733076-0602da3a0161809ddc1004b90&q=${this.state.termino}&per_page=30&page=${this.state.pagina}`;
      // consultar los datos
      fetch(url).then(respuesta => respuesta.json()).then(result => {
        const pTotal = Math.trunc(result.total / 30);
        this.setState({ imagenes: result.hits, total: result.total, totalPaginas: pTotal })
      });
    } else {
      const url = `https://pixabay.com/api/videos/?key=22733076-0602da3a0161809ddc1004b90&q=${this.state.termino}&per_page=30&page=${this.state.pagina}`
      // consultar los datos
      fetch(url).then(respuesta => respuesta.json()).then(result => {
        const pTotal = Math.trunc(result.total / 30);
        this.setState({ imagenes: result.hits, total: result.total, totalPaginas: pTotal })
      });
    }

  }

  datoBusqueda = (termino, tipo) => {
    this.setState({
      termino,
      pagina: 1,
      tipo
    }, () => {
      this.consultaApi();
    })
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="text-center mt-5">Buscador de multimedia gratuito</h1>
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
            pagina={this.state.pagina}
            totalPaginas={this.state.totalPaginas}
          />
        </div>
      </div>
    );
  }
}

export default App;
