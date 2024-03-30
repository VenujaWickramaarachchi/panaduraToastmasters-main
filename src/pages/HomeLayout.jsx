import { Outlet } from 'react-router-dom'
import { Navbar, Footer } from '../components'
const HomeLayout = () => {
  return (
    <>
      <Navbar />
      {/* <section className='align-element py-20 '> */}
      <Outlet />
      {/* </section> */}
      <Footer />
    </>
  )
}
export default HomeLayout
