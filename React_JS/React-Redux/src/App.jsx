import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import Navbar from './camponent/Navbar'
import { increment,decrement,multiply,devide } from './redux/counter/counterSlice'

//React-redux is used to acccess a state and their function directly in any camponent without passing props that leads props of drilling
function App() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
    <div>
      <Navbar/>
      <div>
        <button onClick={()=>{dispatch(devide())}}>/ 2</button>
        <button onClick={()=>{dispatch(decrement())}}>- 1</button>
        Value of counter id {count} 
        <button onClick={()=>{dispatch(increment())}}> + 1</button>
        <button onClick={()=>{dispatch(multiply())}}> * 2 </button>
      </div>
    </div>
    </>
  )
}

export default App
