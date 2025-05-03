import { useState,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Camponent/Navbar'
function App() {
  const [count, setCount] = useState(0)
  const [adjective, setadjective] = useState("good")
  const [count2, setcount2] = useState(0)
  //Use of this function create a problem of rerendering so to solve this problem we can use useCallback Hook --> is used to memoise a function
  // const getAdjactive=()=>{
  //   return "another"+count
  // }

  //this function is rendered only when the value of count has been changed.
  const getAdjactive=useCallback(()=>{
    return "another "+count
  },[count])
  return (
    <>
    <Navbar adjective={adjective} getAdjactive={getAdjactive} />
      <div>
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
    </>
  )
}

export default App
