import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import {
  About,
  Contact,
  Error,
  HomeLayout,
  Landing,
  Achievement,
  Gallery,
} from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'achievement',
        element: <Achievement />,
      },
      {
        path: 'gallery',
        element: <Gallery />,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}
export default App
