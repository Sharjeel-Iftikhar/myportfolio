'use client'

import React from 'react'
import { styles } from '../utils/styles'
import { useState } from 'react'
import { navLinks } from "../constants";
import { useEffect } from 'react';


import Link from 'next/link'
import Image from 'next/image';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);


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

  return (
    <nav
    className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
      scrolled ? "bg-primary" : "bg-transparent"
    }`}
  >
    <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
      
        <Link
          href='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={'/assets/logo2.png'} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Sharjeel Iftikhar
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {
            navLinks.map((links) =>(
              <li key={links.id}
              className={`${
                active === links.id ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] cursor-pointer font-medium
              `
              }onClick={()=> setActive(links.title)}
              >
                <Link href={`/${links.id}`}>
                  {links.title}
                </Link>
              </li>
            ))
          }
        </ul>


        {/* for Mobile screen */}

        <div className='md:hidden flex flex-1 
        justify-end items-center'>
          <img src={`${!toggle ? '/assets/menu.svg' : '/assets/close.svg'}` } alt='menu'
          className='w-[28px] h-[28px] object-contain cursor-pointer ml-4'
          onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? 'hidden' : 'flex' } p-10 black-gradient absolute
          top-20 right-0 mx-4 my-2 min-w-[100%] z-10 rouded-xl`}>

          <ul className='list-none flex justify-end items-start flex-col gap-5'>
          {
            navLinks.map((links) =>(
              <li key={links.id}
              className={`${
                active === links.id ? "text-white" : "text-secondary"
              } font-mono font-medium cursor-pointer text-[16px]
              `
              }onClick={()=> {
                setToggle(!toggle);
                setActive(links.title)}}
              >
                <Link href={`#${links.id}`}>
                  {links.title}
                </Link>
              </li>
            ))
          }
        </ul>

          </div>
          
        </div>

        </div>

    </nav>
  )
}

export default Navbar