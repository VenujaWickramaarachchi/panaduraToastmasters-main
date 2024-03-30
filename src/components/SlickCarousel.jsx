import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Slider from 'react-slick'
import { FaQuoteRight } from 'react-icons/fa'
import { excoData } from '../../excoData'
import { ExcoCard } from '../features'

const SlickCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  }

  return (
    <section className='slick-container overflow-hidden skeleton md:hidden '>
      <Slider {...settings}>
        {excoData.map((member) => {
          console.log('where is this')
          const { id } = member
          return <ExcoCard key={id} {...member} />
        })}
      </Slider>
    </section>
  )
}

export default SlickCarousel
