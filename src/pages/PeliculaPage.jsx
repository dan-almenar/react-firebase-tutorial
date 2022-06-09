import React from 'react'
import { useLocation } from 'react-router-dom'

function PeliculaPage() {
  /*
  Para extraer el movieId de la url,
  usaremos el hook useLocation de la librería
  react-router-dom.
  useLocation devuelve un objeto con la propiedad
  pathname, que contiene la url actual.
  El movieId es el último segmento de la url,
  */
  const location = useLocation()
  let movieId = location.pathname.split('/').pop()
  return (
    <div className="hero is-fullheight is-info has-text-centered">
    <div className="containerm-5">
      <h1 className="title box has-text-info m-5">
        Detalle de la película
      </h1>
      <p className="subtitle m-5">
        {movieId}
      </p>
    </div>
    </div>
  )
}

export default PeliculaPage