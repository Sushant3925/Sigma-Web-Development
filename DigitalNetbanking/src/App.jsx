
import './App.css'
import Login from './camponant/Login/login'
import CreatePage from './camponant/home/CreatePage'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Mainpage from './camponant/main/Mainpage'
import Land from './Landing/Land'
function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<><Mainpage/></>
    },
    {
      path:"/CreatePage",
      element:<><CreatePage/></>
    },
    {
      path:"/Land",
      element:<><Land/></>
    },
    {
      path:"/Login",
      element:<><Login/></>
    }
   
  ])

  return (
    <>
 
      <RouterProvider router={router}/>
    </>
  )
}

export default App
