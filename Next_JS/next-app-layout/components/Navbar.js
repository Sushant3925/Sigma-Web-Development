import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='bg-slate-700 text-lg p-3'>
        <ul className='flex gap-3'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
