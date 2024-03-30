const ExcoCard = ({ image, title, description, name }) => {
  return (
    <div className='card max-h-80 max-w-[43rem]  glass grid grid-cols-3 '>
      <figure className='min-w-36 h-80  col-span-1'>
        <img src={image} alt='car!' className=' w-full h-full object-cover' />
      </figure>
      <div className='card-body col-span-2'>
        <h1 className='text-xl w-[15rem] text-secondary '>{name}</h1>
        <h2 className='card-title'>{title}</h2>
        <p>{description}</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-outline  btn-primary skeleton text-[.75rem] p-1 mt-1'>
            Read More About Me
          </button>
        </div>
      </div>
    </div>
  )
}
export default ExcoCard
