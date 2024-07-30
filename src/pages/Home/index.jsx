import React, { useState, useEffect } from 'react'
import LoadingPage from '../../components/LoadingPage'

function Home () {
  const [loading, setLoading] = useState(true)
  const [loadedCount, setLoadedCount] = useState(0)
  const images = [
    'https://raw.githubusercontent.com/alexiisv/front-cow/main/src/assets/images/collar.webp',
    'https://raw.githubusercontent.com/alexiisv/front-cow/main/src/assets/layout/9.webp',
    'https://raw.githubusercontent.com/alexiisv/front-cow/main/src/assets/layout/3.webp',
    'https://raw.githubusercontent.com/alexiisv/front-cow/main/src/assets/layout/5.webp',
    'https://raw.githubusercontent.com/alexiisv/front-cow/main/src/assets/layout/7.webp',
    'https://raw.githubusercontent.com/alexiisv/front-cow/main/src/assets/layout/8.webp',
    'https://raw.githubusercontent.com/alexiisv/front-cow/main/src/assets/layout/2.webp',
    'https://raw.githubusercontent.com/alexiisv/front-cow/main/src/assets/layout/11.webp',
    'https://raw.githubusercontent.com/alexiisv/front-cow/main/src/assets/layout/6.webp',
    'https://raw.githubusercontent.com/alexiisv/front-cow/main/src/assets/layout/4.webp',
    'https://raw.githubusercontent.com/alexiisv/front-cow/main/src/assets/layout/10.webp'
  ]

  useEffect(() => {
    // Si todas las imágenes han cargado, quitar el loading spinner
    if (loadedCount === images.length) {
      setLoading(false)
    }
  }, [loadedCount])

  const handleImageLoad = () => {
    setLoadedCount(prevCount => prevCount + 1)
  }

  return (
    <div>
      {loading && <LoadingPage />}
      <div className={`content ${loadedCount < images.length ? 'hidden' : ''}`}>
        <div className='bg-white rounded-xl shadow p-4 border-slate-600/20 mb-4 flex flex-row gap-28'>
          <div>
            <h2 className='text-xl font-semibold mb-2'>Cows Udenar</h2>
            <p className='mb-4'>dispositivo electrónico para la detección del celo en bobinos, mide más de 10 variables fisiologicas como fisicas. Presenta gran capacidad de cobertura y un diseño robusto para funcionar de manera óptima bajo exposición constante al sol y al agua durante 24 horas, garantizando una monitorización precisa y continua para una gestión reproductiva eficiente del ganado bovino.</p>
          </div>
          <img
            className='rounded-lg max-w-sm'
            src='https://raw.githubusercontent.com/alexiisv/front-cow/main/src/assets/images/collar.webp'
            alt='Cows 0'
            onLoad={handleImageLoad}
            onError={handleImageLoad}
          />
        </div>

        <div className='columns-1 gap-5 lg:gap-8 sm:columns-3 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8'>
          {images.slice(1).map((src, index) => (
            <img
              key={index}
              className='rounded-lg'
              src={src}
              alt={`Cows ${index + 1}`}
              onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
