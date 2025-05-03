import Link from 'next/link'
import React from 'react'
//Link tag used to prevent page from reload
const Navbar = () => {
  return (
    <div className='container flex justify-between bg-slate-800 text-xl p-3'>
      <div className="logo font-bold">Faceboot</div>
      <div className="nav">
        
        <ul className='flex gap-3 text-lg'>
          <Link href="/"><li>Home</li></Link>
          <Link href="/About"><li>About</li></Link>
          <Link href="/Contact"><li>Contact Us</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
