import React from 'react'
import Loading from '../components/Loading'
import PosterPelicula from '../components/PosterPelicula'
import { useGetDocs, useOnSnapshot } from '../utils/useFirestore'

function HomePage() {
  const data = useGetDocs()
  // const {data, getData } = useGetDocs()
  // const snap = useOnSnapshot()
  console.log('data', data)
  // console.log('snap', snap)
  
  const fetchDB = () => {
    console.log('fetching DB')
    // getData()
  }

  return (
    <div className='hero is-fullheight is-dark'>
      <header className="hero-header container">
        <h1 className="title mt-5">
          Videoteca App
        </h1>
      </header>
      { data.data === null && data.error === null && data.loading === false &&
      (
      <section className={`hero-body`}>
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
      )}
      { data.loading === true &&
      (<div className="m-5 p-5">
        <Loading />
      </div>)
      }
      { data.data != null && 
      (
        <div className="container columns m-5 is-multiline is-justify-content-center">
          { data.data.map((pelicula, index) =>
          (
            <PosterPelicula key={index} data={pelicula} />
          )
          )}
        </div>
      )
      }
      <section className={`hero-footer ${data.data != null && 'hidden'}`} m-5>
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