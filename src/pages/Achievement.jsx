import { Contests, Hero, MemberCompletion } from '../components'
import InfiniteMovingCards from '../components/InfiniteMovingCards'
import { ExcoCard } from '../features'

const Achievement = () => {
  return (
    <section className='w-[75vw]  grid place-items-center m-auto p-8'>
      <div role='tablist' className='tabs tabs-bordered '>
        <input
          type='radio'
          name='my_tabs_1'
          role='tab'
          className='tab  text-xl  hover:text-secondary transition-all'
          aria-label='Club Achievements'
        />
        <div role='tabpanel' className='tab-content p-10'></div>

        <input
          type='radio'
          name='my_tabs_1'
          role='tab'
          className='tab  text-xl hover:text-secondary transition-all'
          aria-label='Member Achievements'
          checked
        />
        <div role='tabpanel' className='tab-content py-20'>
          <MemberCompletion />
        </div>

        <input
          type='radio'
          name='my_tabs_1'
          role='tab'
          className='tab text-xl  hover:text-secondary transition-all'
          aria-label='Contests'
        />
        <div role='tabpanel' className='tab-content p-10'>
          <Contests />
        </div>
      </div>
    </section>
  )
}
export default Achievement
