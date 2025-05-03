import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className='flex bg-slate-800 justify-around p-3 absolute bottom-0 w-full  text-white'>
      <div className="logo font-bold">Copyright &copy;  | All Rights are resrerved</div>
        <div className="nav">
            <ul className='flex gap-3 text-lg'>
                <a href="/"><li>Home</li></a>
                <a href="/About"><li>About</li></a>
                <a href="/Contact"><li>Contact Us</li></a>
            </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer
