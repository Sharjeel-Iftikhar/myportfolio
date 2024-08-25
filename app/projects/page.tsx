'use client'
import { fadeIn, textVariant } from "../../utils/motion";
import { projects } from "../../constants/index";
import { motion } from "framer-motion";

import StarsCanvas from '@/components/canvas/Stars';
import ProjectCard from "@/components/ProjectCard";

export default function page() {
  return (
    
    <>
    <div className="relative z-0 bg-primary">
    <StarsCanvas />
    <motion.div variants={textVariant()}
      className="flex items-center justify-center flex-col mt-6 pt-[6%] pb-[10%]">
      <h1
          className={`font-black text-white lg:text-[46px] sm:text-[36px] xs:text-[30px] text-[36px] lg:leading-[72px]`}
        >
          My Recent
          <span className="text-[#915eff]"> Projects</span>
        </h1>

        <div className='w-full flex justify-center items-center text-center mt-8'>
          <motion.p
          variants={fadeIn("","", 0.1,1)}
          className='text-secondary mt-3  max-w-3xl leading-[30px]'>
             Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
          </motion.p>

      </div>
      </motion.div>

      
    
    </div>
    <div className='bg-primary relative z-0 '>
    <div className='flex flex-wrap gap-7 justify-center items-center'>
        {projects.map((project, index) => (
          <ProjectCard 
          key={`project-${index}`}
          index={index}
          name={project.name}
          description={project.description}
          tags={project.tags}
          image={project.image}
          source_code_link={project.source_code_link}
            />
        ))}
      </div>
    </div>
    
    
        
    </>
  );
};


