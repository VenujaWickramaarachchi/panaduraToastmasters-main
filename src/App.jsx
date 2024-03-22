import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { About, Contact, Error, HomeLayout, Landing } from './pages'

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
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}
export default App
