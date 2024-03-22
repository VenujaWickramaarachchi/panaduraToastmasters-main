import { Outlet } from 'react-router-dom'
import { Navbar, Footer } from '../components'
const HomeLayout = () => {
  return (
    <>
      <Navbar />

      {/* <section className='align-element py-20 '> */}
      <Outlet className='align-element py-20 h-full' />
      {/* </section> */}
      <Footer />
    </>
  )
}
export default HomeLayout
