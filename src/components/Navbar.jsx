import React from 'react'
import logo from "/logo.png"

const Navbar = () => {
  return (
    <div className='flex flex-row items-center py-3 w-full justify-between px-20 border border-[#0000000D]'>
        <div className='logo flex flex-row gap-2 items-center'>
            <img className='w-14 mb-2' src={logo} alt="" />
            <div className='flex flex-col'>
                <p className='text-[13px] font-poppins font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#A29BFE] to-[#FF69B4]'>Senyum </p>
                <p className='mt-[-5px] text-[13px] font-poppins font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#A29BFE] to-[#FF69B4]'>Sehat Ceria </p>
            </div>
        </div>
        <div className='flex flex-row gap-10'>
            <a href="" className='text-[14px] font-normal font-poppins text-primary'>Home</a>
            <a href="" className='text-[14px] font-normal font-poppins'>About</a>
            <a href="" className='text-[14px] font-normal font-poppins'>Our Service</a>
            <a href="" className='text-[14px] font-normal font-poppins'>Consultasion</a>
            <a href="" className='text-[14px] font-normal font-poppins'>Testimoni</a>
            <a href="" className='text-[14px] font-normal font-poppins'>Location</a>
        </div>
            <a href="" className='text-[13px] bg-primary rounded-[50px] text-white font-poppins font-medium px-5 py-3'>Book Online</a>
    </div>
  )
}

export default Navbar
