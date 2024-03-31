import { Link } from 'react-router-dom'

import { Carousel } from '../features'

import hero1 from '../assets/hero1.png'
import hero2 from '../assets/hero2.png'
import hero3 from '../assets/hero3.png'
import hero4 from '../assets/hero4.png'
import hero5 from '../assets/hero5.png'
import hero6 from '../assets/hero6.png'
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

const Hero = () => {
  return (
    <section className=' w-screen hero-container  '>
      <div className='hidden md:flex   '>
        <Carousel />
      </div>
      <div className='p-24 text-center  absolute top-[50] left-[50]   '>
        <h1 className='text-secondary text-6xl font-bold capitalize '>
          Welcome to Panadura Toastmasters Club
        </h1>
        <h2 className='text-accent text-3xl font-light mt-5 capitalize'>
          courage confidence commitment
        </h2>
      </div>

      <div className=' bg-gradient-to-t from-deepMaroon to-#f5f5f5 h-screen w-full relative grid place-items-center md:hidden bg-fixed'>
        <img
          src={hero1}
          alt=''
          className='w-full h-full object-cover absolute mix-blend-overlay '
        />
      </div>
    </section>
  )
}
export default Hero
