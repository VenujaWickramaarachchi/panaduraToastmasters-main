import { InfiniteMovingCards } from '.'
import SlickCarousel from './SlickCarousel'

const Exco = () => {
  return (
    <section>
      <div className='section-title'>
        <h1>
          Meet Our <span className='section-title-span'>exco</span>
        </h1>
      </div>
      <div className='h-[25rem]'>
        <InfiniteMovingCards />
        <SlickCarousel />
      </div>
    </section>
  )
}
export default Exco
