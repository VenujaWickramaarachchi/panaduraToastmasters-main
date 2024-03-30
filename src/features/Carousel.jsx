import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { FaQuoteRight } from 'react-icons/fa'

import hero1 from '../assets/hero1.png'
import hero2 from '../assets/hero2.png'
import hero3 from '../assets/hero3.png'
import hero4 from '../assets/hero4.png'
import hero5 from '../assets/hero5.png'
import hero6 from '../assets/hero6.png'
// import hero7 from '../assets/hero7.jpg'
import hero8 from '../assets/hero8.png'
import hero9 from '../assets/hero9.png'
import hero10 from '../assets/hero10.png'
import hero11 from '../assets/hero11.png'

const carouselImages = [
  hero1,
  hero2,
  hero3,
  hero4,
  hero5,
  hero6,
  hero8,
  hero9,
  hero10,
  hero11,
]

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
              className='person-img mix-blend-overlay object-fit'
            />
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
