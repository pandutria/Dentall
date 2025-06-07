import React from 'react'
import plus from "/plus.png"
import home from "/home.png"
import consultation from "/consultation.png"
import book from "/book.png"
import dental from "/dental.png"
import teeth from "/teeth.png"

const LandingPage = () => {
  return (
    <div className='flex flex-col scroll-smooth'>
      <div className='flex flex-row justify-center items-center w-ful pt-10 pb-20'>
      <div className='flex flex-col'>
        <h1 className='font-poppins font-medium leading-tight text-[65px] w-150'><span className='text-primary'>Take Care</span> of Your Teeth, Beautify Your <span className='text-primary'>Smile!</span></h1>
        <p className='font-poppins font-normal mt-4 text-[#6B6B6B] text-[15px] w-130'>We understand that dental health is not just about aesthetics, but also comfort and confidence. Therefore, we are here with the best service to help you get a healthy and charming smile.</p>
        <a href="" className='bg-primary rounded-[50px] text-white font-poppins font-medium text-[13px] py-3 px-10 mt-8 w-fit'>Book Online</a>
        <div className='flex flex-row items-center mt-8'>
            <h1 className='font-poppins font-semibold text-[50px]'>827</h1>
            <img className='w-7 h-7 ml-2' src={plus} alt="" />
            <p className='font-poppins font-normal text-[#6B6B6B] text-[17px] w-80 ml-5'>Transform your smile quickly and with our exceptionl service.</p>
        </div>
      </div>
      <img className='w-140 h-auto mt-[-60px]' src={home} alt="" />
    </div>
    <div className='flex flex-row justify-center items-center gap-82 mt-10'>
      <h1 className='font-poppins font-medium text-[55px] w-120 leading-tight'>Get pearl white teeth easily</h1>
      <p className='font-poppins text-[#6B6B6B] w-95 text-[12px]'>We understand that dental health is a long-term investment for a better quality of life. With a team of professional doctors and modern equipment, we are committed to providing a comfortable, safe, and high-quality dental care experience.</p>
    </div>
    <div className='flex flex-row justify-center mt-15 gap-20'>
      <img className='w-135' src={consultation} alt="" />
      <div className='flex flex-col gap-10 mt-20'>
        <div className='flex flex-col gap-2'>
          <img className='w-10' src={book} alt="" />
          <h1 className='font-poppins font-semibold text-[20px] mt-2'>Book Online</h1>
          <p className='font-poppins font-normal text-[#6B6B6B] text-[15px] w-110'>Book online - quickly see when we’re available and book a time for the whole family in under 5 minute. It’s so easy.</p>
        </div>
        <div className='flex flex-col gap-2'>
          <img className='w-10' src={dental} alt="" />
          <h1 className='font-poppins font-semibold text-[20px] mt-2'>Visit Clinic</h1>
          <p className='font-poppins font-normal text-[#6B6B6B] text-[15px] w-110'>Visit our clinic - the kids even have their own private play area and dedicated chlindren’s room.</p>
        </div>
        <div className='flex flex-col gap-2'>
          <img className='w-10' src={teeth} alt="" />
          <h1 className='font-poppins font-semibold text-[20px] mt-2'>Get Treatment</h1>
          <p className='font-poppins font-normal text-[#6B6B6B] text-[15px] w-110'>Get to treat your teeth with a satistyfying experience and profesional service from an expert doctor.</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default LandingPage
