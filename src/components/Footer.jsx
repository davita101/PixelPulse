import React from 'react'
import { headingText } from '../utils/scratchStyles'
import { footerHeading, navBar, socialArr } from '../utils'
import { Button } from './'
import { AiFillCompass } from 'react-icons/ai'
import { Link as LinkScroll } from "react-scroll"
import IconRenderer from '../utils/IconRenderer'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import gsap from 'gsap'
function Footer() {
    useEffect(() => {
        let tlMain = gsap.timeline({
            scrollTrigger: {
                trigger: '#Main',
                start: 'top center',
                end: ' center',
                scrub: true,
            }
        })
        tlMain.fromTo("#Main", { position: "fixed", bottom: 0 }, { position: "fixed", bottom: 0 })

        return () => {
            tlMain.kill()
        }
    }, [])
    return (
        <div>
            <div className='lg:h-[24rem] h-[40rem]'></div>
            <div id='Main' className='sm:pt-[3rem] w-full z-[1] fixed  p-[2rem] flex flex-col items-center pt-[2rem] sm:pb-[3rem] pb-[3rem]  bg-[black]'>
                <div className='xl:w-[68rem]  w-full justify-center flex flex-col gap-10 items-center'>
                    <div className='max-w-[75rem] flex flex-col justify-center items-center gap-5 sm:p-0 p-[1rem] text-center font-normal'>
                        <h2 className={`${headingText[0].primaryHeadingSmall} text-white max-w-[80rem] text-center`}>{footerHeading[0].h2}</h2>
                        <Button />
                    </div>
                    <div className='flex mt-5 w-full gap-5 items-center justify-between'>
                        <div className='flex items-center gap-1'>
                            <div className={`${headingText[0].flexCenter} gap-1 cursor-pointer `}>
                                <AiFillCompass className='text-[2rem] text-orange-500' />
                            </div>
                            <span className='text-white'>PixelPulse</span>
                        </div>
                        <ul className='lg:flex  hidden gap-5 '>
                            {navBar.map((item, index) => (
                                <div
                                    className={`${headingText[0].secondaryParagraph}  ul-container opacity-[1] font-normal text-white cursor-pointer`}
                                    key={index}>
                                    <LinkScroll
                                        activeClass="active"
                                        to={`${item.link}`}
                                        spy={true}
                                        smooth={true}
                                        duration={1}
                                    >
                                        <li>{item.name}</li>
                                    </LinkScroll>
                                    <div className='line-v1' />
                                </div>
                            ))}
                        </ul>
                        <ul className='sm:flex hidden  gap-5 '>
                            {socialArr.map((item, index) => (
                                <div
                                    className={`${headingText[0].secondaryParagraph}  ul-container opacity-[1] font-normal text-white cursor-pointer`}
                                    key={index}>
                                    <Link to={item.link} >
                                        <IconRenderer img={item.icon} class={"text-[1.5rem]"} alt={item.title} />
                                    </Link>
                                </div>
                            ))}
                        </ul>
                    </div>
                    <ul className='lg:hidden sm:flex-rwo flex-col w-full flex gap-5 items-start justify-start'>
                        {navBar.map((item, index) => (
                            <div
                                className={`${headingText[0].secondaryParagraph}  ul-container opacity-[1] font-normal text-white cursor-pointer`}
                                key={index}>
                                <LinkScroll
                                    activeClass="active"
                                    to={`${item.link}`}
                                    spy={true}
                                    smooth={true}
                                    duration={1}
                                >
                                    <li>{item.name}</li>
                                </LinkScroll>
                                <div className='line-v1' />
                            </div>
                        ))}
                    </ul>
                    <ul className='sm:hidden w-full justify-start flex gap-5 '>
                        {socialArr.map((item, index) => (
                            <div
                                className={`${headingText[0].secondaryParagraph}  ul-container opacity-[1] font-normal text-white cursor-pointer`}
                                key={index}>
                                <Link to={item.link} >
                                    <IconRenderer img={item.icon} class={"text-[1.5rem]"} alt={item.title} />
                                </Link>
                            </div>
                        ))}
                    </ul>
                    <p className='text-start w-full text-white opacity-[.8]'>{footerHeading[0].copyright}</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
