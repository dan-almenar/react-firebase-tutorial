import React from 'react'
import { useNavigate } from 'react-router-dom'

function PosterPelicula(props) {
    const { data } = props
    
    const navigate = useNavigate()

    const peliDescripcion = (e) => {
        console.log(e.target.name)
        navigate(`/pelicula/${data.nombre.replace(/\s/g, '_')}`, {state:{data: data}})
    }

  return (
    <div onClick={peliDescripcion} className='column is-one-quarter'>
        <figure className='image is-2by3'>
        <p>{data.nombre}</p>
        <img name={data.nombre} src={data.imagen} alt={`póster de la película ${data.nombre}`} />
        </figure>
    </div>
    )
}

export default PosterPelicula