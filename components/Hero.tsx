import React from 'react';
import { motion } from 'framer-motion';
import RobotCanvas from './canvas/Robot';

const Hero = () => {
  return (
    <>
      <section className="relative w-full h-screen mx-auto">
        <div
          className={`sm:px-16 px-12 sm:absolute inset-0 top-[120px] xs:pt-0 pt-[100px] sm:max-w-[88rem] 2xl:max-w-[107rem] mx-auto flex md:flex-row flex-col items-start gap-10 md:gap-5`}
        >
          {/* Left Section (Intro Text) */}
          <div className="hidden md:flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-[28rem] h-60 violet-gradient" />
          </div>

          {/* Main Text Section */}
          <div className="md:w-6/12 w-full">
            <h1
              className={`font-black text-white lg:text-[46px] sm:text-[36px] xs:text-[30px] text-[36px] lg:leading-[72px] mt-2`}
            >
              Hi, I'm Sharjeel{' '}
              <span className="text-[#915eff]">Iftikhar</span>
            </h1>
            <p
              className={`mt-2 text-secondary leading-10 xs:text-left text-justify`}
            >
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️ <br className="sm:block hidden" />
              I am fluent in classics like &nbsp;
              <span className="text-[#915eff]">
                JavaScript, C++ and Python.
              </span>
              <br className="sm:block hidden" />
              My field of Interest's are building new &nbsp;
              <span className="text-[#915eff]">
                Web Technologies and Products &nbsp;
              </span>
              and also in areas related to &nbsp;
              <br className="sm:block hidden" />
              <span className="text-[#915eff]">
                integration with cloud services.
              </span>
            </p>
          </div>

          {/* Robot Canvas Section */}
          <div className="md:w-6/12 w-full xs:h-screen sm:h-full">
            <RobotCanvas />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
