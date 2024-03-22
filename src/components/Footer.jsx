import LogoWhite from '../assets/LogoWhite.png'
import { SocialIcons } from '../features'
const Footer = () => {
  return (
    <footer className='footer footer-center p-10 bg-primary text-primary-content static bottom-0 left-0'>
      <aside>
        <div className='w-40 h-30 '>
          <img
            src={LogoWhite}
            alt=''
            className='h-full w-full inline-block fill-current'
          />
        </div>

        <p className='font-bold text-[1.25rem] text-accent'>
          Panadura Toastmasters Club <br />
          We Create Leaders
        </p>
      </aside>
      <nav>
        <SocialIcons />
      </nav>
      <p>Copyright © 2024 - All right reserved</p>
    </footer>
  )
}
export default Footer
