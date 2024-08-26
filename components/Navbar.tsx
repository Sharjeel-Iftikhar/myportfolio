
'use client'

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { navLinks } from "../constants";
import Link from 'next/link';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname(); 
  const router = useRouter(); 

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    if (id === 'contact') {
      // Scroll to the contact section on the home page
      router.push('/'); // Navigate to the home page
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Small delay to ensure the page has loaded
    } else {
      // Navigate to the appropriate page for other links
      router.push(`/${id}`);
      setActive(id);
    }
  };

  return (
    <nav
      className={`xs:px-6 sm:px-[3.75rem] px-12 w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center sm:max-w-[80rem] 2xl:max-w-[100rem] mx-auto'>
        <Link
          href='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src='/assets/logo2.png' alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Sharjeel Iftikhar
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((links) => (
            <li
              key={links.id}
              className={`${
                active === links.id ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] cursor-pointer font-medium`}
              onClick={() => handleNavClick(links.id)}
            >
              <Link href={`/${links.id}`}>
                {links.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* For Mobile Screen */}
        <div className='md:hidden flex flex-1 justify-end items-center'>
          <img
            src={!toggle ? '/assets/menu.svg' : '/assets/close.svg'}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer ml-4'
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${!toggle ? 'hidden' : 'flex'} p-10 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[100%] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-col gap-5'>
              {navLinks.map((links) => (
                <li
                  key={links.id}
                  className={`${
                    active === links.id ? "text-white" : "text-secondary"
                  } font-mono font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    handleNavClick(links.id)
                    setToggle(false);}}
                >
                  <Link href={`/${links.id}`}>
                    
                    {links.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

