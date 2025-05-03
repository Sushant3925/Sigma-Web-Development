import React from 'react'
import { memo } from 'react'
//Memo is used to load this navbar on condition
const Navbar = ({adjective,getAdjactive}) => {
    console.log("render when count change")
  return (
    <div>
      This is a {adjective}  Navbar
      <button onClick={()=> {getAdjactive()}}>{getAdjactive()}</button>
    </div>
  )
}

export default memo(Navbar)
