import React from 'react'
import plus from "/plus.png"
import home from "/home.png"
import consultation from "/consultation.png"
import book from "/book.png"
import dental from "/dental.png"
import teeth from "/teeth.png"
import checkup from "/checkup.png"
import treatment from "/treatment.png"
import cleaning from "/cleaning.png"

const LandingPage = () => {
  return (
    <div className='flex flex-col scroll-smooth'>
      <div className='flex flex-row justify-center items-center w-ful pt-30 pb-20'>
      <div className='flex flex-col mr-[-25px]'>
        <h1 className='font-poppins font-medium leading-tight text-[65px] w-150'><span className='text-primary'>Take Care</span> of Your Teeth, Beautify Your <span className='text-primary'>Smile!</span></h1>
        <p className='font-poppins font-normal mt-4 text-[#6B6B6B] text-[15px] w-130'>We understand that dental health is not just about aesthetics, but also comfort and confidence. Therefore, we are here with the best service to help you get a healthy and charming smile.</p>
        <a href="" className='bg-primary rounded-[50px] text-white font-poppins font-medium text-[13px] py-3 px-10 mt-8 w-fit'>Book Online</a>
        <div className='flex flex-row items-center mt-8'>
            <h1 className='font-poppins font-semibold text-[50px]'>827</h1>
            <img className='w-7 h-7 ml-2' src={plus} alt="" />
            <p className='font-poppins font-normal text-[#6B6B6B] text-[17px] w-80 ml-5'>Transform your smile quickly and with our exceptionl service.</p>
        </div>
      </div>
      <img className='w-140 h-auto mt-[-60px] ml-[-25px]' src={home} alt="" />
    </div>

    <div className='flex flex-row justify-center items-center gap-45 pt-10'>
      <h1 className='font-poppins font-medium text-[55px] w-120 leading-tight'>Get pearl white teeth easily</h1>
      <p className='font-poppins text-[#6B6B6B] w-95 text-[12px]'>We understand that dental health is a long-term investment for a better quality of life. With a team of professional doctors and modern equipment, we are committed to providing a comfortable, safe, and high-quality dental care experience.</p>
    </div>
    <div className='flex flex-row justify-center pt-12 pb-20 gap-20'>
      <img className='w-130' src={consultation} alt="" />
      <div className='flex flex-col gap-10 mt-20'>
        <div className='flex flex-col gap-2'>
          <img className='w-11' src={book} alt="" />
          <h1 className='font-poppins font-semibold text-[22px] mt-2'>Book Online</h1>
          <p className='font-poppins font-normal text-[#6B6B6B] text-[15px] w-110'>Book online - quickly see when we’re available and book a time for the whole family in under 5 minute. It’s so easy.</p>
        </div>
        <div className='flex flex-col gap-2'>
          <img className='w-11' src={dental} alt="" />
          <h1 className='font-poppins font-semibold text-[22px] mt-2'>Visit Clinic</h1>
          <p className='font-poppins font-normal text-[#6B6B6B] text-[15px] w-110'>Visit our clinic - the kids even have their own private play area and dedicated chlindren’s room.</p>
        </div>
        <div className='flex flex-col gap-2'>
          <img className='w-11' src={teeth} alt="" />
          <h1 className='font-poppins font-semibold text-[22px] mt-2'>Get Treatment</h1>
          <p className='font-poppins font-normal text-[#6B6B6B] text-[15px] w-110'>Get to treat your teeth with a satistyfying experience and profesional service from an expert doctor.</p>
        </div>
      </div>
    </div>


    <div className='flex flex-col bg-[#FF2492] w-full'>
      <div className='flex flex-col py-15'>
        <div className='flex flex-row justify-center items-center gap-30'>
          <h1 className='text-white font-poppins font-semibold text-[40px] w-125'>We specialize in you, whatever your specialty</h1>
          <p className='text-white font-poppins font-medium text-[15px] w-110'>At our company, we take pride in providing individually customized solutions that are specifically tailored to meet your unique expertise, requirements, and preferences</p>
      </div>
      <div className='flex flex-row justify-center pt-20 gap-5'>
        <div className='flex flex-col bg-white rounded-[30px]'>
          <img className='w-75 mx-5 mt-4' src={checkup} alt="" />
          <hr className='border-[1px] border-primary mx-5 mt-5'/>
          <h1 className='font-poppins font-semibold text-[25px] mt-3 mx-5'>Dental Check-Up</h1>
          <p className='font-poppins font-medium text-[#454545] h-24 text-[13px] mt-2 mx-5 w-75'>we offer comprehensive dental check-ups and consultations to detect issues early and provide the best treatment solutions.</p>
        </div>
        <div className='flex flex-col bg-white rounded-[30px]'>
          <img className='w-75 mx-5 mt-4' src={treatment} alt="" />
          <hr className='border-[1px] border-primary mx-5 mt-5'/>
          <h1 className='font-poppins font-semibold text-[25px] mt-3 mx-5'>Orthodontic Treatment</h1>
          <p className='font-poppins font-medium text-[#454545] h-24 text-[13px] mt-2 mx-5 w-75'>Aligned teeth are not just about looks—they contribute to better oral health too! We offer orthodontic treatments, including traditional braces and Invisalign.</p>
        </div>
        <div className='flex flex-col bg-white rounded-[30px]'>
          <img className='w-75 mx-5 mt-4' src={cleaning} alt="" />
          <hr className='border-[1px] border-primary mx-5 mt-5'/>
          <h1 className='font-poppins font-semibold text-[25px] mt-3 mx-5'>Teeth Cleaning</h1>
          <p className='font-poppins font-medium text-[#454545] h-24 text-[13px] mt-2 mx-5 w-75'>Plaque and tartar buildup can lead to gum disease, bad breath, and cavities. With our professional teeth cleaning and scaling service.</p>
        </div>
      </div>
      </div>
    </div>

    </div>
  )
}

export default LandingPage
