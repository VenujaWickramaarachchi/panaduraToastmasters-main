import { Link } from 'react-router-dom'

import hero1 from '../assets/hero1.jpg'
import hero2 from '../assets/hero2.png'
import hero3 from '../assets/hero3.jpg'
import hero4 from '../assets/hero4.jpg'
import hero5 from '../assets/hero5.jpg'
import hero6 from '../assets/hero6.jpg'
import hero7 from '../assets/hero7.jpg'
import hero8 from '../assets/hero8.jpg'
import { Carousel } from '../features'

const carouselImages = [hero1, hero2, hero3, hero4, hero5, hero6, hero7, hero8]

const Hero = () => {
  return (
    <section className='not-align-elements'>
      <div className='hidden md:flex   '>
        <Carousel className='h-full' />
      </div>

      <div className=' bg-gradient-to-t from-deepMaroon to-#f5f5f5 h-screen w-full relative grid place-items-center md:hidden bg-fixed'>
        <img
          src={hero1}
          alt=''
          className='w-full h-full object-cover absolute mix-blend-overlay '
        />
        <div className='p-24 text-center mt-30'>
          <h1 className='text-secondary text-6xl font-bold capitalize '>
            hello greeting
          </h1>
          <h2 className='text-accent text-3xl font-light mt-5'>
            hope this works
          </h2>
        </div>
      </div>
    </section>
  )
}
export default Hero
