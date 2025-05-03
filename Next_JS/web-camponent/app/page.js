import React from 'react'
import Image from 'next/image'
// there is important concern about traditional img tag about the optimization which leads to extra memory space though there is small inage is loaded
const page = () => {
  return (
    <div>

      {/* <div className='container my-4 bg-red-400 w-[500px] h-[300px] text-center'>
        <img className='m-auto object-cover  ' src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="img" />
      </div> */}

      <div className='container '>
        <div className='m-auto container my-4 bg-red-400 size-80 text-center relative '>
          <Image className='m-auto  object-cover' fill={true} src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="img" />
        </div>

      </div>
      Welcome Home
    </div >
  )
}

export default page
