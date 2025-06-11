import React, { useEffect, useState } from 'react'
import logo from "/logo.png"

const sections = ['home', 'about', 'service', 'consultation', 'testimoni', 'location', 'book']

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const observers = []

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId)
      if (section) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
              setActiveSection(sectionId)
            }
          },
          {
            threshold: 0.5,
            rootMargin: '-50px 0px -50px 0px' // Adjust this to trigger earlier/later
          }
        )
        observer.observe(section)
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  return (
    <div className='fixed bg-white z-50 flex flex-row items-center py-3 w-full justify-between px-20 border border-[#0000000D]'>
      <div className='logo flex flex-row gap-2 items-center'>
        <img className='w-14 mb-2' src={logo} alt="" />
        <div className='flex flex-col'>
          <p className='text-[13px] font-poppins font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#A29BFE] to-[#FF69B4]'>Senyum </p>
          <p className='mt-[-5px] text-[13px] font-poppins font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#A29BFE] to-[#FF69B4]'>Sehat Ceria </p>
        </div>
      </div>

      <div className='flex flex-row gap-10'>
        {sections.slice(0, 6).map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={`text-[14px] font-poppins ${
              activeSection === id ? 'text-primary font-medium' : 'font-normal'
            }`}
          >
            {id.charAt(0).toUpperCase() + id.slice(1).replace('-', ' ')}
          </a>
        ))}
      </div>

      <a
        href="#book"
        className={`text-[13px] bg-primary rounded-[50px] text-white font-poppins font-medium px-5 py-3`}
      >
        Book Online
      </a>
    </div>
  )
}

export default Navbar