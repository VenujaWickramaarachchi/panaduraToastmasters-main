import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { FaQuoteRight } from 'react-icons/fa'

import hero1 from '../assets/hero1.jpg'
import hero2 from '../assets/hero2.png'
import hero3 from '../assets/hero3.jpg'
import hero4 from '../assets/hero4.jpg'
import hero5 from '../assets/hero5.jpg'
import hero6 from '../assets/hero6.jpg'
import hero7 from '../assets/hero7.jpg'
import hero8 from '../assets/hero8.jpg'

const carouselImages = [hero1, hero2, hero3, hero4, hero5, hero6, hero7, hero8]

const Carousel = () => {
  const [image, setImage] = useState(carouselImages)
  const [currentImage, setCurrentImage] = useState(0)
  const prevSlide = () => {
    setCurrentImage((oldImage) => {
      const result = (oldImage - 1 + image.length) % image.length
      return result
    })
  }
  const nextSlide = () => {
    setCurrentImage((oldImage) => {
      const result = (oldImage + 1) % image.length
      return result
    })
  }
  useEffect(() => {
    let sliderID = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => {
      clearInterval(sliderID)
    }
  }, [currentImage])
  return (
    <section className='slider-container'>
      {image.map((image, personIndex) => {
        return (
          <article
            className='slide bg-gradient-to-t from-deepMaroon to-#f5f5f5 h-screen w-full relative grid place-items-center  '
            style={{
              transform: `translateX(${100 * (personIndex - currentImage)}%)`,
              opacity: personIndex === currentImage ? 1 : 0,
              visibility: personIndex === currentImage ? 'visible' : 'hidden',
            }}
            key={image}
          >
            <img
              src={image}
              alt={name}
              className='person-img mix-blend-overlay'
            />
            <div className='p-24 text-center mt-30 absolute inset-0'>
              <h1 className='text-secondary text-6xl font-bold capitalize '>
                hello greeting
              </h1>
              <h2 className='text-accent text-3xl font-light mt-5'>
                hope this works
              </h2>
            </div>
          </article>
        )
      })}
      <button type='button' className='prev bg-primary' onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button type='button' className='next bg-primary' onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  )
}
export default Carousel
