import React, { useEffect, useState } from 'react'
import logo from "/logo.png"
import hamburger from "/hamburger.png"

const sections = ['home', 'about', 'service', 'consultation', 'testimoni', 'location', 'book']

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false) // <--- NEW: menu toggle state

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
            rootMargin: '-50px 0px -50px 0px'
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
    <div className='fixed bg-white z-50 flex flex-row items-center py-3 w-full justify-between px-10 lg:px-20 border border-[#0000000D]'>
      <div className='logo flex flex-row gap-2 items-center'>
        <img className='w-10 lg:w-14 mb-2' src={logo} alt="Logo" />
        <div className='flex flex-col'>
          <p className='text-[13px] font-poppins font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#A29BFE] to-[#FF69B4]'>Senyum </p>
          <p className='mt-[-5px] text-[13px] font-poppins font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#A29BFE] to-[#FF69B4]'>Sehat Ceria </p>
        </div>
      </div>

      {/* Menu */}
      <div className={`
        flex flex-col lg:flex-row gap-7 justify-center lg:gap-10 bg-white 
        top-0 right-0 w-45 h-screen items-center absolute 
        lg:relative lg:w-auto lg:h-auto lg:flex 
        transition-all duration-300 ease-in-out
        ${menuOpen ? 'translate-x-0' : 'translate-x-full'} 
        lg:translate-x-0
      `}>
        {sections.slice(0, 6).map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={`text-[14px] font-poppins ${
              activeSection === id ? 'text-primary font-medium' : 'font-normal'
            }`}
            onClick={() => setMenuOpen(false)} // <-- close menu on click
          >
            {id.charAt(0).toUpperCase() + id.slice(1).replace('-', ' ')}
          </a>
        ))}
      </div>

      {/* Button Book Online */}
      <a
        href="#book"
        className="lg:flex hidden text-[13px] bg-primary rounded-[50px] text-white font-poppins font-medium px-5 py-3"
      >
        Book Online
      </a>

      {/* Hamburger Icon */}
      <img
  src={hamburger}
  className={`
    w-6 z-50 lg:hidden flex cursor-pointer transition-transform duration-300
    ${menuOpen ? 'rotate-90' : 'rotate-0'}
  `}
  alt="Menu"
  onClick={() => setMenuOpen(!menuOpen)}
/>

    </div>
  )
}

export default Navbar
