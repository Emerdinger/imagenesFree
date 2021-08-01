import React from 'react'

const Video = (props) => {
    const { duration, videos, comments, downloads, likes, views, tags, pageURL } = props.imagen;

    return (
        <div className="card-fotos col-12 col-md-6 mb-3">
            <div className="card">
                <video width="100%" height="250" controls>
                    <source src={videos.tiny.url} type="video/mp4" alt={tags} />
                </video>
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
                            <p className="card-text">Duración {duration}s</p>
                        </div>
                    </div>
                    <div className="text-center mt-3 mb-3">
                        <a href={pageURL} className="btn" target="_blank" rel="noreferrer">Ver video</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video;