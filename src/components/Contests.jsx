import area from '../assets/humorous-evaluation/area/Untitled-1.png'
import evaluation from '../assets/humorous-evaluation/club contest/evaluation.png'
import humorous from '../assets/humorous-evaluation/club contest/humorous.png'
import division from '../assets/humorous-evaluation/divison/division.png'
const MemberCompletion = () => {
  return (
    <main className='grid grid-rows-2 gap-10 py-10'>
      <div>
        <div className='section-title'>
          <h1>
            Humorous & Evaluation
            <span className='section-title-span'> club contest</span>
          </h1>
        </div>
        <div className='grid md:grid-cols-2 gap-6 lg:grid-cols-3'>
          <img src={evaluation} alt='evaluation' />
          <img src={humorous} alt='humorous' />
        </div>
      </div>
      <div>
        <div className='section-title py-5'>
          <h1>
            Humorous & Evaluation
            <span className='section-title-span'> Area contest</span>
          </h1>
        </div>
        <div className='grid md:grid-cols-2 gap-6 lg:grid-cols-3'>
          <img src={area} alt='area' />
        </div>
      </div>
      <div>
        <div className='section-title py-5'>
          <h1>
            Humorous & Evaluation
            <span className='section-title-span'> Division contest</span>
          </h1>
        </div>
        <div className='grid md:grid-cols-2 gap-6 lg:grid-cols-3'>
          <img src={division} alt='division' />
        </div>
      </div>
    </main>
  )
}
export default MemberCompletion
