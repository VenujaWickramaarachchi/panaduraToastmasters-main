import hasindu from '../assets/level1/HASINDU.png'
import mehansa from '../assets/level1/MEHANSA.png'
import parami from '../assets/level1/PARAMI.png'
import venuja from '../assets/level1/VENUJA.png'
import shehani from '../assets/level4/SHEHANI 1.png'

const MemberAchievements = () => {
  return (
    <main className='grid grid-rows-2 gap-10'>
      <div>
        <div className='section-title'>
          <h1>
            Level 01 <span className='section-title-span'>completion</span>
          </h1>
        </div>
        <div className='grid md:grid-cols-2 gap-6 lg:grid-cols-3'>
          <img src={hasindu} alt='hasindu' />
          <img src={mehansa} alt='mehansa' />
          <img src={parami} alt='parami' />
          <img src={venuja} alt='venuja' />
        </div>
      </div>
      <div>
        <div className='section-title py-10'>
          <h1>
            Level 04 & 05 <span className='section-title-span'>completion</span>
          </h1>
        </div>
        <div className='grid md:grid-cols-2 gap-6 lg:grid-cols-3'>
          <img src={shehani} alt='shehani' />
        </div>
      </div>
    </main>
  )
}
export default MemberAchievements
