import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'



const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}
      className='xs:px-16 px-12 pt-10 sm:max-w-[88rem] 2xl:max-w-[107rem] mx-auto sm:mt-[2rem] mt-[30rem] 2xl:mt-32'>
        <p className='sm:text-[18px] text-[14px]
         text-secondary uppercase tracking-wider '>let me introduce myself</p>
        <h2 className='sectionHeadText'>Overview.</h2>
      </motion.div>

      <motion.div variants={fadeIn("", "", 0.1, 1)}
      >
        <div className='flex flex-col-reverse lg:flex-row items-center xs:gap-4 lg:gap-40 justify-between xm:px-16 px-12
         sm:max-w-[88rem] 2xl:max-w-[107rem] mx-auto xs:text-left text-justify'>
          <div className="relative mt-20 2xl:min-w-[20rem] min-w-[17rem]">
            <img className="h-[50%] absolute top-0 left-40 lg:left-3 -z-10" src="/dots.png" />
            <div className="h-full w-[70%] xs:w-1/2  ml-[3rem] lg:w-full lg:ml-0 rounded-full overflow-hidden ">
              <img src="/mePortrait.jpeg" />
            </div>
          </div>

          <div>
            <p

              className='mt-4 text-secondary text-[17px] leading-[30px] sm:px-4' 
            >
              I'm a skilled software developer with experience in <span className='text-[#915eef]'>
                TypeScript and
                JavaScript, </span>and expertise in frameworks like <span className='text-[#915eef]'>React, Node.js, and
                  Next.js.</span> I'm a quick learner and collaborate closely with clients to
              create efficient, scalable, and user-friendly solutions that solve
              real-world problems. Let's work together to bring your ideas to <span className='text-[#915eef]'>life!</span>
            </p>
          </div>

        </div>




      </motion.div>

      
        <div className="container mx-auto xs:mt-0 mt-7"  id='contact' >
            {/* <!-- top --> */}
            <div className="flex flex-col gap-6 items-center">
                <h1 className="sm:text-[18px] text-3xl
         text-secondary uppercase tracking-wider  mt-16">FIND ME ON</h1>
                <h1 className="text-lg xs:text-3xl text-secondary">Feel free to <span className="text-[#915eef]">connect</span> with
                    me</h1>
                <p className="w-1/2 text-center text-secondary">
                    Do you have an idea? Let's discuss it and see what we can do
                    together.
                </p>
                <div className="flex justify-center gap-8 mb-20 mt-8 ">
                    <div>
                        <a href="https://www.instagram.com/_shherryy_/" target="_blank">
                            <svg xmlns="https://www.instagram.com/_shherryy_/" className="h-7 w-7 cursor-pointer dark:text-white"
                                fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>

                        </a>
                    </div>
                    <div>
                        <a href="www.linkedin.com/in/sharjeel-iftikhar-0x53" target="_blank">
                            <svg xmlns="www.linkedin.com/in/sharjeel-iftikhar-0x53" className="h-7 w-7 cursor-pointer dark:text-white"
                                fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                            </svg>
                        </a>
                    </div>

                    <div>
                        <a href="https://github.com/Sharjeel-Iftikhar " target="_blank">
                            <svg xmlns="https://github.com/Sharjeel-Iftikhar" className="h-7 w-7 cursor-pointer dark:text-white"
                                fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                    </div>

                </div>
            </div>
        </div>
   

    </>

  )
}

export default About;