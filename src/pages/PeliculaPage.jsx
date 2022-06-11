import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function PeliculaPage() {
  /*
  useLocation:
  el hook useLocation de la librería react-router-dom
  devuelve un objeto (location) entre cuyas propiedades
  se encuentra el state, que puede ser utilizado para
  enviar datos arbitrarios a una ruta
  */
  const location = useLocation()
  const { data } = location.state
  const navigate = useNavigate()

  return (
    <div className="hero is-fullheight is-dark has-text-centered">
      <div className="container m-5 p-5">
        <h1 className="title box has-text-dark m-5">
          {data.nombre}
        </h1>
        <div className="container m-5">
        <div className="card">
          <div className="card-image">
            <figure className="image is-2by3">
              <img src={data.imagen} alt={`poster de la película ${data.nombre}`} />
            </figure>
          </div>
          <div className="card-header">
            <p className="card-header-title">
              <i className="material-icons-outlined is-size-5 pr-3">
                movie
              </i>
              {data.director}
            </p>
            <p className="card-header-title has-text-right">
              <i className="material-icons-outlined pr-3">
                calendar_month
              </i>
              {data.estreno}
            </p>

          </div>
        </div>
        <div className="card-content p-5 has-text-left">
          {data.sinopsis}
        </div>
        <div className="card-footer">
        <p className="">
              <i className="material-icons-outlined pt-2">
                theaters
              </i>
            {
              data.genero.map((genero) =>
                (<span className='px-3'>{genero}</span>)
              )
            }
            </p>
        </div>
        </div>
        <button onClick={() => navigate('/')} className="button is-white is-outlined my-5">
          Regresar
        </button>
      </div>
    </div>
  )
}

export default PeliculaPage