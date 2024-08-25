'use client';
import { useEffect, useState } from "react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const Github = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
       
       
          setIsLoading(false);
         
      }, []);

      return (

    <div className="sm:px-16 px-6 sm:py-16 py-10 max-w-[88rem] mx-auto">
        <h1
          className={`font-black text-white lg:text-[46px] sm:text-[36px] xs:text-[30px] text-[36px] lg:leading-[72px]`}
        >
          Days 
          <span className="text-[#915eff]"> I Code</span>
        </h1>
        <div className="flex justify-center items-center mx-auto max-w-[88rem] mt-16">

       
         {isLoading ? (
        <div>Loading...</div> // Loading message
      ) : (
        <GitHubCalendar
          username="Sharjeel-Iftikhar"
          blockSize={16}
          blockMargin={5}
          colorScheme="dark"
          fontSize={16}
          style={{ marginTop: "20px", color: "white" }}
        />
      )}
        </div>
      </div>
      )
}

export default Github;