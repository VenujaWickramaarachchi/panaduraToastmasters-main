const ExcoCard = ({ image, title, description, name }) => {
  return (
    <div className='card w-94 md:hidden glass grid grid-cols-3'>
      <figure className='w-full h-full  col-span-1'>
        <img src={image} alt='car!' className=' ' />
      </figure>
      <div className='card-body col-span-2'>
        <h1 className='text-3xl '>{name}</h1>
        <h2 className='card-title'>{title}</h2>
        <p>{description}</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary animate-bounce'>
            Read More About Me
          </button>
        </div>
      </div>
    </div>
  )
}
export default ExcoCard
