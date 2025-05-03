import { React,useContext } from 'react'
import Camponent from './Camponent1'
import { counterContext } from '../Context/Context'
const Button = () => {
  const counter = useContext(counterContext)
  return (
    <div>
      {/* <button><span><Camponent count={count}/></span>change me</button> */}
      <button onClick={()=>counter.setCount((count)=> count + 1)}><span><Camponent/></span>change me</button>
    </div>
  )
}

export default Button
