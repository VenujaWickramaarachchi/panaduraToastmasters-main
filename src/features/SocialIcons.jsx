import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const SocialIcons = () => {
  return (
    <div
      className='grid grid-flow-col gap-4 
        m-[-10px]'
    >
      <a
        href='https://www.facebook.com/panaduratoastmasters'
        target='blank'
        className='w-7 h-10 text-white cursor-pointer transition ease-in-out duration-900  hover:text-accent hover:scale-[1.125]    '
      >
        <FaFacebook className='w-full h-full' />
      </a>
      <a
        href='https://instagram.com/panadura_tm/'
        target='blank'
        className='w-7 h-10 text-white cursor-pointer transition ease-in-out duration-900  hover:text-accent hover:scale-[1.125] '
      >
        <FaInstagram className='w-full h-full' />
      </a>
      <a
        href=''
        className='w-7 h-10 text-white cursor-pointer transition ease-in-out duration-900  hover:text-accent hover:scale-[1.125]'
      >
        <FaLinkedin className='w-full h-full' />
      </a>
    </div>
  )
}
export default SocialIcons
