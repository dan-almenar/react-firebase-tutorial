import React from 'react'
import { useNavigate } from 'react-router-dom'

function ErrorPage() {
  const navigate = useNavigate()

  setTimeout(() => {
    navigate('/')
  }, 5000)
  return (
    <div className='hero is-fullheight is-danger'>
      <div className="hero-body">
        <p className="title is-size-1 mx-5">
          Error
        </p>
      </div>
      <div className="hero-body">
        <p className="subtitle is-size-3 mx-5">
          Redireccionando a Inicio...
        </p>
      </div>
    </div>
  )
}

export default ErrorPage