const links = [
  { id: 1, url: '/', text: 'home' },
  { id: 2, url: 'about', text: 'about' },
  { id: 3, url: 'achievement', text: 'achievements' },
  { id: 4, url: 'contact', text: 'contact' },
  { id: 5, url: 'gallery', text: 'gallery' },
]
import { NavLink } from 'react-router-dom'

const NavLinks = () => {
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link
        return (
          <li key={id}>
            <NavLink className='capitalize text-white text-lg' to={url}>
              {text}
            </NavLink>
          </li>
        )
      })}
    </>
  )
}
export default NavLinks
