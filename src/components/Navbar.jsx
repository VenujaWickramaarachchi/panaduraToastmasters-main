import { FaBarsStaggered } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import NavLinks from './NavLinks'
import { SocialIcons } from '../features'

import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='bg-secondary shadow-sm shadow-primary transition duration-600 ease-in-out hover:shadow-md hover:shadow-primary/50 '>
      <div className='navbar align-element  '>
        <div className='navbar-start '>
          {/* TITLE */}
          <NavLink to='/' className='hidden md:flex  text-3xl items-center '>
            <img src={logo} alt='logo' className='w-[5rem] ' />
          </NavLink>
          {/* DROPDOWN */}
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost md:hidden'>
              <FaBarsStaggered className='h-6 w-6 ' />
            </label>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52'
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className='navbar-center hidden md:flex'>
          <ul className='menu menu-horizontal'>
            <NavLinks />
          </ul>
        </div>
        <div className='navbar-end '>
          <SocialIcons />
        </div>
      </div>
    </nav>
  )
}
export default Navbar
