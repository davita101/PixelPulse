import React, { useEffect, useRef, useState } from 'react'
import { navBar } from '../utils'
import { headingText } from '../utils/scratchStyles'
import { AiFillCompass } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import { gsap } from 'gsap'



function Header() {
    const [click, setClick] = useState(false)
    const [clickOnLoader, setClickOnLoader] = useState(false)
    useEffect(() => {
        if (click) {
            gsap.fromTo("#navLinks > div", {
                opacity: 0,
                duration: .4,

            }, {
                opacity: 1,
                y: 0,
                stagger: .1,
                duration: .4,

            });
            gsap.fromTo("#navLinks", {
                opacity: 0,
                y: -500,
                duration: .4,

            }, {
                opacity: 1,
                y: 0,
                stagger: .1,
                duration: .2,

            });

        } else {
            gsap.fromTo("#navLinks > div", {
                opacity: 1,
                duration: .4,

            }, {
                opacity: 0,
                stagger: .1,
                duration: .4,


            });
            gsap.fromTo("#navLinks", {
                opacity: 1,
                y: 0,
                duration: .2,
            }, {
                opacity: 0,
                y: -500,
                stagger: .1,
                duration: .2,
            });

        }

    }, [click]);
    return (
        <div className='lg:px-[10rem] fixed w-full  p-5 flex lg:flex-row flex-col justify-between items-center'>
            {/* Logo */}
            <div className='flex justify-between lg:w-[120px]  w-full'>
                <div className={`${headingText[0].flexCenter} gap-1 cursor-pointer`}>
                    <AiFillCompass className='text-[2rem] text-orange-500' />
                    <h2 className={`${headingText[0].secondaryHeading}  font-medium`}>PixelPulse</h2>
                </div>
                <div
                    onClick={() => { setClick(!click), setClickOnLoader(true) }}
                    className='lg:hidden cursor-pointer'>
                    {!click ? <FaBars className='text-[1.5rem] transition-all opacity-1' />
                        : <FaX className={`text-[1.5rem] transition-all ${click ? "opacity-1" : "opacity-0"}`} />}
                </div>
            </div>
            {/* lists */}
            {/* Desktop */}
            <ul className='lg:flex hidden gap-5'>
                {navBar.map((item, index) => (
                    <div
                        className={`${headingText[0].secondaryParagraph}  ul-container opacity-[1] font-medium cursor-pointer`}
                        key={index}>
                        <li>{item.name}</li>
                        <div className='line' />
                    </div>
                ))}
            </ul>
            {/* Mobile */}
            <ul id="navLinks" className={`lg:hidden  w-[100vw] text-[2em] pb-5 border-b-2 border-orange-400 justify-center items-center flex overflow-hidden ${!clickOnLoader ? "z-[-1]" : "z-[1]"} cursor-pointer font-semibold  gap-4 transition-all flex-col `}>

                {navBar.map((item, index) => (
                    <div
                        className={`${headingText[0].secondaryHeading}  ul-container opacity-[1] cursor-pointer`}
                        key={index}>
                        <li>{item.name}</li>
                        <div className='line' />
                    </div>
                ))}
                <div>

                    <Link className='lg:hidden block' to='https://www.google.com'>
                        <div className={`border-[1px] border-orange-400 ${headingText[0].secondaryHeading} transition-all font-normal px-[1.5rem] py-[.5rem] rounded-full btn--color`}>
                            Get Template
                        </div>
                    </Link>
                    <Link className='hidden' to='https://www.google.com'>
                        <div className={`border-[1px] border-orange-400 ${headingText[0].secondaryHeading} transition-all font-normal px-[1.5rem] py-[.5rem] rounded-full btn--color`}>
                            Get Template
                        </div>
                    </Link>
                </div>

            </ul>
            {/* Button */}
            {/* Desktop */}
            <Link className='lg:flex hidden' to='https://www.google.com'>
                <div className={`border-[1px] border-orange-400 ${headingText[0].secondaryHeading} transition-all font-normal px-[1.5rem] py-[.5rem] rounded-full btn--color`}>
                    Get Template
                </div>
            </Link>
            <Link className='hidden' to='https://www.google.com'>
                <div className={`border-[1px] border-orange-400 ${headingText[0].secondaryHeading} transition-all font-normal px-[1.5rem] py-[.5rem] rounded-full btn--color`}>
                    Get Template
                </div>
            </Link>
        </div>
    )
}

export default Header
