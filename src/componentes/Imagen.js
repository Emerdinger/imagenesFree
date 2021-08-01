import React from 'react';

const Imagen = (props) => {

    const { largeImageURL,  imageSize, comments, downloads, likes, views, tags } = props.imagen;

    return (
        <div className="card-fotos col-12 col-sm-6 col-md-4 mb-3">
            <div className="card">
                <img src={largeImageURL} alt={tags} className="card-img-top" />
                <div className="card-body">
                    <div className="row">
                        <div className="col-12 text-center">
                            <p style={{ color: '#000', fontWeight: 'bold' }}>Información general</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p className="card-text">{likes} me gusta</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p className="card-text">{views} vistas</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p className="card-text">{comments} comentarios</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p className="card-text">{downloads} descargas</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p className="card-text">Peso {imageSize} kb</p>
                        </div>
                    </div>
                    <div className="text-center mt-3 mb-3">
                        <a href={largeImageURL} className="btn" target="_blank" rel="noreferrer">Ver imagen</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Imagen;