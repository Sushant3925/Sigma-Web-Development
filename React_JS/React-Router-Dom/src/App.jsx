import { useState } from 'react'
import Navbar from './Camponent/Navbar'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './Camponent/Home'
import Contact from './Camponent/Contact'
import About from './Camponent/About'
import User from './Camponent/User'
function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path:"/Home",
      element:<><Navbar/><Home/></>
    },
    {
      path:"/",
      element:<><Navbar/></>
    },
    {
      path:"/About",
      element:<><Navbar/><About/></>
    },
    {
      path:"/Contact",
      element:<><Navbar/><Contact/></>
    },
    {
      path:"/User/:Username",
      element:<><Navbar/><User/></>
    },
  ])
  return (

    <>
     {/* <Navbar/> */}
     <RouterProvider router={router}/>
    </>
  )
}

export default App
