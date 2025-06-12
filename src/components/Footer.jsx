import React from 'react'
import foot from "/footer.png"
import logo from "/logo.png"
import drible from "/drible.png"
import github from "/github.png"
import tweeter from "/tweeter.png"
import facebook from "/facebook.png"
import app from "/app.png"
import googleplay from "/googleplay.png"

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center px-10 px:0 w-full pt-5 lg:pt-10 pb-20'>
      <img src={foot} className='w-full lg:w-270' alt="" />
      <div className='flex flex-col lg:flex-row pt-10 lg:pt-15 gap-20 lg:gap-15 w-full lg:w-auto'>
        <div className='flex flex-col'>
            <div className='flex flex-row items-center gap-2 ml-[-5px]'>
              <img src={logo} className='w-18 h-18 object-contain mb-3' alt="" />
                <div className='flex flex-col'>
                  <p className='text-[18px] font-poppins font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#A29BFE] to-[#FF69B4]'>Senyum </p>
                  <p className='mt-[-5px] text-[18px] font-poppins font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#A29BFE] to-[#FF69B4]'>Sehat Ceria </p>
                </div>
            </div>
            <p className='font-poppins font-normal text-[#5F5F5F] pt-4 text-[15px] w-full lg:w-100'>Transforming Your familiy Dental care experience with our comprehensive one-stop solutions!</p>
            <div className='flex flex-row pt-5 gap-4.5'>
              <img src={drible} className='w-7 h-7 object-contain' alt="" />
              <img src={github} className='w-7 h-7 object-contain' alt="" />
              <img src={tweeter} className='w-7 h-7 object-contain' alt="" />
              <img src={facebook} className='w-7 h-7 object-contain' alt="" />
            </div>
        </div>
        <div className='hidden lg:flex flex-row gap-10 lg:gap-17 pt-17'>
          <div className='flex flex-col gap-2.5'>
            <h1 className='font-poppins font-medium text-[17px]'>Phone Number</h1>
            <p className='font-poppins font-normal text-[14px] text-[#5F5F5F]'>+62 1297786651</p>
          </div>
          <div className='flex flex-col gap-2.5'>
            <h1 className='font-poppins font-medium text-[17px]'>About Us</h1>
            <p className='font-poppins font-normal text-[14px] text-[#5F5F5F]'>Our Service</p>
            <p className='font-poppins font-normal text-[14px] text-[#5F5F5F]'>Our Clinics</p>
            <p className='font-poppins font-normal text-[14px] text-[#5F5F5F]'>Dentist</p>
          </div>
          <div className='flex flex-col gap-2.5'>
            <h1 className='font-poppins font-medium text-[17px]'>Location</h1>
            <p className='font-poppins font-normal text-[14px] text-[#5F5F5F]'>Career</p>
            <p className='font-poppins font-normal text-[14px] text-[#5F5F5F]'>Privacy Policy</p>
            <p className='font-poppins font-normal text-[14px] text-[#5F5F5F]'>Location</p>
          </div>
          <div className='flex flex-col gap-2.5'>
            <h1 className='font-poppins font-medium text-[17px]'>Social Media</h1>
            <p className='font-poppins font-normal text-[14px] text-[#5F5F5F]'>Twitter</p>
            <p className='font-poppins font-normal text-[14px] text-[#5F5F5F]'>Intagram</p>
            <p className='font-poppins font-normal text-[14px] text-[#5F5F5F]'>Facebook</p>
          </div>
        </div>
      </div>
       <hr className='border-[1px] border-[#D0D0D0] w-full lg:w-269 my-10'/>
       <div className='flex flex-col lg:flex-row gap-6 lg:gap-62 w-full lg:w-auto'>
        <div className='flex flex-col gap-3'>
          <h1 className='font-poppins font-medium text-[17px]'>Get the app</h1>
          <div className='flex flex-row gap-5'>
            <img src={app} className='w-full lg:w-40 h-auto object-contain' alt="" />
            <img src={googleplay} className='w-full lg:w-40 h-auto object-contain' alt="" />
          </div>
        </div>
        <div className='hidden lg:flex flex-row gap-12 lg:gap-17'>
          <div className='flex flex-col gap-2.5'>
            <h1 className='font-poppins font-medium text-[17px]'>Phone Number</h1>
            <p className='font-poppins font-medium text-[14px] text-[#595959] w-35'>We’re open clinic 06 AM - 18 PM</p>
          </div>
          <div className='flex flex-col gap-2.5'>
            <h1 className='font-poppins font-medium text-[17px]'>Locations</h1>
            <p className='font-poppins font-medium text-[14px] text-[#595959] w-full lg:w-70'>Ruko Pisa Grande B no 7, Paramount Boulevard, Tangerang, Banten 15810</p>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Footer
