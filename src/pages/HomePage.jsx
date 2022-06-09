import React from 'react'

function HomePage() {
  const fetchDB = () => {
    console.log('fetching DB')
  }

  return (
    <div className='hero is-fullheight is-dark'>
      <header className="hero-header container">
        <h1 className="title mt-5">
          Videoteca App
        </h1>
      </header>
      <section className="hero-body">
        <div className="container is-flex is-justify-content-center">
          <div className="box has-text-centered">
            <p className="title has-text-dark py-5">
              Mi videoteca
            </p>
            <p className="subtitle has-text-dark pb-5">
              Presiona el botón para cargar los datos...
            </p>
          </div>
        </div>
      </section>
      <section className="hero-footer m-5">
        <div className="container is-flex is-justify-content-center m-5">
          <button onClick={fetchDB} className="button is-info is-size-4 mx-5">
            Obtener películas
          </button>
        </div>
      </section>
    </div>
  )
}

export default HomePage