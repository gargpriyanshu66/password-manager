import React from 'react'

const Footer = () => {
  return (
    <div className="bg-slate-800 text-white flex flex-col justify-center items-center w-full">
        <div className="logo font-bold text-white text-2xl">
          <span className="text-green-500"> &lt;</span>
          Pass_<span className="text-green-500">Case/&gt;</span>
        </div>
        <div className='flex justify-center item-center'>created with <img className='w-7 mx-2' src="/icons/heart.png" alt="love" /> by Priyanshu Garg</div>
      
    </div>
  )
}

export default Footer
