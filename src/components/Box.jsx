import React, { useEffect, useRef, useState } from 'react'
import { designSolutions, expertise, getsResult, trendStats } from '../utils'
import IconRenderer from '../utils/IconRenderer'
import { headingText } from "../utils/scratchStyles"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
function Box() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const tl = gsap.timeline({ paused: true })
        // designSolutions
        const tl1 = gsap.timeline({ paused: true })
        const tl2 = gsap.timeline({ paused: true })
        // expertise


        tl.fromTo(
            "#D",
            {
                opacity: 0,
                y: 100,
            },
            {
                opacity: 1,
                y: 0,
                ease: "back.inOut",
                duration: 1,
                scrollTrigger: {
                    trigger: "#D",
                    onEnter: () => tl.play(),
                },
            }
        )
        tl1.to("#G1",
            {
                x: "23rem",
                ease: "back.inOut",
                duration: 1,
                scrollTrigger: {
                    trigger: "#G1",
                    onEnter: () => tl1.play(),
                },
            }, 0
        )
            .to("#G2",
                {
                    opacity: 1,
                    x: "-35rem",
                    ease: "back.inOut",
                    duration: 1,

                }, 0
            )
        tl2.to("#T1", {
            top: '5rem',
            left: '5rem',
            scrollTrigger: {
                trigger: "#T1",
                onEnter: () => tl2.play(),
            },

        }, 0)
            .to("#T2", {
                top: '13rem',
                left: "2rem"
            }, 0)
            .to("#T3", {
                top: '20rem',
                left: "4.5rem"
            }, 0)
            .to("#T4", {
                top: '5rem',
                right: '4rem'
            }, 0)
            .to("#T5", {
                top: '13rem',
                right: "2rem"
            }, 0)
            .to("#T6", {
                top: '20rem',
                right: "4rem"
            }, 0)

        gsap.to("#E1", {
            top: "2rem",
            opacity: 1,
            left: "1rem",
            scrollTrigger: {
                trigger: "#E",
                start: "top 900rem",
            },

        }, 0)
        gsap.to("#E2", {
            opacity: 1,
            bottom: "10rem",
            left: "1rem",
            scrollTrigger: {
                trigger: "#E2",
                start: "top 800rem",
            },

        }, 0)
        gsap.to("#E3", {
            opacity: 1,
            top: "8rem",
            right: "1rem",
            scrollTrigger: {
                trigger: "#E3",
                start: "top 1000rem",

            },
        }, 0)
        gsap.to("#E4", {
            opacity: 1,
            bottom: "4rem",
            right: "1rem",
            scrollTrigger: {
                trigger: "#E2",
                start: "top 700rem",
            },
        }, 0)

    }, [])


    return (
        <div>
            <div className='grid gap-[1rem] lg:grid-cols-2  justify-center items-center'>
                <div className='shadow-lg lg:max-w-[33rem] max-full bg-white p-[1.5rem] rounded-3xl gap-[1rem] flex flex-col'>
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
                <div className='shadow-lg lg:max-w-[32rem] max-full bg-white p-[1.5rem] rounded-3xl gap-[1rem] flex flex-col'>
                    <div className='flex items-center gap-[.5rem]'>
                        <div className='bg-orange-400 rounded-full p-[.5rem]'>
                            <IconRenderer class={"text-[1.3rem] text-white"} img={getsResult[0].icon} alt="Crown" />
                        </div>
                        <h3 className='fs-secondary-400 font-bold text-gray-700'>{getsResult[0].h3}</h3>
                    </div>
                    <p className={`${headingText[0].secondaryParagraph} text-start `} >{getsResult[0].p}</p>
                    <div className='sm:m-0 overflow-hidden relative lg:max-w-[29rem] sm:w-[90vw] w-full h-[29rem] mt-[1rem] bg-[#f7f7f7] rounded-lg flex item-center justify-center'>
                        <img id='G1' className='w-[20rem] absolute top-[.1rem] left-[-30rem]' src={getsResult[0].img1[0]} alt="Design solution image 1" />
                        <img id='G2' className='w-[28rem] absolute sm:bottom-[-1.5rem] bottom-[-1rem] sm:right-[-39rem] right-[-37rem]' src={getsResult[0].img2[0]} alt="Design solution image 2" />
                    </div>
                </div>
                <div className='shadow-lg lg:max-w-[33rem] max-full bg-white p-[1.5rem] rounded-3xl gap-[1rem] flex flex-col'>
                    <div className='flex items-center gap-[.5rem]'>
                        <div className='bg-orange-400 rounded-full p-[.5rem]'>
                            <IconRenderer class={"text-[1.3rem] text-white"} img={trendStats[0].icon} alt="Pc Mobile Icon" />
                        </div>
                        <h3 className='fs-secondary-400 font-bold text-gray-700'>{trendStats[0].h3}</h3>
                    </div>
                    <p className={`${headingText[0].secondaryParagraph} text-start `} >{trendStats[0].p}</p>
                    <div className='sm:m-0 overflow-hidden relative lg:max-w-[30rem] sm:w-[90vw] w-full h-[29rem] mt-[1rem] bg-[#f7f7f7] rounded-lg flex items-center justify-center'>
                        <img id="T1" className='w-[3rem] absolute h-[3rem]' src={trendStats[0].img1[0]} alt={trendStats[0].img1[1]} />
                        <img id="T2" className='w-[3rem] absolute h-[3rem]' src={trendStats[0].img2[0]} alt={trendStats[0].img2[1]} />
                        <img id="T3" className='w-[3rem] absolute h-[3rem]' src={trendStats[0].img3[0]} alt={trendStats[0].img3[1]} />
                        <img id="T4" className='w-[3rem] absolute h-[3rem]' src={trendStats[0].img4[0]} alt={trendStats[0].img4[1]} />
                        <img id="T5" className='w-[3rem]  absolute h-[3rem]' src={trendStats[0].img5[0]} alt={trendStats[0].img5[1]} />
                        <img id="T6" className='w-[3rem] absolute h-[3rem]' src={trendStats[0].img6[0]} alt={trendStats[0].img6[1]} />
                        <div id="T7" className='shadow-lg relative z-[5] sm:p-[2rem] p-[1rem] rounded-full bg-orange-400 sm:text-[8rem] text-[3rem] text-white'>
                            <IconRenderer id="T7" img={trendStats[0].icon} />
                        </div>
                    </div>
                </div>
                <div className='shadow-lg lg:max-w-[33rem] max-full bg-white p-[1.5rem] rounded-3xl gap-[1rem] flex flex-col'>
                    <div className='flex items-center gap-[.5rem]'>
                        <div className='bg-orange-400 rounded-full p-[.5rem]'>
                            <IconRenderer class={"text-[1.3rem] text-white"} img={expertise[0].icon} alt="Pc Mobile Icon" />
                        </div>
                        <h3 className='fs-secondary-400 font-bold text-gray-700'>{expertise[0].h3}</h3>
                    </div>
                    <p className={`${headingText[0].secondaryParagraph} text-start `} >{expertise[0].p}</p>
                    <div id="E" className='sm:m-0 overflow-hidden relative lg:max-w-[30rem] sm:w-[90vw] w-full h-[29rem] mt-[1rem] bg-[#f7f7f7] rounded-lg flex items-center justify-center'>
                        {/* First person */}
                        <div id='E1' className='flex opacity-[0] absolute left-[-100rem] items-end gap-[1rem]'>
                            <div className='bg-white shadow-sm shadow-orange-100 p-[1rem] max-w-[400px] text-start rounded-xl'>
                                <p className={` fs-secondary-100 opacity-[.8] max-w-[280px]`}>{expertise[0].dialogFirst1}</p>
                            </div>
                            <div className='w-[2.5rem] rounded-full overflow-hidden'>
                                <img src={expertise[0].img1} alt="Alfred Hikogo freelancer" />
                            </div>
                        </div>
                        <div id='E2' className='flex opacity-[0] absolute left-[-100rem] items-end gap-[1rem]'>
                            <div className='bg-white shadow-sm shadow-orange-100 p-[1rem] max-w-[400px] text-start rounded-xl'>
                                <p className={` fs-secondary-100 opacity-[.8] max-w-[280px]`}>{expertise[0].dialogFirsrt2}</p>
                            </div>
                            <div className='w-[2.5rem] rounded-full overflow-hidden'>
                                <img src={expertise[0].img1} alt="Alfred Hikogo freelancer" />
                            </div>
                        </div>
                        {/* second person */}
                        <div id='E3' className='flex opacity-[0] absolute right-[-100rem] items-start flex-row-reverse gap-[1rem]'>
                            <div className='bg-white shadow-sm shadow-orange-100 p-[1rem] max-w-[400px] text-start rounded-xl'>
                                <p className={` fs-secondary-100 opacity-[.8] max-w-[280px]`}>{expertise[0].dialogSecond1}</p>
                            </div>
                            <div className='w-[2.5rem] rounded-full overflow-hidden'>
                                <img src={expertise[0].img2} alt="Alfred Hikogo freelancer" />
                            </div>
                        </div>
                        <div id='E4' className='flex opacity-[0] absolute right-[-100rem] items-start flex-row-reverse gap-[1rem]'>
                            <div className='bg-white shadow-sm shadow-orange-100 p-[1rem] max-w-[400px] text-start rounded-xl'>
                                <p className={` fs-secondary-100 opacity-[.8] max-w-[280px]`}>{expertise[0].dialogSecond2}</p>
                            </div>
                            <div className='w-[2.5rem] rounded-full overflow-hidden'>
                                <img src={expertise[0].img2} alt="Alfred Hikogo freelancer" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Box
