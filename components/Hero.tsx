import React from 'react'
import {motion} from 'framer-motion'
import RobotCanvas  from './canvas/Robot'

import { styles } from '@/utils/styles'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX } absolute inset-0 top-[120px]
      max-w-[88rem] mx-auto flex md:flex-row flex-col items-start gap-10 md:gap-5`}>

        <div className='hidden md:flex flex-col justify-center items-center mt-5'> 
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-[28rem] h-60 violet-gradient' />
        </div>

        <div>
        <h1 className={`${styles.heroHeadText}}
        `}>Hi, I'm Sharjeel 
        <span className=
        'text-[#915eff]'> Iftikhar</span>
        </h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100 leading-10` }>
        I fell in love with programming and I have at least learnt
        something, I think… 🤷‍♂️ <br className='sm:block hidden' />
        I am fluent in classics like &nbsp;
        <span className='text-[#915eff]'>
          JavaScript, C++ and Python.
        </span>
        <br className='sm:block hidden' />
        My field of Interest's are building new &nbsp;
        <span className='text-[#915eff]'>
          Web Technologies and Products &nbsp;
        </span>
        and also in areas related to &nbsp;
        <br className='sm:block hidden' />
        <span className='text-[#915eff]'>
          integration with cloud services.
        </span>
        </p>
      </div>

      <RobotCanvas/>
       
     
      </div>  
      
    </section>
  )
}


export default Hero
