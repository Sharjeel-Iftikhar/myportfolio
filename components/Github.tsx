'use client';
import { useEffect, useState } from "react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const Github = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [calendarProps, setCalendarProps] = useState({
        blockSize: 16,
        blockMargin: 5,
        fontSize: 16,
    });

    useEffect(() => {
        const updateCalendarProps = () => {
            const width = window.innerWidth;

            if (width >= 1024) {
                setCalendarProps({
                    blockSize: 16,
                    blockMargin: 5,
                    fontSize: 16,
                });
            } else if (width >= 768) {
                setCalendarProps({
                    blockSize: 8,
                    blockMargin: 4,
                    fontSize: 10,
                });

            }
            else if(width >= 370){
                setCalendarProps({
                    blockSize: 4,
                    blockMargin:2,
                    fontSize: 8,
                });
            }
             else {
                setCalendarProps({
                    blockSize: 3,
                    blockMargin:2,
                    fontSize: 8,
                });
            }
        };

        updateCalendarProps(); // Initial call
        window.addEventListener('resize', updateCalendarProps); // Update on resize

        return () => window.removeEventListener('resize', updateCalendarProps); // Cleanup
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    return (
        <div className="sm:px-16 px-12 sm:py-16 py-10 sm:max-w-[88rem] 2xl:max-w-[107rem] mx-auto">
            <h1 className={`font-black text-white lg:text-[46px] sm:text-[36px] xs:text-[30px] text-[36px] lg:leading-[72px]`}>
                Days <span className="text-[#915eff]">I Code</span>
            </h1>
            <div className="flex justify-center items-center mx-auto max-w-[88rem] mt-16">
                {isLoading ? (
                    <div>Loading...</div> // Loading message
                ) : (
                    <GitHubCalendar
                        username="Sharjeel-Iftikhar"
                        blockSize={calendarProps.blockSize}
                        blockMargin={calendarProps.blockMargin}
                        colorScheme="dark"
                        fontSize={calendarProps.fontSize}
                        style={{ marginTop: "20px", color: "white" }}
                        
                    />
                )}
            </div>
        </div>
    );
};

export default Github;
