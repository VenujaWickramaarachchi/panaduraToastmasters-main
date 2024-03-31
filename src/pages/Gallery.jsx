import React from 'react'

const Gallery = () => {
  return (
    <main className='h-full align-element py-20 bg-accent '>
      <div className='section-title'>
        <h1>
          Why{' '}
          <span className='section-title-span'>Panadura Toastmasters ?</span>
        </h1>
      </div>
      <div className='grid place-items-center'>
        <iframe
          src='https://drive.google.com/file/d/1AokgDtgqQEXwJh_60ezMoCF2yldJm3x6/preview '
          width='560'
          height='314'
          allowFullScreen
        ></iframe>
      </div>
    </main>
  )
}
export default Gallery
