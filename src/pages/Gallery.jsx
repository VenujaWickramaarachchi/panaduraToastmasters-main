import React from 'react'

const Gallery = () => {
  return (
    <main className='h-screen align-element py-20 bg-accent '>
      <div className='section-title'>
        <h1>
          Why
          <span className='section-title-span'>Panadura Toastmasters ?</span>
        </h1>
      </div>
      <div className='grid place-items-center min-w-[368px] bg-primary h-[400px]'>
        <iframe
          src='https://drive.google.com/file/d/1AokgDtgqQEXwJh_60ezMoCF2yldJm3x6/preview '
          width='368'
          height='314'
          allowFullScreen
          className='min-w-[390px] md:w-full md:h-full'
        ></iframe>
      </div>
    </main>
  )
}
export default Gallery
