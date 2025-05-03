import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Camponent/Navbar'
import { counterContext } from './Context/Context'
function App() {
  const [count, setCount] = useState(0)
//Now this count can be direcltly  used in Camponent1 using useContext
  return (
    <>
    <counterContext.Provider value={{count,setCount}}>
      <div > 
        {/* this is called props of a driling */}
        {/* instead we can use Usecontext */}
        {/* <Navbar count={count}/> */}
        <Navbar/>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </counterContext.Provider>
  
    </>
  )
}

export default App
