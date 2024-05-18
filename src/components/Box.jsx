import React, { useEffect, useState } from 'react'
import { designSolutions, getsResult, trendStats } from '../utils'
import IconRenderer from '../utils/IconRenderer'
import { headingText } from "../utils/scratchStyles"
import gsap from 'gsap'
function Box() {
    useEffect(() => {

        window.addEventListener('scroll', () => {
            if (window.scrollY > 700) {
                tl.play()
            } else {
                tl.stop()
            }

        })
        const tl = gsap.timeline({ paused: true })
        tl.fromTo("#D",
            {
                opacity: 0,
                y: 100
            }
            , {
                opacity: 1,
                y: 0,
                ease: "back.inOut",
                duration: 1

            }
        )
            .to("#G1",

                {
                    x: "23rem",
                    ease: "back.inOut",
                    duration: 1
                }, 0
            )
            .to("#G2",
                {
                    opacity: 1,
                    x: "-35rem",
                    ease: "back.inOut",
                    duration: 1
                }, 0
            )
    }, [])


    return (
        <div>
            <div className='grid gap-[1rem] lg:grid-cols-2  justify-center items-center'>
                <div className='shadow-lg max-w-[32rem] bg-white p-[1rem] rounded-3xl gap-[1rem] flex flex-col'>
                    <div className='flex items-center gap-[.5rem]'>
                        <div className='bg-orange-400 rounded-full p-[.5rem]'>
                            <IconRenderer class={"text-[1.3rem] text-white"} img={designSolutions[0].icon} alt="Crown Icon" />
                        </div>
                        <h3 className='fs-secondary-400 font-bold text-gray-700'>{designSolutions[0].h3}</h3>
                    </div>
                    <p className={`${headingText[0].secondaryParagraph} text-start `} >{designSolutions[0].p}</p>
                    <div className=' relative lg:max-w-[30rem] sm:w-[90vw] w-full h-[28rem] mt-[1rem] bg-[#f7f7f7] rounded-lg flex item-center justify-center'>
                        <img id='D' className='absolute top-[2rem]' src={designSolutions[0].img} alt="Stand Out Design Image" />
                    </div>
                </div>
                <div className='shadow-lg max-w-[32rem] bg-white p-[1rem] rounded-3xl gap-[1rem] flex flex-col'>
                    <div className='flex items-center gap-[.5rem]'>
                        <div className='bg-orange-400 rounded-full p-[.5rem]'>
                            <IconRenderer class={"text-[1.3rem] text-white"} img={getsResult[0].icon} alt="Crown" />
                        </div>
                        <h3 className='fs-secondary-400 font-bold text-gray-700'>{getsResult[0].h3}</h3>
                    </div>
                    <p className={`${headingText[0].secondaryParagraph} text-start `} >{getsResult[0].p}</p>
                    <div className='sm:m-0 overflow-hidden relative lg:max-w-[30rem] sm:w-[90vw] w-full h-[29rem] mt-[1rem] bg-[#f7f7f7] rounded-lg flex item-center justify-center'>
                        <img id='G1' className='w-[20rem] absolute top-[.1rem] left-[-30rem]' src={getsResult[0].img1[0]} alt="Design solution image 1" />
                        <img id='G2' className='w-[28rem] absolute sm:bottom-[-1.5rem] bottom-[-1rem] sm:right-[-39rem] right-[-37rem]' src={getsResult[0].img2[0]} alt="Design solution image 2" />
                    </div>
                </div>
                <div className='shadow-lg max-w-[32rem] bg-white p-[1rem] rounded-3xl gap-[1rem] flex flex-col'>
                    <div className='flex items-center gap-[.5rem]'>
                        <div className='bg-orange-400 rounded-full p-[.5rem]'>
                            <IconRenderer class={"text-[1.3rem] text-white"} img={trendStats[0].icon} alt="Pc Mobile Icon" />
                        </div>
                        <h3 className='fs-secondary-400 font-bold text-gray-700'>{trendStats[0].h3}</h3>
                    </div>
                    <p className={`${headingText[0].secondaryParagraph} text-start `} >{trendStats[0].p}</p>
                    <div className='sm:m-0 overflow-hidden relative lg:max-w-[30rem] sm:w-[90vw] w-full h-[29rem] mt-[1rem] bg-[#f7f7f7] rounded-lg flex item-center justify-center'>
                        <img id='T1' className='w-[3rem] absolute h-[3rem]' src={trendStats[0].img1[0]} alt={trendStats[0].img1[1]} />
                        <img id='T2' className='w-[3rem] absolute h-[3rem]' src={trendStats[0].img2[0]} alt={trendStats[0].img2[1]} />
                        <img id='T3' className='w-[3rem] absolute h-[3rem]' src={trendStats[0].img3[0]} alt={trendStats[0].img3[1]} />
                        <img id='T4' className='w-[3rem] absolute h-[3rem]' src={trendStats[0].img4[0]} alt={trendStats[0].img4[1]} />
                        <img id='T5' className='w-[3rem]  absolute h-[3rem]' src={trendStats[0].img5[0]} alt={trendStats[0].img5[1]} />
                        <img id='T6' className='w-[3rem] absolute h-[3rem]' src={trendStats[0].img6[0]} alt={trendStats[0].img6[1]} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Box
