import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import Github from "@/components/Github";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import { FaHtml5, FaSlack } from "react-icons/fa";
import {
  SiPostman,
  SiFirebase,
  SiNextdotjs,
  SiPostgresql,
  SiTypescript,
  SiFlutter,
  SiVercel,
  SiMacos,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";


const Tech = () => {
  return (
    <>
      <div className="sm:px-16 px-6 sm:py-16 py-10 max-w-[88rem] mx-auto">
        <h1
          className={`font-black text-white lg:text-[46px] sm:text-[36px] xs:text-[30px] text-[36px] lg:leading-[72px] mt-2`}
        >
          Professional
          <span className="text-[#915eff]"> Skillset</span>
        </h1>
      </div>
      <div className="flex flex-wrap flex-col max-w-[88rem] mx-auto mb-20">
        <div
          className=" sm:pt-10 pb-4  
       flex justify-center items-center gap-8
      "
        >
          <div className="tech-icon">
            <CgCPlusPlus />
          </div>
          <div className="tech-icon">
            <DiJavascript1 />
          </div>
          <div className="tech-icon">
            <DiMongodb />
          </div>
          <div className="tech-icon">
            <DiNodejs />
          </div>
          <div className="tech-icon">
            <DiReact />
          </div>
        </div>
        <div
          className=" sm:py-6 py-6
         flex justify-center items-center gap-8
      "
        >
          <div className="tech-icon">
            <SiNextdotjs />
          </div>
          <div className="tech-icon">
            <DiGit />
          </div>
          <div className="tech-icon">
            <SiFirebase />
          </div>
          <div className="tech-icon">
            <SiPostgresql />
          </div>
          <div className="tech-icon">
            <DiPython />
          </div>
        </div>
        <div
          className=" px-6 sm:pt-3 pt-3
         flex justify-center items-center gap-8
      "
        >
          <div className="tech-icon">
            <DiJava />
          </div>
          <div className="tech-icon">
            <SiTypescript />
          </div>
          <div className="tech-icon">
            <SiFlutter />
          </div>
          <div className="tech-icon">
            <FaHtml5 />
          </div>
        </div>
      </div>

      <div className="sm:px-16 px-6 sm:py-16 py-5 max-w-[88rem] mx-auto">
        <h1
          className={`font-black text-white lg:text-[46px] sm:text-[36px] xs:text-[30px] text-[36px] lg:leading-[72px]`}
        >
          Tools
          <span className="text-[#915eff]"> I used</span>
        </h1>
      </div>
      <div className="flex flex-wrap flex-col max-w-[88rem] mx-auto mb-14">
        <div
          className=" sm:pt-10 pb-4  
       flex justify-center items-center gap-8 
      "
        >
          <div className="tech-icon">
            <SiMacos />
          </div>
          <div className="tech-icon">
            <VscVscode />
          </div>
          <div className="tech-icon">
            <FaSlack />
          </div>
          <div className="tech-icon">
            <SiPostman />
          </div>
          <div className="tech-icon">
            <SiVercel />
          </div>
        </div>
      </div>

      <Github />

      {/* <div className="sm:px-16 px-6 sm:py-16 py-10 max-w-[88rem] mx-auto">
        <h1
          className={`font-black text-white lg:text-[46px] sm:text-[36px] xs:text-[30px] text-[36px] lg:leading-[72px]`}
        >
          Days 
          <span className="text-[#915eff]"> I Code</span>
        </h1>
        <div className="flex justify-center items-center mx-auto max-w-[88rem] mt-16">

       
        <GitHubCalendar
        username="Sharjeel-Iftikhar"
        blockSize={16}
        blockMargin={5}
        colorScheme="dark"
        
        fontSize={16} 
        style= {{marginTop: "20px", color: "white" }}  
        />
        </div>
      </div> */}
    </>
  );
};

export default Tech;
