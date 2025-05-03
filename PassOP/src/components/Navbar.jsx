import React from 'react'

const Navbar = () => {
    return (
        <>
            
            <nav className='bg-slate-700 flex justify-around text-white p-3'>
                <h1 className='font-bold text-xl'>
                    <span className='text-green-500'>&lt;</span>
                    <span className=''>Pass</span>
                    <span className='text-green-500'>OP/&gt;</span>
                    
                </h1>
                <ul className='flex gap-4'>
                    <li className='text-lg hover:font-bold '>Home</li>
                    <li className='text-lg hover:font-bold '>About</li>
                    <li className='text-lg hover:font-bold '>Contact</li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
