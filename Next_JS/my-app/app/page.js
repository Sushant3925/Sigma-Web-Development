//By default next js page is server page which means that all thigs has been executing on server side for the security purpose 
// "use client"
import Navbar from '@/Camponent/Navbar'
import React from 'react'
// import { useState } from 'react'
import fs from "fs/promises"
const page = () => {
  // const [count, setcount] = useState(0)
  console.log("Hey I am sushant")
  let a = fs.readFile(".gitignore")
  a.then(e=>{console.log(e.toString())})
  return (
    <div>
      <span>Hello Home page</span>

      <button>Change me</button>
      <Navbar/>
    </div>
  )
}


export default page
