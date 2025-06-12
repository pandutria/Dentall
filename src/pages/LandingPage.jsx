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
import dentist1 from "/dentist1.png"
import dentist2 from "/dentist2.png"
import dentist3 from "/dentist3.png"
import dentist4 from "/dentist4.png"
import dentist5 from "/dentist5.png"
import titik2 from "/titik2.png"
import circle1 from "/circle1.png"
import circle2 from "/circle2.png"
import circle3 from "/circle3.png"
import more from "/more.png"
import location from "/location.png"
import location2 from "/location2.png"
import serpong from "/serpong.png"
import call from "/call.png"
import email from "/email.png"
import pink from "/pink.png"

const LandingPage = () => {
  return (
    <div className='flex flex-col scroll-smooth'>
      <div id='home' className='flex flex-row justify-center items-center w-full pt-30 lg:pt-35'>
      <div className='flex flex-col lg:mr-[-25px] justify-center px-10 overflow-hidden lg:px-0 lg:justify-start items-center lg:items-start'>
        <h1 className='font-poppins font-medium leading-tight  lg:text-[65px] text-[35px] w-full lg:px-0 text-center lg:text-start lg:w-150'><span className='text-primary'>Take Care</span> of Your Teeth, Beautify Your <span className='text-primary'>Smile!</span></h1>
        <p className='font-poppins font-normal mt-4 text-[#6B6B6B] text-[15px] text-center lg:text-start w-full lg:w-130'>We understand that dental health is not just about aesthetics, but also comfort and confidence. Therefore, we are here with the best service to help you get a healthy and charming smile.</p>
        <a href="#book" className='bg-primary rounded-[50px] text-white font-poppins font-medium text-[13px] py-3 px-10 mt-8 w-fit'>Book Online</a>
        <div className='flex flex-row items-center mt-8 w-full'>
            <h1 className='font-poppins font-semibold text-[50px]'>827</h1>
            <img className='w-7 h-7 ml-2' src={plus} alt="" />
            <p className='font-poppins font-normal text-[#6B6B6B] text-15px lg:text-[17px] w-80 ml-5'>Transform your smile quickly and with our exceptionl service.</p>
        </div>
      </div>
      <img className='w-140 h-auto mt-[-60px] ml-[-25px] hidden lg:flex' src={home} alt="" />
    </div>

    <div id='about' className='flex flex-col w-full px-10 lg:px-0 lg:flex-row justify-center items-center gap-5 lg:gap-10 lg:gap-50 pt-20 lg:pt-25 overflow-hidden'>
      <h1 className='font-poppins font-medium text-[35px] lg:text-[55px] text-center lg:text-start w-full lg:w-120 leading-tight'>Get pearl white teeth easily</h1>
      <p className='font-poppins text-[#6B6B6B] text-center lg:text-start w-full lg:w-95 text-[12px]'>We understand that dental health is a long-term investment for a better quality of life. With a team of professional doctors and modern equipment, we are committed to providing a comfortable, safe, and high-quality dental care experience.</p>
    </div>

    <div className='flex flex-row justify-center pt-12 gap-20 overflow-hidden w-full px-10 lg:px-0'>
      <img className='w-135 hidden lg:flex' src={consultation} alt="" />
      <div className='flex flex-col gap-10 mt-0 lg:mt-20 w-full lg:w-auto'>
        <div className='flex flex-col gap-2 items-center lg:items-start'>
          <img className='w-11' src={book} alt="" />
          <h1 className='font-poppins font-semibold text-[22px] mt-2'>Book Online</h1>
          <p className='font-poppins font-normal text-[#6B6B6B] text-[15px] text-center lg:text-start w-full lg:w-110'>Book online - quickly see when we’re available and book a time for the whole family in under 5 minute. It’s so easy.</p>
        </div>
        <div className='flex flex-col gap-2 items-center lg:items-start'>
          <img className='w-11' src={dental} alt="" />
          <h1 className='font-poppins font-semibold text-[22px] mt-2'>Visit Clinic</h1>
          <p className='font-poppins font-normal text-[#6B6B6B] text-[15px] text-center lg:text-start w-full lg:w-110'>Visit our clinic - the kids even have their own private play area and dedicated chlindren’s room.</p>
        </div>
        <div className='flex flex-col gap-2 items-center lg:items-start'>
          <img className='w-11' src={teeth} alt="" />
          <h1 className='font-poppins font-semibold text-[22px] mt-2'>Get Treatment</h1>
          <p className='font-poppins font-normal text-[#6B6B6B] text-[15px] text-center lg:text-start w-full lg:w-110'>Get to treat your teeth with a satistyfying experience and profesional service from an expert doctor.</p>
        </div>
      </div>
    </div>


    <div id='service' className='flex flex-col pt-20 w-full overflow-hidden'>
      <div className='flex flex-col bg-[#FF2492] px-10 lg:px-0 w-full'>
      <div className='flex flex-col py-15'>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-30'>
          <h1 className='text-white font-poppins font-semibold text-[25px] lg:text-[40px] text-center lg:text-start w-full lg:w-125'>We specialize in you, whatever your specialty</h1>
          <p className='text-white font-poppins font-medium text-[13px] lg:text-[15px] text-center lg:text-start w-full lg:w-110'>At our company, we take pride in providing individually customized solutions that are specifically tailored to meet your unique expertise, requirements, and preferences</p>
      </div>
      <div className='flex flex-col lg:flex-row justify-center pt-10 lg:pt-20 gap-5'>
        <div className='flex flex-col bg-white rounded-[30px] px-4 lg:px-0'>
          <img className='w-full lg:w-75 lg:mx-5 mt-4' src={checkup} alt="" />
          <hr className='border-[1px] border-primary lg:mx-5 mt-5'/>
          <h1 className='font-poppins font-semibold text-[25px] mt-3 lg:mx-5'>Dental Check-Up</h1>
          <p className='font-poppins font-medium text-[#454545] h-24 text-[13px] mt-2 lg:mx-5 w-full lg:w-75'>we offer comprehensive dental check-ups and consultations to detect issues early and provide the best treatment solutions.</p>
        </div>
        <div className='flex flex-col bg-white rounded-[30px] px-4 lg:px-0'>
          <img className='w-full lg:w-75 lg:mx-5 mt-4' src={treatment} alt="" />
          <hr className='border-[1px] border-primary lg:mx-5 mt-5'/>
          <h1 className='font-poppins font-semibold text-[25px] mt-3 lg:mx-5'>Orthodontic Treatment</h1>
          <p className='font-poppins font-medium text-[#454545] h-24 text-[13px] mt-2 lg:mx-5 w-full lg:w-75'>Aligned teeth are not just about looks—they contribute to better oral health too! We offer orthodontic treatments, including traditional braces and Invisalign.</p>
        </div>
        <div className='flex flex-col bg-white rounded-[30px] px-4 lg:px-0'>
          <img className='w-full lg:w-75 lg:mx-5 mt-4' src={cleaning} alt="" />
          <hr className='border-[1px] border-primary lg:mx-5 mt-5'/>
          <h1 className='font-poppins font-semibold text-[25px] mt-3 lg:mx-5'>Teeth Cleaning</h1>
          <p className='font-poppins font-medium text-[#454545] h-24 text-[13px] mt-2 lg:mx-5 w-full lg:w-75'>Plaque and tartar buildup can lead to gum disease, bad breath, and cavities. With our professional teeth cleaning and scaling service.</p>
        </div>
      </div>
      </div>
    </div>
    </div>
    
    <div id='consultation' className='flex flex-col items-center w-full pt-15 lg:pt-20 px-10 lg:px-0 overflow-hidden'>
      <div className='flex flex-row gap-0 w-full justify-center lg:justify-start lg:w-auto lg:gap-185'>
        <div className='flex flex-col'>
          <h2 className='text-primary font-poppins text-center lg:text-start w-full lg:w-auto font-semibold text-[18px]'>Our Team</h2>
          <h1 className='font-poppins font-semibold text-[25px] lg:text-[35px]'>Our Expert <span className='text-primary'>Dentist</span></h1>
        </div>
        <div></div>
      </div>
      <div className='flex flex-col lg:flex-row gap-5 pt-10'>
        <img className='w-85' src={dentist1} alt="" />
        <img className='w-85' src={dentist2} alt="" />
        <img className='w-85' src={dentist3} alt="" />
      </div>
      <div className='flex flex-col lg:flex-row gap-5 pt-5'>
        <img className='w-85' src={dentist4} alt="" />
        <img className='w-85' src={dentist5} alt="" />
        <img className='w-85' src={dentist1} alt="" />
      </div>
    </div>

    <div id='testimoni' className='flex flex-col w-full px-10 lg:px-0 items-center overflow-hidden'>
      <div className='flex flex-col w-full lg:w-auto lg:flex-row pt-20 pb-10 items-center gap-5 lg:gap-45'>
        <h1 className='font-poppins font-semibold text-center lg:text-start text-[30px] lg:text-[45px] w-full lg:w-110 leading-tight'>See What Our Client Have to Say:</h1>
        <p className='font-poppins font-normal text-[#6B6B6B] text-center lg:text-start text-[13px] w-full lg:w-115'>We understand that dental health is a long-term investment for a better quality of life. With a team of professional doctors and modern equipment, we are committed to providing a comfortable, safe, and high-quality dental care experience.</p>
      </div>
      <hr className='border-[1px] border-[#7D7D7D9E] w-full lg:w-270'/>
      <div className='flex flex-col lg:flex-row py-12 gap-10 w-full lg:w-auto'>
        <div className='flex flex-col bg-[#3498DB1A] rounded-[10px] p-5 gap-5'>
          <img className='w-12' src={titik2} alt="" />
          <p className='font-poppins font-normal text-[18px] w-full lg:w-120'>I had an amazing experience at Senyum Sehat Ceria. The staff was incredibly friendly, and the dentist explained every step of my treatment clearly. My teeth feel healthier than ever! Highly recommended!"</p>
          <hr className='border-[1px] border-[#D0D0D0]'/>
          <div className='flex flex-row items-center justify-between'>
            <div className='flex flex-row gap-4'>
              <img className='w-11' src={circle1} alt="" />
              <div className='flex flex-col'>
                <h1 className='font-poppins font-semibold text-[16px]'>Tyan Yanuri</h1>
                <p className='font-poppins font-medium text-[#676767] text-[13px]'>Product Manager</p>
              </div>
            </div>
            <div className='hidden lg:flex flex-row items-center gap-2'>
              <p className='font-poppins font-normal text-[#2BAAFF] text-[17px]'>Read More</p>
              <img src={more} className='w-2 h-3' alt="" />
            </div>
          </div>
        </div>
        <div className='flex flex-col bg-[#FFF2001A] rounded-[10px] p-5 gap-5'>
          <img className='w-12' src={titik2} alt="" />
          <p className='font-poppins font-normal text-[18px] w-full lg:w-120'>From the moment I walked in, I felt welcomed. The clinic is modern, clean, and comfortable. My Invisalign treatment has been smooth, and the results are fantastic.</p>
          <hr className='border-[1px] border-[#D0D0D0]'/>
          <div className='flex flex-row items-center justify-between'>
            <div className='flex flex-row gap-4'>
              <img className='w-11' src={circle2} alt="" />
              <div className='flex flex-col'>
                <h1 className='font-poppins font-semibold text-[16px]'>Aisyah Lala</h1>
                <p className='font-poppins font-medium text-[#676767] text-[13px]'>UI UX Designer</p>
              </div>
            </div>
            <div className='hidden lg:flex flex-row items-center gap-2'>
              <p className='font-poppins font-normal text-[#2BAAFF] text-[17px]'>Read More</p>
              <img src={more} className='w-2 h-3' alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>


    <div id='location' className='flex flex-col lg:flex-row overflow-hidden px-10 lg:px-0 gap-8 lg:gap-5 w-full justify-center pt-5 lg:pt-10'>
      <div className='flex flex-col items-center lg:items-start w-full lg:w-auto'>
        <div className='flex flex-row items-center gap-3 border-[2px] border-[#FF69B4] w-fit rounded-[10px] py-1.5 px-3.5'>
          <img src={location} className='w-3' alt="" />
          <p className='font-poppins font-medium text-[#676767] text-[14px]'>Our Location</p>
        </div>
        <h1 className='font-poppins font-semibold text-center lg:text-start text-[26px] lg:text-[40px] w-full lg:w-125 pt-5'>Discovering Indonesia’s spreadout dental clinics</h1>
        <p className='font-poppins font-normal text-[#4B4B4B] text-[15px] lg:text-[19px] text-center lg:text-start w-full lg:w-125 pt-5'>We are located at Senyum Sehat Ceria, in a central and easily accessible area. Whether you're visiting for a routine check-up or a dental emergency, our clinic is always ready to welcome you!</p>
        <div className='flex flex-row pt-10 gap-5 w-full lg:w-122'>
          <div className='flex flex-col gap-2 w-full'>
             <hr className='border-[1px] border-[#D0D0D0] w-full'/>
             <h1 className='font-poppins font-semibold text-[20px] cursor-pointer'>Serpong</h1>
             <hr className='border-[1px] border-[#D0D0D0] w-full'/>
             <h1 className='font-poppins font-medium text-[#AEAEAE] text-[20px] cursor-pointer'>Bali</h1>
             <hr className='border-[1px] border-[#D0D0D0] w-full'/>
             <h1 className='font-poppins font-medium text-[#AEAEAE] text-[20px] cursor-pointer'>Jakarta Timur</h1>
             <hr className='border-[1px] border-[#D0D0D0] w-ful'/>
             <h1 className='font-poppins font-medium text-[#AEAEAE] text-[20px] cursor-pointer'>Bogor</h1>
             <hr className='border-[1px] border-[#D0D0D0] w-full'/>
          </div>
          <div className='flex flex-col gap-2 w-full'>
             <hr className='border-[1px] border-[#D0D0D0] w-full'/>
             <h1 className='font-poppins font-medium text-[#AEAEAE] text-[20px] cursor-pointer'>Depok</h1>
             <hr className='border-[1px] border-[#D0D0D0] w-full'/>
             <h1 className='font-poppins font-medium text-[#AEAEAE] text-[20px] cursor-pointer'>Cikarang</h1>
             <hr className='border-[1px] border-[#D0D0D0] w-full'/>
             <h1 className='font-poppins font-medium text-[#AEAEAE] text-[20px] cursor-pointer'>Sumedang</h1>
             <hr className='border-[1px] border-[#D0D0D0] w-ful'/>
             <h1 className='font-poppins font-medium text-[#AEAEAE] text-[20px] cursor-pointer'>Jogja</h1>
             <hr className='border-[1px] border-[#D0D0D0] w-full'/>
          </div>
        </div>
        <a href="" className='font-poppins font-medium text-[14px] bg-primary w-fit text-white rounded-[20px] px-5 py-2.5 mt-8'>See all location</a>
      </div>
      <img src={serpong} className='w-140' alt="" />
    </div>

    <div id='book' className='flex flex-col lg:flex-row pt-10 lg:pt-20 pb-10 justify-center w-full gap-10 lg:gap-20 overflow-hidden px-10 lg:px-0'>
      <div className='flex flex-col w-full lg:w-auto items-center lg:items-start'>
         <div className='flex flex-row items-center gap-3 border-[2px] border-[#FF69B4] w-fit rounded-[10px] py-1.5 px-3.5'>
          <p className='font-poppins font-medium text-primary text-[14px]'>Book Now</p>
        </div>
        <h1 className='font-poppins font-semibold text-[30px] lg:text-[45px] text-center lg:text-start w-full lg:w-110 leading-tight pt-8'>Book Now & Secure <span className='text-primary'>Your Seat</span> Here</h1>
        <p className='font-poppins font-medium text-[#595959] text-[13px] text-center lg:text-start w-full lg:w-100 pt-3'>Ready for a brighter, healthier smile? Schedule your visit with us now! Whether it’s a routine check-up, teeth cleaning, or a specialized treatment, our expert dentists are here to help.</p>
        <div className='flex flex-row pt-8 items-center gap-2'>
          <img src={location2} className='w-4 h-4 object-contain' alt="" />
          <p className='font-poppins font-medium text-[#595959] text-[14px]'>Ruko Pisa Grande B no 7, Banten 15810</p>
        </div>
        <div className='flex flex-row pt-2.5 items-center gap-2'>
          <img src={email} className='w-4 h-4 object-contain' alt="" />
          <p className='font-poppins font-medium text-[#595959] text-[14px]'>senyumsehatceria@gmail.com</p>
        </div>
        <div className='flex flex-row pt-2.5 items-center gap-2'>
          <img src={call} className='w-4 h-4 object-contain' alt="" />
          <p className='font-poppins font-medium text-[#595959] text-[14px]'>+62 1297786651</p>
        </div>
        <img src={pink} className='w-110 h-auto object-contain pt-10' alt="" />
      </div>
      <form action="" className='flex flex-col py-7 px-7 gap-5 rounded-[18px] shadow-[0px_1px_12.4px_1px_rgba(0,0,0,0.25)]'>
        <div className='flex flex-col lg:flex-row gap-6 w-full lg:w-125'>
          <div className='flex flex-col gap-2'>
            <div className='flex flex-row items-center gap-2'>
              <h1 className='font-poppins font-semibold text-[16px]'>Your Name</h1>
              <img src={circle3} className='w-2 h-2 object-contain' alt="" />
            </div>
            <input type="text" placeholder='Enter Your Name' className='font-poppins font-medium text-[15px] text-[#AEAEAE] border-[#CBCBCB] border-[2px] rounded-[5px] py-3 px-3 w-full focus:border-primary focus:bord-[4px] outline-none' />
          </div>
          <div className='flex flex-col gap-2'>
            <div className='flex flex-row items-center gap-2'>
              <h1 className='font-poppins font-semibold text-[16px]'>Telephone</h1>
              <img src={circle3} className='w-2 h-2 object-contain' alt="" />
            </div>
            <input type="text" placeholder='Enter Your Number' className='font-poppins font-medium text-[15px] text-[#AEAEAE] border-[#CBCBCB] border-[2px] rounded-[5px] py-3 pl-3 w-full focus:border-primary focus:bord-[4px] outline-none' />
          </div>
        </div>
        <div className='flex flex-col lg:flex-row gap-6 w-full lg:w-125'>
          <div className='flex flex-col gap-2'>
            <div className='flex flex-row items-center gap-2'>
              <h1 className='font-poppins font-semibold text-[16px]'>Email address</h1>
              <img src={circle3} className='w-2 h-2 object-contain' alt="" />
            </div>
            <input type="text" placeholder='Enter Your Email' className='font-poppins font-medium text-[15px] text-[#AEAEAE] border-[#CBCBCB] border-[2px] rounded-[5px] py-3 px-3 w-full focus:border-primary focus:bord-[4px] outline-none' />
          </div>
          <div className='flex flex-col gap-2'>
            <div className='flex flex-row items-center gap-2'>
              <h1 className='font-poppins font-semibold text-[16px]'>Date</h1>
              <img src={circle3} className='w-2 h-2 object-contain' alt="" />
            </div>
            <input type="text" placeholder='Enter Your Number' className='font-poppins font-medium text-[15px] text-[#AEAEAE] border-[#CBCBCB] border-[2px] rounded-[5px] py-3 pl-3 w-full focus:border-primary focus:bord-[4px] outline-none' />
          </div>
        </div>
         <div className='flex flex-col gap-2'>
            <div className='flex flex-row items-center gap-2'>
              <h1 className='font-poppins font-semibold text-[16px]'>Select Service</h1>
              <img src={circle3} className='w-2 h-2 object-contain' alt="" />
            </div>
            <select type="text" placeholder='Enter Your Service' className='font-poppins font-medium text-[15px] text-[#AEAEAE] border-[#CBCBCB] border-[2px] rounded-[5px] py-3 pl-3 w-full focus:border-primary focus:bord-[4px] outline-none' >
              <option value="" disabled selected>Enter Your Service</option>
              <option value="service1">Service Option 1</option>
              <option value="service2">Service Option 2</option>
              <option value="service3">Service Option 3</option>
            </select>
          </div>
         <div className='flex flex-col gap-2'>
            <div className='flex flex-row items-center gap-2'>
              <h1 className='font-poppins font-semibold text-[16px]'>Questions</h1>
              <img src={circle3} className='w-2 h-2 object-contain' alt="" />
            </div>
            <textarea type="text" placeholder='Enter Your Questions' className='font-poppins font-medium text-[15px] text-[#AEAEAE] border-[#CBCBCB] border-[2px] rounded-[5px] py-3 pl-3 w-full focus:border-primary h-55 focus:bord-[4px] outline-none resize-none' />
          </div>
          <a href="" className='font-poppins font-semibold text-white bg-primary px-8 py-4 w-fit rounded-[8px] text-[16px]'>Booking Now</a>
      </form>
    </div>

    </div>
  )
}

export default LandingPage
