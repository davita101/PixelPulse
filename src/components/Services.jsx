import React, { useEffect, useState } from 'react';
import { serviceArray, serviceHeading } from '../utils';
import { headingText } from '../utils/scratchStyles';
import IconRenderer from '../utils/IconRenderer';
import { Button, Pricing } from '.';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
function Services() {
    gsap.registerPlugin(ScrollTrigger);
    const [size, setSize] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener("resize", () => {
            setSize(window.innerWidth)
        })
        // Scroll animation
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#H',
                pin: true,
                start: 'top top',
                end: '100% center',
                scrub: true,
                pinSpacing: true,
            }
        })
        tl.fromTo("#H0", { yPercent: 0 }, { yPercent: 0, duration: 1, ease: "none" })
            .fromTo("#H1", { yPercent: 0 }, { yPercent: -86, duration: 1, ease: "none" }, 0)
            .fromTo("#H2", { yPercent: 0 }, { yPercent: -86, duration: 1, ease: "none" }, 0)
            .fromTo("#H3", { yPercent: 0 }, { yPercent: -86, duration: 1, ease: "none" }, 0)
            // ------------------------------------------------------------------ 1
            .fromTo("#H0", { yPercent: 0 }, { yPercent: 0, duration: 1, ease: "none" }, 1)
            .fromTo("#H1", { yPercent: -86 }, { yPercent: -86, duration: 1, ease: "none" }, 1)
            .fromTo("#H2", { yPercent: -86 }, { yPercent: -170, duration: 1, ease: "none" }, 1)
            .fromTo("#H3", { yPercent: -86 }, { yPercent: -170, duration: 1, ease: "none" }, 1)
            // ------------------------------------------------------------------ 2
            .fromTo("#H0", { yPercent: 0 }, { yPercent: 0, duration: 1, ease: "none" }, 2)
            .fromTo("#H1", { yPercent: -86 }, { yPercent: -86, duration: 1, ease: "none" }, 2)
            .fromTo("#H2", { yPercent: -170 }, { yPercent: -170, duration: 1, ease: "none" }, 2)
            .fromTo("#H3", { yPercent: -170 }, { yPercent: -256, duration: 1, ease: "none" }, 2)
            // ------------------------------------------------------------------ 3
            .fromTo("#H3", { yPercent: -256 }, { yPercent: -333, duration: 1, ease: "none" }, 3)
            .fromTo("#H2", { yPercent: -170 }, { yPercent: -222, duration: 1, ease: "none" }, 3)
            .fromTo("#H1", { yPercent: -86 }, { yPercent: -112, duration: 1, ease: "none" }, 3)
            // ------------------------------------------------------------------ 4 
            .fromTo("#M", { height: "80%", ease: "none" }, { height: ` ${size > 1024 ? "50%" : size > 520 ? "50%" : "50%"}`, duration: 1, ease: "none" }, 2)
            .fromTo("#M", { height: `50%`, ease: "none" }, { height: ` ${size > 1024 ? "33%" : size > 520 ? "40%" : "45%"}`, duration: 1, ease: "none" }, 3)
            .to('#HM', { height: '50rem' })
        tl.seek()
        return () => {
            tl.revert()
        }
    }, [size])

    return (
        <div id='H' className='sm:pt-[3rem] w-full relative lg:h-[1350px] h-full flex flex-col items-center lg:p-[2rem] p-[1rem] pt-[2rem] sm:pb-[3rem] pb-[3rem] bg-[#f7f7f7]'>
            <div name='/pricing' id='M' className=' w-full absolute bg-white' >
                <Pricing id='services' className="z-[99] absolute" />
            </div>
            <div id='F' className='w-full sm:mt-[4rem] mt-[2rem] relative  xl:w-[68rem] justify-between flex lg:flex-row flex-col lg:text-start gap-[5rem] sm:p-0 p-[1rem] font-normal'>
                <div className='lg:flex relative grid lg:text-start text-center flex-col lg:items-start items-center gap-5'>
                    <h2 className={`${headingText[0].primaryHeadingSmall}`}>Choose Your {size > 1024 && <br />} Design Adventure</h2>
                    <p className={`${headingText[0].secondaryParagraph}`}>{serviceHeading[0].p}</p>
                    <Button className='lg:justify-start justify-center' />
                </div>
                <div id='HM' className='grid gap-[2rem]'>
                    {serviceArray.map((item, index) => (
                        <div key={index} id={`H${index}`} className='flex relative bg-white shadow-md h-[18.5rem] p-[2rem] rounded-2xl flex-col gap-[1rem]'>
                            <div className='flex items-center gap-[.5rem]'>
                                <div className='text-[1.4rem] bg-orange-400 rounded-full text-white p-[.5rem]'>
                                    <IconRenderer img={item.img} alt={item.h3} />
                                </div>
                                <h3 className={`fs-secondary-400 font-bold text-gray-800`}>{item.h3}</h3>
                            </div>
                            <p className={`lg:max-w-[28rem] w-full opacity-[.7] ${headingText[0].secondaryParagraph}`}>{item.p}</p>
                            <div id='Line' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services;
