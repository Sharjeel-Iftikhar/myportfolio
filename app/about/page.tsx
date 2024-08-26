import React from 'react'
import StarsCanvas from '@/components/canvas/Stars';
import Tech from '@/components/Tech';

export default function page() {
  return (
    <>
    
      <div className="relative z-0 bg-primary">
        <StarsCanvas />
        
          <section className=" w-full mx-auto">
            <div
              className={`sm:px-16 px-12 pt-[92px] pb-10
                sm:max-w-[88rem] 2xl:max-w-[107rem] mx-auto flex md:flex-row flex-col items-start gap-10 md:gap-5 mt-0 md:mt-16`}
            >
              <div className='sm:w-[70%] w-full sm:text-left text-justify'>
                <h1
                  className={`font-black text-white lg:text-[46px] sm:text-[36px] xs:text-[30px] text-[36px] lg:leading-[72px] mt-2`}
                >
                  Know who
                  <span className="text-[#915eff]"> I'm</span>
                </h1>
                <p className="mt-2 text-secondary leading-10">
                  👋 Hi! I'm Sharjeel Iftikhar, straight outta{' '}
                  <span className="text-[#915eff]">Gujranwala</span>, Pakistan.
                  The land of epic BBQ,  <br className='sm:block hidden' />
                  strong chai, and legendary wrestlers (no, I don't wrestle...yet).
                  <br className='sm:block hidden' />
                  I’m a <span className="text-[#915eff]">software developer</span> by profession, transforming caffeine
                  into code.
                  <br className="sm:block hidden" />
                  I have completed BS-CS from <span className="text-[#915eff]">UET</span>, Lahore.
                  <br />
                  <span className='mt-16'>When I'm not typing away at my keyboard, you can catch me:</span>


                  <br />
                  🏏 Playing cricket
                  <br />
                  🕹️ Gaming
                  <br />
                  🌍 Traveling
                  <br />
                  <span className='italic'> ~ Stay awesome, and if you're ever in Gujranwala, let’s grab some BBQ! 🔥</span>
                </p>
              </div>

              <div className="w-[300px] mt-8">
                <img src="/assets/about.gif" className="w-full h-auto" alt="About GIF" />
              </div>
            </div>
          </section>
         

        

      </div>
      <div className="bg-primary">
        <Tech />
      </div>
      
    </>
  )
}
